import { Component, inject } from '@angular/core';
import { SurveyService } from '../services/surveyService';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-surveys',
  styleUrl: './surveys.scss',
  templateUrl: './surveys.html',
})
export class Surveys {
  surveyService = inject(SurveyService)
  surveyList = this.surveyService.surveyList
}
