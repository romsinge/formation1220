import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let newRequest = request.clone({
      setHeaders: {
        "session-token": "bonjour, je suis authentifie"
      }
    })

    return next.handle(newRequest).pipe(tap({
      next: (event: HttpEvent<any>) => {
        
        if (event instanceof HttpResponse) {
          console.log('REPONSE NORMALE')
        }

      },
      error: (event: HttpEvent<any>) => {
        if (event instanceof HttpErrorResponse) {
          console.log('ERREUR HTTP')

          if (event.status == 0) {
            console.log('UNAUTHORIZED')
          } else if (event.status == 404) {
            console.log('NOT FOUND')
          }
        }
      }
    }))
  }
}
