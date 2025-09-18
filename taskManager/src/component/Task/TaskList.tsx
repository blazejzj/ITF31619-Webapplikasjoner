import type { Task } from "../../types/Task";
import TaskCard from "./TaskCard";

type TaskListProps = {
    children: React.ReactNode;
    onFinishTask: (task: Task) => void;
    tasks: Task[];
};

export default function TaskList({
    children,
    tasks,
    onFinishTask,
}: TaskListProps) {
    return (
        <>
            <section className="flex gap-2 mt-20 flex-1 flex-wrap">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onFinish={onFinishTask}
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
