import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function verifyEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error';

    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
    } else {
        errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage))
}
