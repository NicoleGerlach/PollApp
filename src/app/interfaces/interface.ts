export interface Survey {
    id: number;
    title: string;
    description: string;
    endDate: number;
}

export interface Question {
    id: number;
    surveyId: number;
    question: string;
    position: number;
    multiple: boolean;
    options?: Option[];
}

export interface Option {
    id: number;
    questionId: number;
    option: string;
    position: number;
}