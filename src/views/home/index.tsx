"use client";

import { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";
import TodoCard from "./components/TodoCard";
import { statuses } from "./static";

interface ITodo {
  name: string;
  isChecked: boolean;
}

const HomeView = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [activeStatus, setActiveStatus] = useState("all");

  const handleAddTodo = (value: string) => {
    const newTodo: ITodo = { name: value, isChecked: false };

    setTodos([...todos, newTodo]);
  };

  const handleCheckTodo = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    if (e.target.checked) {
      const newTodos = todos.map((todo) => {
        if (todo.name === value) {
          return { name: todo.name, isChecked: true };
        } else {
          return todo;
        }
      });

      setTodos(newTodos);
    } else {
      const newTodos = todos.map((todo) => {
        if (todo.name === value) {
          return { name: todo.name, isChecked: false };
        } else {
          return todo;
        }
      });

      setTodos(newTodos);
    }
  };

  const handleRemoveAllTodos = () => {
    const newTodos = todos.filter((todo) => todo.isChecked === false);

    setTodos(newTodos);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (activeStatus === "active") {
        return todo.isChecked === false;
      }

      if (activeStatus === "completed") {
        return todo.isChecked === true;
      }

      return todo;
    });
  }, [activeStatus, todos]);

  return (
    <div className="w-full h-full relative py-[70px]">
      <div className="w-full h-full max-w-[541px] relative z-10 mx-auto">
        {/* Judul Todo */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-full h-full flex flex-row items-center justify-between gap-6">
            <h1 className="text-[40px] font-bold tracking-[15px] leading-normal text-white m-0">
              TODO
            </h1>

            <div className="relative w-[25.11px] h-[26px]">
              <Image
                src="/static/ic-moon.svg"
                alt="Icon Moon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Input Todo */}
        <div className="flex flex-row items-center gap-6 mb-6 shadow-[0p_35px_50px_-15px_#C2C3D680]">
          <input
            type="text"
            value={todoInput}
            placeholder="Create a new todo…"
            className="bg-white w-full rounded-[5px] p-[20px_24px] text-lg"
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
          />

          <button
            type="button"
            className="cursor-pointer border-2 h-full p-6"
            onClick={() => handleAddTodo(todoInput)}
          >
            Add
          </button>
        </div>

        {/* List Todo */}
        <div className="w-full bg-white rounded-[5px] overflow-hidden shadow-[0px_35px_50px_-15px_#C2C3D680]">
          {Boolean(filteredTodos.length) ? (
            filteredTodos.map((todo) => (
              <TodoCard
                key={todo.name}
                todo={todo}
                handleCheckTodo={handleCheckTodo}
              />
            ))
          ) : (
            <div className="w-full h-[100px] flex items-center justify-center">
              No Todo
            </div>
          )}

          <div className="p-[16px_24px] flex flex-row items-center justify-between">
            <p className="m-0 text-sm font-normal text-[#9495A5]">
              {filteredTodos.length} items left
            </p>

            <div className="flex flex-row items-center gap-[19px]">
              {statuses.map((status) => (
                <p
                  key={status.value}
                  className={`m-0 text-sm font-bold cursor-pointer text-[${
                    activeStatus === status.value ? "#000" : "#9495A5"
                  }]`}
                  onClick={() => {
                    setActiveStatus(status.value);
                  }}
                >
                  {status.label}
                </p>
              ))}
            </div>

            <div className="cursor-pointer" onClick={handleRemoveAllTodos}>
              <p className="m-0 text-sm font-normal text-[#9495A5]">
                Clear Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 z-0">
        <div className="w-full h-[300px] relative">
          <div className="relative w-full h-full bg-[linear-gradient(225deg,_rgba(85,_150,_255,_0.8)_0%,_rgba(172,_45,_235,_0.8)_100%)] z-10" />

          <Image
            src="/static/bg-image.png"
            alt="Background Image"
            fill
            className="object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
