import { useState } from "react";

import closeIcon from '../assets/close.png';
import deleteIcon from '../assets/delete.png';
interface TaskProps {
    index: string;
    title: string;
    description: string;
    onTaskUpdated: () => void;
    onTaskDeleted: (taskId: string) => void;
}

const Task = ({ title, index, description, onTaskUpdated, onTaskDeleted} : TaskProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskName, setTaskName] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleDelete = () => {
        onTaskDeleted(index);
    }

    const handleUpdate = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const taskData = {
            title: taskName,
            description: taskDescription
        };

        const response = await fetch(`http://localhost:3000/tasks/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

        if (response.ok) {
            onTaskUpdated();
            toggleModal();
            // Clear the form and close the popup
            setTaskName(title);
            setTaskDescription(description);
        } else {
            setIsErrorPopupOpen(true);
        }
    }

    return (
        <div className="w-full border p-3 rounded">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <input type="checkbox"/>
                    <div onClick={toggleModal} className="flex w-full">
                        <p className="text-black font-semibold">{title}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleDelete}>
                        <img className="h-4" src={deleteIcon} alt=""/>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <form className="bg-white p-4 rounded w-[30rem]" onSubmit={handleUpdate}>
                        <div className="flex justify-start">
                            <button onClick={toggleModal}>
                                <img className="h-4" src={closeIcon} alt=""/>
                            </button>
                        </div>
                        <div className="flex flex-col gap-2 py-5">
                            <label className="text-[0.9rem] pt-1" htmlFor="task-name">Task name</label>
                            <input className="border rounded p-1" type="text" placeholder="Task name" value={taskName}
                                   onChange={(e) => setTaskName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2 py-1">
                            <label className="text-[0.9rem] pt-1" htmlFor="task-description">Task Description</label>
                            <input className="border rounded p-1" type="text" placeholder="Task description"
                                   value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                        </div>
                        <div className="pt-3 flex justify-end">
                            <button
                                className="bg-[#293390] text-white rounded-full px-5 py-1 text-[0.8rem] active:border active:border-[#293390] active:bg-white active:text-[#293390]"
                                type="submit">Update
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {isErrorPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <button onClick={() => setIsErrorPopupOpen(false)}>
                            <img className="h-4" src={closeIcon} alt=""/>
                        </button>
                        <h2>Error</h2>
                        <p>Failed to submit task</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;