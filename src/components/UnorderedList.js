import React from 'react';

const UnorderedList = ({ ListData }) => {
  return (
    <div className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left ">
        <h2 className="subtitle is-3 has-text-weight-light">UnorderedList</h2>
      </div>
      <div className="column is-8 has-text-left">
        <h2 className="subtitle is-4 has-text-weight-light">Default</h2>
        <div className="content">
          <ul>
            {ListData.map(data => (
              <li>{data.text}</li>
            ))}
          </ul>
          <div>
            <h1 className="title has-text-weight-light is-4">Alternate</h1>
            {ListData.map(data => (
              <h1 className="title has-text-weight-light is-5 borderBottom">
                {data.text}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnorderedList;
