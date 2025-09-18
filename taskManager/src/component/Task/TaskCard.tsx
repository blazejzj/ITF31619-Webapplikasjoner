import type { Task } from "../../types/Task";
import TaskContent from "./TaskContent";
import TaskTitle from "./TaskTitle";

type TaskCardProps = {
    task: Task;
    onFinish: (task: Task) => void;
};

export default function TaskCard({ task, onFinish }: TaskCardProps) {
    const getCleanDate = (date: Date) => {
        const cleanDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return cleanDate;
    };

    return (
        <article className="border border-gray-200 shadow-md shadow-cyan-100 flex flex-col p-5 gap-2 w-sm min-w-sm h-50">
            <TaskTitle title={task.title} />
            <TaskContent content={task.content} />
            <div className="flex flex-col gap-3">
                <p className="text-red-500">
                    Due: {getCleanDate(task.dueDate)}
                </p>

                <button
                    onClick={() => onFinish(task)}
                    className="self-end justify-self-end cursor-pointer bg-cyan-600 hover:bg-cyan-500 text-white py-3 px-7 rounded-md font-bold mt-auto"
                >
                    Finish
                </button>
            </div>
        </article>
    );
}
