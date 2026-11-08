import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../services/surveyService';

@Component({
  imports: [],
  selector: 'app-single-survey',
  styleUrl: './single-survey.scss',
  templateUrl: './single-survey.html',
})
export class SingleSurvey {
  route = inject(ActivatedRoute)
  surveyService = inject(SurveyService)
  surveyDetail= this.surveyService.surveyDetail
  question = this.surveyService.questionList

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Die ID ist:', id);
    if (!id) return;
    this.surveyService.getSurveysById(id);
    this.surveyService.getQuestionsById(id);
  }
}
