import AddButton from "./AddButton.tsx";
import Task from "./Task.tsx";


const TodoList = () => {
    return (
        <div className="px-[10rem] py-5">
            <div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-black text-start pt-10 px-5">Tasks</h1>
                </div>
            </div>
            <div className="flex flex-row py-5 px-5">
                    <Task todo={"Do the dishes"} />
            </div>
            <div className="flex flex-row justify-end pr-5">
                <AddButton/>
            </div>
        </div>
    );
}

export default TodoList;