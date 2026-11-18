import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SurveyService } from '../services/surveyService';
import { SurveyResults } from '../survey-results/survey-results';


@Component({
  imports: [SurveyResults, RouterLink],
  selector: 'app-single-survey',
  styleUrl: './single-survey.scss',
  templateUrl: './single-survey.html',
})
export class SingleSurvey {
  route = inject(ActivatedRoute)
  surveyService = inject(SurveyService)
  surveyDetail= this.surveyService.surveyDetail
  question = this.surveyService.questionList
  option = this.surveyService.optionList

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.surveyService.getSurveysById(id);
    this.surveyService.getQuestionsAndOptionsById(id)
  }
}
