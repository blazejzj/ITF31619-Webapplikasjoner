import { useState } from "react";
import Header from "./component/Header/Header";
import TaskForm from "./component/Task/TaskForm/TaskForm";
import TaskList from "./component/Task/TaskList";
import type { Task } from "./types/Task";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [totalTasksFinished, setTotalTasksFinished] = useState<number>(0);

    const addTask = ({ title, content, dueDate }: Omit<Task, "id">) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            content,
            dueDate,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const onFinishTask = (task: Task) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
        incrementFinishedTaskCounter();
    };

    const incrementFinishedTaskCounter = () => {
        setTotalTasksFinished((prev) => prev + 1);
    };

    return (
        <>
            <Header />
            <main className="p-5 mx-auto max-w-[1600px]">
                <TaskForm addTask={addTask} />
                <TaskList tasks={tasks} onFinishTask={onFinishTask}>
                    <p className="text-lg">
                        Sum of completed tasks:
                        <span className="font-bold text-green-500 text-2xl">
                            {" "}
                            {totalTasksFinished}
                        </span>
                    </p>
                </TaskList>
            </main>
        </>
    );
}
export default App;
