import React, { useState, useRef } from "react";

interface User {
  username: string;
  fullname: string;
  age: number;
}

interface Props {
  title: string;
  favoriteNumber: number;
  active: boolean;
  sayHello: (name: string) => void;
  address: { street: string; city: string };
  user: User;
  optProp?: boolean;
}

export const BasicProps: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<{ name: string }>({ name: "joe" });

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <div>
        <p>User: {user.name}</p>
        <button onClick={() => setUser({ name: "Ryan" })}>Update User</button>
      </div>

      <form ref={formRef}>
        <input type="text" placeholder="write something" ref={inputRef} onChange={handleInputChange} />
      </form>
    </div>
  );
};
