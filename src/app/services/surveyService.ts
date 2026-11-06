import { Injectable, signal } from '@angular/core';
// import { SurveyModel } from '../models/survey.model';
import { createClient } from '@supabase/supabase-js'
import { Survey } from '../interfaces/interface';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    supabase = createClient('https://lwhzezqyefhgivbckqkg.supabase.co', 'sb_publishable_HOc3uxQRKTS1IHkxUc_T9A_02-ENUgp')

    surveyList = signal<Survey[]>([])
    surveydetail = signal<Survey>({
        "id": 0,
        "title": '',
        "description": '',
        "endDate": 0
    })

    constructor() {
        this.getSurveys()
    }

    async getSurveys() {
        let response = await this.supabase
            .from('surveys')
            .select('*')
        console.log(response.data)
        this.surveyList.set((response.data ?? []) as Survey[])
    }
}
