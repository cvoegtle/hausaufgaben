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

  fetchHausaufgaben(): Observable<Hausaufgabe[]> {
    return this.http.get<Hausaufgabe[]>(`${this.getBaseUrl()}/list?unique=${unique()}`, httpOptions).pipe(
        catchError(handleError<Hausaufgabe[]>('list')));
  }

  createHausaufgabe(aufgabe: Hausaufgabe): Observable<boolean> {
    return this.http.post<boolean>(`${this.getBaseUrl()}/create?unique=${unique()}`, aufgabe, httpOptions).pipe(catchError(handleError<boolean>('create')));
  }


  deleteHausaufgabe(id: number): Observable<void> {
    return this.http.get<void>(`${this.getBaseUrl()}/delete?id=${id}&unique=${unique()}`, httpOptions).pipe(catchError(handleError<void>('delete')));
  }


  private getBaseUrl() {
    return this.configurationService.configuration.backendUrl;
  }
}
