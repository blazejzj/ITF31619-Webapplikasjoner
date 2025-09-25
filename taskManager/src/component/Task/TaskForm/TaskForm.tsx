import { useState, type ChangeEvent } from "react";
import type { Task } from "../../../types/Task";

type AddTaskFunction = {
    addTask: (params: {
        title: string;
        content: string;
        dueDate: Date;
        completed: boolean;
    }) => void;
};

export default function TaskForm({ addTask }: AddTaskFunction) {
    const [formData, setFormData] = useState<Task>({
        id: "",
        title: "",
        content: "",
        dueDate: new Date(),
        completed: false,
    });

    const updateWithEvent = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        update({ [name]: value });
    };

    const update = (value: Partial<Task>) => {
        setFormData((prev) => ({ ...prev, ...value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, content, dueDate } = formData;
        const completed = false;
        addTask({ title, content, dueDate, completed });
        setFormData({
            id: "",
            title: "",
            content: "",
            dueDate: new Date(),
            completed: false,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="font-bold text-2xl">Add new task</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-bold text-xl">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Something..."
                    className="p-3 outline-none focus:ring-2 focus:ring-cyan-600 bg-gray-100 rounded-md ring-2 ring-gray-300 w-[50%]"
                    required
                    // onChange={(e) => update({ title: e.target.value })}
                    onChange={(e) => updateWithEvent(e)}
                    value={formData.title}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="font-bold text-xl">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    placeholder="Write something to do..."
                    className="p-3 outline-none focus:ring-2 focus:ring-cyan-600 bg-gray-100 rounded-md ring-2 ring-gray-300 h-[200px]"
                    required
                    value={formData.content}
                    onChange={(e) => update({ content: e.target.value })}
                />
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="duedate" className="font-bold text-xl">
                    Due Date
                </label>
                <input
                    type="date"
                    name="duedate"
                    required
                    className="p-2 outline-none focus:ring-2 focus:ring-cyan-600 bg-gray-100 rounded-md ring-2 ring-gray-300"
                    value={
                        formData.dueDate
                            ? formData.dueDate.toISOString().slice(0, 10)
                            : ""
                    }
                    onChange={(e) =>
                        update({ dueDate: new Date(e.target.value) })
                    }
                />
            </div>
            <button
                type="submit"
                className="self-start cursor-pointer bg-cyan-600 rounded-md text-white py-3 px-7 font-bold "
            >
                Add Task
            </button>
        </form>
    );
}
