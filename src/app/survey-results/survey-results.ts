import { Component, inject } from '@angular/core';
import { SurveyService } from '../services/surveyService';

@Component({
  imports: [],
  selector: 'app-survey-results',
  styleUrl: './survey-results.scss',
  templateUrl: './survey-results.html',
})
export class SurveyResults {
  surveyService = inject(SurveyService)
  question = this.surveyService.questionList

}
