'use client';

import { useState } from 'react';

export default function TestErrorPage() {
  const [showError, setShowError] = useState(false);

  const triggerError = () => {
    // Ovo će namjerno baciti grešku za testiranje Sentry-ja
    throw new Error('Test greška za Sentry - sve radi kako treba!');
  };

  if (showError) {
    triggerError();
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Sentry Error Tracking</h1>
      <p>Klikni dugme da testiraš Sentry:</p>
      <button
        onClick={() => setShowError(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Testiraj Grešku
      </button>
    </div>
  );
}
