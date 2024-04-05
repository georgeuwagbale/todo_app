import AddButton from "./AddButton.tsx";
import Task from "./Task.tsx";
import {useEffect, useState} from "react";

interface Task{
    id: string;
    title: string;
    description: string;
}

const Todo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [reload, setReload] = useState(false); // Add a new state variable

    const defaultUrl = 'https://todoappbackend-156g1cm0.b4a.run/'
    // console.log(tasks)
    useEffect(() => {
        fetch(`${defaultUrl}tasks`)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, [reload]);

    const handleTaskAdded = () => {
        setReload(!reload); // Update the state variable when a task is added
    };

    const handleTaskDeleted = async (taskId: string) => {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setReload(!reload); // Update the state variable when a task is deleted
        } else {
            console.log("Error");
        }
    };

    return (
        <div className="px-[10rem] py-5">
            <div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-black text-start pt-10 px-5">Tasks</h1>
                </div>
            </div>
            <div className="flex flex-col py-5 px-5 gap-3">
                {tasks.map((task, index) => (
                    <Task key={index} index={task.id} title={task.title}  description={task.description}
                          onTaskUpdated={handleTaskAdded}  onTaskDeleted={() => {
                              handleTaskDeleted(task.id).then(() => null);
                    }}/>
                ))}
            </div>
            <div className="flex flex-row justify-end pr-5">
                <AddButton onTaskAdded={handleTaskAdded}/>
            </div>
        </div>
    );
}

export default Todo;