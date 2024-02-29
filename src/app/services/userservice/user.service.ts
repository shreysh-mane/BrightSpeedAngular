import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/handelform/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // user1=new User("Shreysh","s@g.c",24);
  // user2=new User("yash","s@g.c",24);
  // user3=new User("Shreya","s@g.c",24);

  // users:User[]=[this.user1,this.user2,this.user3];


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    // HTTP methods to call data from server

    // return this.users;
    let url='http://localhost:3000/users';
    return this.http.get<User[]>(url);


  }

  addUser(user:User){

    // this.users.push(user);
    let url='http://localhost:3000/users';
    return this.http.post<User>(url,user);

  }

}
