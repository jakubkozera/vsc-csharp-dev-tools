import { useState } from 'react';

const FEATURES = [
  { id: 'solution_explorer', label: 'Solution Explorer' },
  { id: 'nuget_manager', label: 'NuGet Package Manager' },
  { id: 'file_templates', label: 'File Templates' },
  { id: 'csharp_lsp', label: 'C# LSP' },
  { id: 'csharp_quickfixes', label: 'C# Quick fixes' },
  { id: 'refactornigs', label: 'Refactorings' },
  { id: 'code_navigation', label: 'Code Navigation & IntelliSense' },
  { id: 'tools', label: 'Tools (JWT, JSON→C#, etc.)' },
  { id: 'tests', label: 'Running tests' },
  { id: 'debugger', label: 'Debugger' },
  { id: 'multi_solution', label: 'Multi solution workspace' },
  { id: 'razor_pages', label: 'Razor Page Support' },
];

const USAGE_DURATIONS = [
  { value: 'less_than_1_month', label: 'Less than 1 month' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: '6_12_months', label: '6–12 months' },
  { value: 'over_1_year', label: 'Over 1 year' },
];

// Application Insights direct ingestion (browser)
// Parse iKey and ingestion endpoint from the connection string injected at build time.
const AI_CONNECTION_STRING = import.meta.env.PUBLIC_APPINSIGHTS_CONNECTION_STRING ?? '';

function parseConnectionString(cs: string): { iKey: string; endpoint: string } {
  const get = (key: string) => {
    const match = cs.match(new RegExp(`(?:^|;)${key}=([^;]+)`, 'i'));
    return match ? match[1] : '';
  };
  const iKey = get('InstrumentationKey');
  const ingestion = get('IngestionEndpoint');
  const endpoint = ingestion
    ? ingestion.replace(/\/$/, '') + '/v2/track'
    : 'https://dc.services.visualstudio.com/v2/track';
  return { iKey, endpoint };
}

const { iKey: AI_IKEY, endpoint: AI_INGESTION_ENDPOINT } = parseConnectionString(AI_CONNECTION_STRING);

async function sendToAppInsights(name: string, properties: Record<string, string | number | boolean>) {
  if (!AI_IKEY) {
    console.warn('[Feedback] Application Insights instrumentation key not configured.');
    return;
  }
  const envelope = {
    name: 'Microsoft.ApplicationInsights.Event',
    time: new Date().toISOString(),
    iKey: AI_IKEY,
    tags: {
      'ai.application.ver': '1.0.0',
      'ai.cloud.role': 'docs-feedback-form',
    },
    data: {
      baseType: 'EventData',
      baseData: {
        ver: 2,
        name,
        properties,
      },
    },
  };

  try {
    await fetch(AI_INGESTION_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(envelope),
    });
  } catch (err) {
    console.error('[Feedback] Failed to send telemetry:', err);
  }
}

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [usageDuration, setUsageDuration] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [missingFeatures, setMissingFeatures] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !usageDuration) return;

    setSubmitting(true);

    await sendToAppInsights('FeedbackSubmitted', {
      rating,
      usageDuration,
      features: selectedFeatures.join(';'),
      missingFeatures: missingFeatures.trim().slice(0, 500),
      hasMissingFeatures: missingFeatures.trim().length > 0,
      featureCount: selectedFeatures.length,
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="feedback-success">
        <div className="feedback-success-icon">🎉</div>
        <h2>Thank you for your feedback!</h2>
        <p>Your input helps us improve C# Dev Tools for everyone.</p>
        {rating === 5 && (
          <div className="feedback-review-cta">
            <p>
              We're thrilled you love it! Would you mind leaving a quick review?
              It helps others discover the extension.
            </p>
            <div className="feedback-review-links">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=jakubkozera.csharp-dev-tools&ssr=false#review-details"
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-btn feedback-btn-primary"
              >
                Review on VS Marketplace
              </a>
              <a
                href="https://open-vsx.org/extension/jakubkozera/csharp-dev-tools/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-btn feedback-btn-secondary"
              >
                Review on Open VSX
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  const displayRating = hovered || rating;

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      {/* Rating */}
      <div className="feedback-section">
        <label className="feedback-label">
          Overall rating <span className="feedback-required">*</span>
        </label>
        <div className="feedback-stars" role="group" aria-label="Rating">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              type="button"
              className={`feedback-star ${star <= displayRating ? 'feedback-star-active' : ''}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              aria-label={`${star} star${star !== 1 ? 's' : ''}`}
            >
              ★
            </button>
          ))}
        </div>
        <p className="feedback-star-hint">
          {displayRating === 1 && 'Poor'}
          {displayRating === 2 && 'Fair'}
          {displayRating === 3 && 'Good'}
          {displayRating === 4 && 'Very good'}
          {displayRating === 5 && 'Excellent!'}
        </p>
      </div>

      {/* Usage Duration */}
      <div className="feedback-section">
        <label className="feedback-label" htmlFor="usage-duration">
          How long have you been using C# Dev Tools?{' '}
          <span className="feedback-required">*</span>
        </label>
        <select
          id="usage-duration"
          className="feedback-select"
          value={usageDuration}
          onChange={e => setUsageDuration(e.target.value)}
          required
        >
          <option value="" disabled>
            Select duration…
          </option>
          {USAGE_DURATIONS.map(d => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      {/* Features used */}
      <div className="feedback-section">
        <fieldset className="feedback-fieldset">
          <legend className="feedback-label">Which features do you use?</legend>
          <div className="feedback-checkboxes">
            {FEATURES.map(feature => (
              <label key={feature.id} className="feedback-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature.id)}
                  onChange={() => toggleFeature(feature.id)}
                  className="feedback-checkbox"
                />
                {feature.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Missing features */}
      <div className="feedback-section">
        <label className="feedback-label" htmlFor="missing-features">
          Is there anything missing or that could be improved?
        </label>
        <textarea
          id="missing-features"
          className="feedback-textarea"
          rows={4}
          placeholder="Share your ideas or describe what you'd like to see…"
          value={missingFeatures}
          onChange={e => setMissingFeatures(e.target.value)}
          maxLength={500}
        />
        <p className="feedback-char-count">{missingFeatures.length}/500</p>
      </div>

      <button
        type="submit"
        className="feedback-submit"
        disabled={submitting || !rating || !usageDuration}
      >
        {submitting ? 'Sending…' : 'Submit Feedback'}
      </button>
    </form>
  );
}
