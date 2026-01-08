import { HttpClient } from '@angular/common/http'; //The tool used to send requests to a website or server (like clicking a link or submitting a form).
import { Injectable } from '@angular/core'; //A decorator that tells Angular this class is a "service" that can be plugged into any part of your app.
import { environment } from './environments/environment';
import { Observable } from 'rxjs'; // A "stream" of data. Since the internet can be slow, this tells Angular: "Wait for the data to arrive, and when it does, let me know."
import { Employee } from '../models/employee';

//This makes the service available everywhere in your app.
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiUrl = `${environment.apiUrl}/employee`

  //This is like handing a phone to a delivery driver. 
  //It gives this service the HttpClient tool
  //so it can make "calls" to the internet. 
  constructor(private http: HttpClient) { }

  //"Go to the apiUrl".
  //"Use the GET method" (which means "Fetch data").
  //"Expect an array of Employees" (Employee[]).
  //"Return the results" as an Observable so the UI can display them once they arrive. 
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
  }

  createEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, employee)
  }

  deleteEmployee(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
