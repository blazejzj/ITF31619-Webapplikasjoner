import TaskContent from "./TaskContent";
import TaskTitle from "./TaskTitle";

export default function TaskCard({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <article className="border ">
            <TaskTitle title={title} />
            <TaskContent content={content} />
        </article>
    );
}
