import React, { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <input
        key={props.id}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      {props.result && <p className="fahrenheit">{props.result}</p>}
    </Fragment>
  );
};

export default Input;
