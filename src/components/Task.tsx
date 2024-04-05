import { useState } from "react";

import closeIcon from '../assets/close.png';
interface TaskProps {
    todo: string;
}

const Task = ({ todo } : TaskProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="w-full border p-3 rounded">
            <div className="flex flex-row gap-2">
                <input type="checkbox"/>
                <div onClick={toggleModal} >
                    <p>{todo}</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <button onClick={toggleModal}>
                            <img className="h-4" src={closeIcon} alt=""/>
                        </button>
                        <h2>Task Details</h2>
                        <p>{todo}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;