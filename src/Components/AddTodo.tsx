"use client";
import { useState } from "react";
import { addTodo } from "@/redux/todoSlice";
import { useAppDispatch } from "@/redux/store";

const AddTodo = () => {

    const [input, setInput] = useState("");

    const dispatch = useAppDispatch();

    const addTodoHandler = (e: any) => {

        e.preventDefault();

        dispatch(addTodo(input));

        setInput("");

    };

    return (
        <form
            className="flex justify-center items-center gap-4 my-12"
            onSubmit={addTodoHandler}
        >
            <input
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-md outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Todo..."
                value={input}
                type="text"
            />

            <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
            >
                Add Todo
            </button>
        </form>
    )
};

export default AddTodo;