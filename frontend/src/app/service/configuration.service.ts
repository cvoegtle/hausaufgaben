import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';


const httpOptions = {
  withCredentials: true
}

export interface Configuration {
  backendUrl: string;
}

@Injectable()
export class ConfigurationService {

  configuration: Configuration = null;

  constructor(private http: HttpClient) {
  }

  load(): Observable<Configuration> {
    return this.http.get<Configuration>(this.getConfigurationUrl(), httpOptions).pipe(tap(config => this.configuration = config));
  }

  private getConfigurationUrl(): string {
    return "./configuration.json";
  }

  isInitialised() {
    return this.configuration != null;
  }
}
