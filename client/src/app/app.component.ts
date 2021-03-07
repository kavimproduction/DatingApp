import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  // constructor(private http:HttpClient, private accountService: AccountService){}
  constructor( private accountService: AccountService){}
 
  ngOnInit() {
  //  this.GetUsers();
   this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user:User = JSON.parse(localStorage.getItem('user'));  
    this.accountService.setCurrentUser(user);  
  }

  // GetUsers(){
  //   this.http.get("https://localhost:5001/api/Users").subscribe(Response => {
  //     this.users = Response;
  //   },error =>{
  //     console.log(error);
  //   }
  //   )
  // }
}
