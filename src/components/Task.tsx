import {useState} from "react";

interface TaskProps {
    todo: string
}

const Task = ({todo}: TaskProps) => {
    const [checked, setChecked] = useState(false);
    console.log(checked)
    return (
        <div className="flex justify-between items-center p-3 rounded border border-gray-200 w-full">
            <button>
                <div className="flex flex-row gap-2">
                    <input type="checkbox" className="mr-2 rounded-full bg-transparent" checked={checked} onClick={() => setChecked(!checked)}/>
                    <p>{todo}</p>
                </div>
            </button>
        </div>
    );
}

export default Task;