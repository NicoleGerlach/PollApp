import { Survey, Question, Option } from '../interfaces/interface';

export class SurveyModel implements Survey {
    id: number;
    title: string;
    description: string;
    endDate: number;

    constructor(data: Partial<Survey> = {}) {
        this.id = data.id ?? 0;
        this.title = data.title ?? '';
        this.description = data.description ?? '';
        this.endDate = data.endDate ?? 0;
    }
}

export class QuestionModel implements Question {
    id: number;
    surveyId: number;
    question: string;
    position: number;
    multiple: boolean;

    constructor(data: Partial<Question> = {}) {
        this.id = data.id ?? 0;
        this.surveyId = data.surveyId ?? 0;
        this.question = data.question ?? '';
        this.position = data.position ?? 0;
        this.multiple = data.multiple ?? false;
    }
}

export class OptionModel implements Option {
    id: number;
    questionId: number;
    option: string;
    position: number;

    constructor(data: Partial<Option> = {}) {
        this.id = data.id ?? 0;
        this.questionId = data.questionId ?? 0;
        this.option = data.option ?? '';
        this.position = data.position ?? 0;
    }
}

