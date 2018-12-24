import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigurationService } from "./configuration.service";
import { Hausaufgabe } from "../data/Hausaufgabe";
import { Observable } from "rxjs";
import { handleError, unique } from "./helper";
import { catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
}


@Injectable()
export class HomeworkService {

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
  }

  fetchHausaufgaben(start: Date, end: Date): Observable<Hausaufgabe[]> {
    return this.http.get<Hausaufgabe[]>(`${this.getBaseUrl()}/list?start=${start}&end=${end}&unique=${unique()}`, httpOptions).pipe(
        catchError(handleError<Hausaufgabe[]>('list')));
  }

  createHausaufgabe(aufgabe: Hausaufgabe): Observable<boolean> {
    return this.http.post<boolean>(`${this.getBaseUrl()}/create`, aufgabe, httpOptions).pipe(catchError(handleError<boolean>('create')));
  }


  private getBaseUrl() {
    return this.configurationService.configuration.backendUrl;
  }
}
