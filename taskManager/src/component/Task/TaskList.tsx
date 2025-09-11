import type { Task } from "../../types/Task";
import TaskCard from "./TaskCard";

type TaskListProps = {
    children: React.ReactNode;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskList({ children, tasks, setTasks }: TaskListProps) {
    const onFinish = (task: Task) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    };

    return (
        <>
            <section className="flex gap-2 mt-20 flex-1 flex-wrap">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onFinish={onFinish}
                        />
                    ))
                ) : (
                    <p className="font-bold text-red-500 text-2xl mb-50">
                        No tasks yet! Add some!
                    </p>
                )}
            </section>
            {children}
        </>
    );
}
