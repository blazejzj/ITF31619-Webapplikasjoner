import type { Task } from "../../types/Task";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }: { tasks: Task[] }) {
    return (
        <section>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskCard title={task.title} content={task.content} />
                ))
            ) : (
                <p>No tasks yet!</p>
            )}
        </section>
    );
}
