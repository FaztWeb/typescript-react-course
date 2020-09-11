import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const MyDiv = () => {
  return (
    <div>
      <Button onClick={() => window.alert("Hello")}>Hello</Button>
    </div>
  );
};

export default MyDiv;
