type Question = {
    id: string;
    question: string;
    answers: Answer[];
    createdAt: Date;
    status: "draft" | "published" | "archived";
};

type Answer = {
    id: string;
    text: string;
};

export type { Question, Answer };
