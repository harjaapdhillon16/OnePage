import React from 'react';

const TextSection = () => {
  return (
    <div className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Text</h2>
      </div>
      <div className="column is-7 has-text-left">
        <h2 className="subtitle is-6 has-text-weight-light">
          This is <span className="bold">bold</span> and this is{' '}
          <strong>strong</strong>. This is{' '}
          <span className="italic">italic</span> and this is emphasized. This is{' '}
          <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is underlined and this is code:{' '}
          <span className="code"> for (;;) {`{...}`}</span> Finally, this is a{' '}
          <span className="underline">link</span>.
        </h2>
      </div>
    </div>
  );
};
export default TextSection;
