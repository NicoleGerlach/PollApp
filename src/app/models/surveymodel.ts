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

// // export class QuestionModel implements Questions {
// //     id: number;
// //     surveyId: number;
// //     question: string;
// //     position: number;
// // }

// // export class OptionModel implements Options {
// //     id: number;
// //     questionId: number;
// //     optionText: string;
// //     position: number;
// // }

