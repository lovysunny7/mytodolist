import React, { useState, useRef } from "react";
import "./style.css";

function Form({ setTodos, todos }) {

  //useRef, useState 방법
  const nextId = useRef(2);

  const initialState = {
    id: nextId,
    title: "",
    body: "",
    isDone: false,
  };

 
  const [todo, setTodo] = useState(initialState);
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setTodo({ ...todo, [name]: value, id:nextId.current });
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    nextId.current +=1;
    // console.log(nextId.current);
    setTodos([...todos, {...todo,[name]:value, id:nextId.current}]);
    setTodo(initialState);
  };
// onChange랑 valus랑 같이 쓰인다.
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          // value={todo.title}
          className="add-input input-body"
          // onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          // value={todo.body}
          className="add-input"
          // onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
