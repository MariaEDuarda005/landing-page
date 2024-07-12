import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { NewsletterResponse } from '../interfaces/newsletter.interface';


interface NewsletterResponse{
  message: string   
}

// aqui é o lugar onde insere a logica 

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  // declarar um metodo que recebe o name e o email. E o retorno é um Observable, que é um objeto que pode observar e vai notificar quanod houver uma mudança 
  sendData(name: string, email: string): Observable<NewsletterResponse>{
    const data = {name, email}

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }

}
