import { useState } from "react";
import Header from "./component/Header/Header";
import TaskForm from "./component/Task/TaskForm/TaskForm";
import TaskList from "./component/Task/TaskList";
import type { Task } from "./types/Task";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = ({
        title,
        content,
    }: {
        title: string;
        content: string;
    }) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            content,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    return (
        <>
            <Header />
            <main className="p-5 mx-auto">
                <TaskForm addTask={addTask} />
                <TaskList tasks={tasks} />
            </main>
        </>
    );
}
export default App;
