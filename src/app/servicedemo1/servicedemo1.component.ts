import { Component } from '@angular/core';
import { User } from '../handelform/User';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-servicedemo1',
  templateUrl: './servicedemo1.component.html',
  styleUrls: ['./servicedemo1.component.css']
})
export class Servicedemo1Component {

  // user1=new User("Shreysh","Pune",24);
  // user2=new User("yash","Pune",24);
  // user3=new User("Shreya","Pune",24);

  // users:User[]=[this.user1,this.user2,this.user3];

  users:User[]=[];
  
  constructor(private _userService:UserService){
    
  }

  showData(){
    
    this._userService.getUsers().subscribe(
      (data:User[])=>{
        this.users=data;
      },
      (error)=>{
        console.log("Error while feching user data",error);
        
      });
    
  }


}
