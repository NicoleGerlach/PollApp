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
}

export interface Option {
    id: number;
    questionId: number;
    optionText: string;
    position: number;
}