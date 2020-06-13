/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  input {
  }
  .width100 {
    width: 100%;
  }
  select {
    width: 100%;
  }
  button {
    border-radius: 100px;
  }
`;

const Form = () => {
  return (
    <Container className="columns has-text-left borderBottom">
      <div className="column is-4">
        <h1 className="subtitle is-4 has-text-weight-light has-text-black">
          Form
        </h1>
      </div>
      <div className="column is-8">
        <div className="columns is-multiline">
          <div className="column is-5">
            <h1 className="subtitle is-6 has-text-weight-light has-text-black">
              Name
            </h1>
            <input className="input is-medium" type="text" placeholder="" />
          </div>
          <div className="column is-5">
            <h1 className="subtitle is-6 has-text-weight-light has-text-black">
              Email
            </h1>
            <input className="input is-medium" type="text" placeholder="" />
          </div>
          <div className="column is-12">
            <h1 className="subtitle is-6 has-text-weight-light has-text-black">
              Department
            </h1>

            <div className="select width100">
              <select>
                <option>-Category-</option>
                <option>Manufacturing</option>
                <option>Shipping</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
          <div className="column">
            <label className="checkbox">
              <input type="checkbox" />
              Low Priority
            </label>
          </div>
          <div className="column">
            <label className="checkbox">
              <input type="checkbox" />
              Middle Priority
            </label>
          </div>
          <div className="column">
            <label className="checkbox">
              <input type="checkbox" />
              High Priority
            </label>
          </div>
          <div className="column is-12">
            <h1 className="subtitle is-6 has-text-weight-light has-text-black">
              Message
            </h1>
            <textarea
              className="textarea is-medium"
              type="text"
              placeholder=""
            />
          </div>
          <div className="column ">
            <button type="button" className="button is-medium">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Form;
