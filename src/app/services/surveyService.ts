import { Injectable, signal } from '@angular/core';
// import { SurveyModel } from '../models/survey.model';
import { createClient } from '@supabase/supabase-js'
import { Survey, Question, Option } from '../interfaces/interface';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    supabase = createClient('https://lwhzezqyefhgivbckqkg.supabase.co', 'sb_publishable_HOc3uxQRKTS1IHkxUc_T9A_02-ENUgp')

    surveyList = signal<Survey[]>([])
    surveyDetail = signal<Survey>({
        "id": 0,
        "title": '',
        "description": '',
        "endDate": 0
    })

    questionList = signal<Question[]>([])
    optionList = signal<Option[]>([])
    optionId = signal<number>(0)
    votes = signal<Map<number, number>>(new Map());

    constructor() {
        this.getAllSurveys()
    }

    async getAllSurveys() {
        let response = await this.supabase
            .from('surveys')
            .select('*')
            .order('position', { ascending: true })
        this.surveyList.set((response.data ?? []) as Survey[])
    }

    async getSurveysById(id: number) {
        let response = await this.supabase
            .from('surveys')
            .select('*')
            .eq('id', id)
            .single()
        // .order('position', {ascending: true})
        this.surveyDetail.set(response.data as Survey)
    }

    async getQuestionsAndOptionsById(surveyId: number) {
        let response = await this.supabase
            .from('questions')
            .select('*, options(*)')
            .eq('survey_id', surveyId)
            .order('position', { ascending: true })
        console.log('Survey id:', surveyId)
        console.log('Fragen:', response.data)
        this.questionList.set(response.data ?? [] as Question[])
        this.getAnswersBySurveyId(surveyId);
    }

    async getAnswersBySurveyId(surveyId: number) {
        const response = await this.supabase
            .from('answers')
            .select('option_id')
            .in('question_id', this.questionList().map(q => q.id));

        console.log('Antworten:', response.data);
        this.countVotes(response.data ?? []);
    }

    countVotes(answers: { option_id: number }[]) {
        const counts = new Map<number, number>();
        for (const a of answers) {
            counts.set(a.option_id, (counts.get(a.option_id) ?? 0) + 1);
        }
        this.votes.set(counts);
    }

    votesFor(optionId: number) {
        return this.votes().get(optionId) ?? 0;
    }

    totalFor(question: Question) {
        return (question.options ?? [])
            .reduce((sum, o) => sum + this.votesFor(o.id), 0);
    }

    percent(question: Question, option: Option) {
        const total = this.totalFor(question);
        if (!total) return 0;
        return (this.votesFor(option.id) / total) * 100;
    }

    letterForOptions(index: number) {
        return String.fromCharCode(65 + index) + '';
    }

}
