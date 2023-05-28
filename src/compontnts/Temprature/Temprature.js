import React, { Fragment, useState } from "react";
import Input from "../Input/Input";

const Temprature = () => {
  const [input, setInput] = useState({
    enterCf: "",
    cfResult: "",
    enterCk: "",
    ckResult: "",
    enterFc: "",
    fcResult: "",
    enterFk: "",
    fkResult: "",
    enterKc: "",
    kcResult: "",
    enterKf: "",
    kfResult: "",
  });

  const celsiusToFahrenheitChangeHandler = (event) => {
    const cfValue = event.target.value;
    const cfParseFloat = parseFloat(cfValue);
    const result = (cfParseFloat * 9) / 5 + 32 + "°Fahrenheit";
    setInput((prev) => ({
      ...prev,
      enterCf: cfValue,
      cfResult: result,
    }));
    if (cfValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterCf: "",
        cfResult: "",
      }));
    }
  };

  const celsiusToKelvinChangeHandler = (event) => {
    const ckValue = event.target.value;
    const ckParseFloat = parseFloat(ckValue);
    const result = ckParseFloat + 273.15 + "kelvin";
    setInput((prev) => ({
      ...prev,
      enterCk: ckValue,
      ckResult: result,
    }));
    if (ckValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterCk: "",
        ckResult: "",
      }));
    }
  };

  const fahrenheitToCelsiusChangeHandler = (event) => {
    const fcValue = event.target.value;
    const fcParseFloat = parseFloat(fcValue);
    const result = ((fcParseFloat - 32) * 5) / 9 + "°celsius";
    setInput((prev) => ({
      ...prev,
      enterFc: fcValue,
      fcResult: result,
    }));
    if (fcValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterFc: "",
        fcResult: "",
      }));
    }
  };

  const fahrenheitToKelvinChangeHandler = (event) => {
    const fkValue = event.target.value;
    const fkParseFloat = parseFloat(fkValue);
    const result = ((fkParseFloat - 32) * 5) / 9 + 273.15 + "kelvin";
    setInput((prev) => ({
      ...prev,
      enterFk: fkValue,
      fkResult: result,
    }));
    if (fkValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterFk: "",
        fkResult: "",
      }));
    }
  };

  const kelvinToCelsiusChangeHandler = (event) => {
    const kcValue = event.target.value;
    const kcParseFloat = parseFloat(kcValue);
    const result = kcParseFloat - 273.15 + "°celsius";
    setInput((prev) => ({
      ...prev,
      enterKc: kcValue,
      kcResult: result,
    }));
    if (kcValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterKc: "",
        kcResult: "",
      }));
    }
  };

  const kelvinToFahrenheitChangeHandler = (event) => {
    const kfValue = event.target.value;
    const kfParseFloat = parseFloat(kfValue);
    const result = ((kfParseFloat - 273) * 9) / 5 + 32 + "°Fahrenheit";
    setInput((prev) => ({
      ...prev,
      enterKf: kfValue,
      kfResult: result,
    }));
    if (kfValue.length === 0) {
      setInput((prev) => ({
        ...prev,
        enterKf: "",
        kfResult: "",
      }));
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <form>
            <label htmlFor="">Temperature conversion</label>
            <Input
              type="number"
              name="temp-celsius"
              id="temp-celsius"
              placeholder="°celsius"
              onChange={celsiusToFahrenheitChangeHandler}
              value={input.enterCf}
              result={input.cfResult}
            />

            {/* <!-- celsius to kelvin  --> */}
            <Input
              type="number"
              name="temp-cel"
              id="temp-cel"
              placeholder="°celsius"
              onChange={celsiusToKelvinChangeHandler}
              value={input.enterCk}
              result={input.ckResult}
            />
            {/* <!-- fahrenheit to celsius  --> */}
            <Input
              type="number"
              name="temp-fahrenheit"
              id="temp-fahrenheit"
              placeholder="°fahrenheit"
              showError="celsius"
              onChange={fahrenheitToCelsiusChangeHandler}
              value={input.enterFc}
              result={input.fcResult}
            />
            {/* <!-- fahrenheit to kelvin  --> */}
            <Input
              type="number"
              name="temp-fah"
              id="temp-fah-kel"
              placeholder="°fahrenheit"
              onChange={fahrenheitToKelvinChangeHandler}
              value={input.enterFk}
              result={input.fkResult}
            />
            {/* <!-- kelvin to celsius  --> */}
            <Input
              type="number"
              name="temp-kel"
              id="temp-kel-cel"
              placeholder="kelvin"
              onChange={kelvinToCelsiusChangeHandler}
              value={input.enterKc}
              result={input.kcResult}
            />
            {/* <!-- kelvin to fahrenheit --> */}
            <Input
              type="number"
              name="temp-kel-fa"
              id="temp-kel-fa"
              placeholder="kelvin"
              onChange={kelvinToFahrenheitChangeHandler}
              value={input.enterKf}
              result={input.kfResult}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Temprature;
