import AddTodo from "@/Components/AddTodo";
import Todos from "@/Components/Todos";

const Todo = () => {
    return (
        <div className="flex flex-col justify-center items-center text-2xl font-bold uppercase text-slate-200">
            TODO
            <AddTodo />
            <Todos />
        </div>
    )
};

export default Todo;