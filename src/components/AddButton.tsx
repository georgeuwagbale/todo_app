import { useState } from "react";
import closeIcon from '../assets/close.png';

interface AddButtonProps {
    onTaskAdded: () => void;
}

const AddButton = ({ onTaskAdded }: AddButtonProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const taskData = {
            title: taskName,
            description: taskDescription
        };

        const response = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

        if (response.ok) {
            // Clear the form and close the popup
            setTaskName("");
            setTaskDescription("");
            onTaskAdded();
            togglePopup();
        } else {
            setIsErrorPopupOpen(true);
        }
    };

    return (
        <div>
            <button className="bg-[#293390] rounded-2xl text-center text-white text-[0.7rem] px-5 py-1 active:border active:border-[#293390] active:bg-white active:text-[#293390]" onClick={togglePopup}>
                Add Task
            </button>
            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <form className="bg-white p-4 rounded w-[30rem]" onSubmit={handleSubmit}>
                        <div className="flex justify-start">
                            <button onClick={togglePopup}>
                                <img className="h-4" src={closeIcon} alt=""/>
                            </button>
                        </div>
                        <div className="flex flex-col gap-2 py-5">
                            <label className="text-[0.9rem] pt-1" htmlFor="task-name">Task name</label>
                            <input className="border rounded p-1" type="text" placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2 py-1">
                            <label className="text-[0.9rem] pt-1" htmlFor="task-description">Task Description</label>
                            <input className="border rounded p-1" type="text" placeholder="Task description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                        </div>
                        <div className="pt-3 flex justify-end">
                            <button className="bg-[#293390] text-white rounded-full px-5 text-[0.8rem] active:border active:border-[#293390] active:bg-white active:text-[#293390]" type="submit">Add</button>
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

export default AddButton;