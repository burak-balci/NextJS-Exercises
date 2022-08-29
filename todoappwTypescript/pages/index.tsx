import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { ITodo } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { todo, id: Date.now() + Math.random(), completed: false },
    ]);
    setTodo("");
  };

  const handleRemove = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleClick = (id: number): void => {
    const completedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(completedTodos);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
      </Head>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={todo}
            onChange={handleChange}
            type="text"
          />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
      {todoList.map((item) => (
        <div className={styles.listContainer} key={item.id}>
          <div
            className={
              item.completed
                ? `${styles.completed} ${styles.todo}`
                : styles.todo
            }
          >
            {item.todo}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => handleClick(item.id)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className={styles.button}
              onClick={() => handleRemove(item.id)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
