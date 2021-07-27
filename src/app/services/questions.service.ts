import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  searchQuestions(keyword: string) {
    return this.http.get("assets/jsonMocks/mockQuestions.json").pipe(
      map((questions: any) => {
        return questions.filter((question: any) => {
          return question.questionText.toLowerCase().includes(keyword.toLowerCase());
        });
      })
    );
  }

  getQuestionDetails(id: number) {
    return this.http.get("assets/jsonMocks/mockQuestions.json").pipe(
      map((questions: any) => {
        return questions.find((question: any) => {
          return question.id === id;
        });
      })
    );
  }
}
