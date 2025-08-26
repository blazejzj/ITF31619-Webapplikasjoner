import Subject from "./Subject";

export default interface Student {
    id: number;
    name: string;
    currentSubjects: Subject[];
    finishedSubjects: Subject[];
}
