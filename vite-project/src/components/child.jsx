import React from "react";

export function Child(props) {
  const { data } = props; 
  


  return (
    <>
      <form>
        <h1>This is Form</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          type="text"
          name="number"
          id="number"
          placeholder="Enter your number"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />
      </form>
    </>
  );
}
