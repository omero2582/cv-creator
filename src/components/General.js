import React, { Component } from "react";

class General extends Component {
  render() {
    const { general, onInput } = this.props;
    return(
      <>
      <fieldset>
        <legend>General</legend>
        <label>Name:
          <input value={general.name} onChange={(e) => onInput(e, 'name')}></input>
        </label>
        <label>Email:
          <input type='email' value={general.email} onChange={(e) => onInput(e, 'email')}></input>
        </label>
        <label>Phone #:
          <input type='tel' value={general.phone} onChange={(e) => onInput(e, 'phone')}></input>
        </label>
      </fieldset>
      </>
    );
  }
}

export default General