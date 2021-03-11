import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = 'https://localhost:5001/api/';
// this was build in Api - BuggyController

  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error()
  {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(respose => {
      console.log(respose);
    }, error =>{
      console.log(error);

    } )
  }

  get400Error()
  {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(respose => {
      console.log(respose);
    }, error =>{
      console.log(error);

    } )
  }

  get500Error()
  {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(respose => {
      console.log(respose);
    }, error =>{
      console.log(error);

    } )
  }

  get401Error()
  {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(respose => {
      console.log(respose);
    }, error =>{
      console.log(error);

    } )
  }

  get400ValidationError()
  {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(respose => {
      console.log(respose);
    }, error =>{
      console.log(error);
      this.validationErrors = error;

    } )
  }



}
