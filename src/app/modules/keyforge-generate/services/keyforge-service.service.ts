import { Password } from './../model/password';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/app.config';
import { KeyforgeData } from '../model/keyforge-data';
import { PaginatedResponse } from '../model/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class KeyforgeServiceService {

  constructor(private http : HttpClient) { }
  generatePassword(data : KeyforgeData):Observable<any>{
    return this.http.post<any>(`${API_URL.baseURL}/password`, data);
  }

  getAllPasswords():Observable<PaginatedResponse<Password>>{
    return this.http.get<PaginatedResponse<Password>>(`${API_URL.baseURL}/password`);
  }

 
}
