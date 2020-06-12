import React from 'react';

const Code = () => {
  return (
    <div className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Code</h2>
      </div>
      <div className="column is-7 has-text-left">
        <h2 className="subtitle is-6 code">
          i = 0;
          <br /> <br /> while (!deck.isInOrder()) {`{`}
          <br />
          print 'Iteration ' + i;
          <br />
          deck.shuffle();
          <br />
          i++; <br />
          {`}`}
          <br />
          print 'It took ' + i + ' iterations to sort the deck.';
        </h2>
      </div>
    </div>
  );
};
export default Code;
