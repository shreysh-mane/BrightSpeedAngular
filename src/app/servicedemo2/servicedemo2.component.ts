import { Component } from '@angular/core';
import { User } from '../handelform/User';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-servicedemo2',
  templateUrl: './servicedemo2.component.html',
  styleUrls: ['./servicedemo2.component.css']
})
export class Servicedemo2Component {

  user!:User;

  constructor(private _userService:UserService){}

  saveData(userData:any){
  

    this.user= new User(0,userData.name,userData.email,userData.age);
    console.log(this.user.name);
    console.log(this.user.email);
    // console.log(user.age);


    this._userService.addUser(this.user).subscribe(
      (data)=>{
        console.log("User added", data);
        
      },
      (error)=>{
        console.log("error", error);
        
      });
    
    


    
    
  }
}
