import React from "react";
import { BasicProps } from "./BasicProps";

const myComponent = () => {
  return (
    <BasicProps
      title="hello World"
      sayHello={(name: string) => "Hello world " + name}
      active={true}
      favoriteNumber={7}
      address={{ city: "London", street: "221b Barker Street" }}
      user={{ age: 30, fullname: "Sherlock Holmes", username: "Sherlock" }}
      optProp={true}
    />
  );
};

export default myComponent;
