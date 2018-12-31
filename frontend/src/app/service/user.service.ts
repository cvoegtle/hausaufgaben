import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "./configuration.service";
import { handleError, unique } from "./helper";
import { catchError } from "rxjs/operators";

const httpOptions = {
  withCredentials: true
}

export interface UserStatus {
  name: string;
  loggedIn: boolean;
  authorised: boolean;
  url: string;
}

@Injectable()
export class UserService {
  private lastUserStatus: Observable<UserStatus>;

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
  }

  fetchStatus(): Observable<UserStatus> {
    if (this.lastUserStatus == null) {
      this.lastUserStatus = this.http.get<UserStatus>(`${this.getBaseUrl()}/user/status?startUrl=${this.getApplicationUrl()}&unique=${unique()}`, httpOptions).pipe(
          catchError(handleError<UserStatus>('user/status')));
    }
    return this.lastUserStatus
  }

  getApplicationUrl() {
    let protocol = window.location.protocol;
    let hostname = window.location.hostname;
    let port = window.location.port;
    if (port == '80' || port == '443') {
      return `${protocol}//${hostname}`;
    } else {
      return `${protocol}//${hostname}:${port}`;
    }
  }


  clearStatus() {
    this.lastUserStatus = null;
  }

  private getBaseUrl() {
    return this.configurationService.configuration.backendUrl;
  }

}
