import { Observable } from "rxjs";

export function unique(): number {
  return new Date().getTime();
}

export function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return null;
  };
}


