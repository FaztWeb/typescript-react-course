import React from "react";
import "./App.css";

import { BasicProps } from "./basics/BasicProps";
import MyDiv from './libraries/MyDiv'
import {Posts} from './fetch/Posts'

function App(): JSX.Element {
  return (
    <>
      List of Topics
      <BasicProps
        title="hello World"
        sayHello={(name: string) => "Hello world " + name}
        active={true}
        favoriteNumber={7}
        address={{ city: "London", street: "221b Barker Street" }}
        user={{ age: 30, fullname: "Sherlock Holmes", username: "Sherlock" }}
        optProp={true}
      />
      <MyDiv/>
      <Posts/>

    </>
  );
}

export default App;
