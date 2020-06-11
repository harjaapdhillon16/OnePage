import React from 'react';

const OrderedList = ({ ListData }) => {
  return (
    <div className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left ">
        <h2 className="subtitle is-3 has-text-weight-light">OrderedList</h2>
      </div>
      <div className="column is-8 has-text-left">
        <h2 className="subtitle is-4 has-text-weight-light">Default</h2>
        <div className="content">
          <ol>
            {ListData.map(data => (
              <li>{data.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default OrderedList;
