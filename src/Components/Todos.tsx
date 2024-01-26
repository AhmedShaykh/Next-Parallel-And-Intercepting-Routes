"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeTodo } from "@/redux/todoSlice";
import { Trash2Icon } from "lucide-react";

const Todos = () => {

    const todo = useAppSelector((state) => state.todo);

    const dispatch = useAppDispatch();

    return (
        <>
            <ul className="list-none">
                {todo.todos.map((todo) => (
                    <li
                        className="my-2 flex justify-center items-center gap-10 px-4 py-2"
                        key={todo.id}
                    >
                        <h1 className="text-white">
                            {todo.text}
                        </h1>
                        <button
                            className="bg-red-500 hover:text-red-700 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            <Trash2Icon className="text-white" />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Todos;