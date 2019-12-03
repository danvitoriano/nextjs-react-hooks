import React, { useState, useRef } from "react";

const Todo = () => {
  const [cartItems, setCartItems] = useState(["ola", "jero"]);
  const [message, setMessage] = useState("");
  const inputRef = useRef();
  let msg = "";

  function handleChange() {
    if (inputRef.current.value !== "") {
      setCartItems([...cartItems, inputRef.current.value]);
      inputRef.current.focus();
      inputRef.current.value = "";
      setMessage("");
    } else {
      setMessage("Por favor, informe um item!");
    }
  }

  return (
    <>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={handleChange}>Add</button>
      <div className="alert">{message}</div>
      <style jsx>
        {`
          ul {
            list-style: none;
            padding: 0;
            margin: 5px 0;
          }
          li,
          button,
          input {
            display: flex;
            border: 1px solid gray;
            margin: 5px 0;
            padding: 10px;
            width: 100%;
            box-sizing: border-box;
          }
          li {
            background: gray;
            color: white;
          }
          .alert {
            padding: 5px;
            color: #f44336;
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  );
};

export default Todo;
