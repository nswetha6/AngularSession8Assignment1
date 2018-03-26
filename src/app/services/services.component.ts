import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { personService } from './personservice';
import { person } from './person';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [personService]     //2. The service will be called in @Component providers.
})
export class ServicesComponent implements OnInit {

  plist:person[];
  persname:string;
  
  constructor(private ps: personService) {
    this.ps=ps;
    this.getList();
   }
   

   getList(){
  this.plist=this.ps.getPersonArray();
  }
  getAddValues(name1:string){
    if(name1.length!==0){
        this.persname=name1;
        this.plist=this.ps.getAddValuesArray(this.persname);
       }
      else
      {
        alert("please enter name and submit");
      }
  }
  ngOnInit() {

   
  }

}
