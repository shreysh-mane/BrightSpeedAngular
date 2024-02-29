import { Injectable } from '@angular/core';
import { User } from 'src/app/handelform/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user1=new User("Shreysh","Pune",24);
  user2=new User("yash","Pune",24);
  user3=new User("Shreya","Pune",24);

  users:User[]=[this.user1,this.user2,this.user3];


  constructor() { }

  getUsers(){
    // HTTP methods to call data from server

    return this.users;
  }
}
