import { useState } from "react";

type AddTaskFunction = {
    addTask: (params: { title: string; content: string }) => void;
};

export default function TaskForm({ addTask }: AddTaskFunction) {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask({ title, content });
        setTitle("");
        setContent("");
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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
