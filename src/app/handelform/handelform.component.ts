import { Component } from '@angular/core';
import { User } from './User';




@Component({
  selector: 'app-handelform',
  templateUrl: './handelform.component.html',
  styleUrls: ['./handelform.component.css']
})
export class HandelformComponent {
// userObj={
//   name:"",
//   email:"",
//   pass:""
// }

user!:User;

getData(userData:any){
  // console.log(userData);

  // this.userObj.name=userData.name;
  // this.userObj.email=userData.email;
  // this.userObj.pass=userData.pass;

  // console.log(this.userObj);


  // Using Class
  this.user= new User(userData.name,userData.email,0);
  console.log(this.user.name);
  console.log(this.user.email);
  // console.log(user.age);
  
  
  
  
}

}
