import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import TaskForm from "./component/Task/TaskForm/TaskForm";
import TaskList from "./component/Task/TaskList";
import type { Task } from "./types/Task";
import useFetch from "./hooks/useFetch";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [totalTasksFinished, setTotalTasksFinished] = useState<number>(0);
    const { data, loading, error } = useFetch({
        url: "https://jsonplaceholder.typicode.com/todos",
    });

    useEffect(() => {
        if (data.length > 0) {
            const loadedTasks: Task[] = data.map((task: Task) => ({
                id: task.id.toString(),
                title: task.title,
                content: "No content",
                dueDate: new Date(),
                completed: task.completed,
            }));
            if (loadedTasks.length > 0) {
                setTasks(loadedTasks);
            }
        }
    }, [data]);

    const addTask = ({
        title,
        content,
        dueDate,
        completed,
    }: Omit<Task, "id">) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            content,
            dueDate,
            completed,
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
                {loading && <p>Loading tasks...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
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
