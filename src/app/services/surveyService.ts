import { Injectable, signal } from '@angular/core';
// import { SurveyModel } from '../models/survey.model';
import { createClient } from '@supabase/supabase-js'
import { Survey, Question } from '../interfaces/interface';

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

    async getQuestionsById(id: number) {
        let response = await this.supabase
            .from('questions')
            .select('*')
            .eq('survey_id', id)
        console.log('Seurvey id:', id)
        console.log('Fragen:', response.data)
        this.questionList.set(response.data ?? [] as Question[])
    }
}
