

/* 1. Create a service with two functions. First function will have array of object which it
  will return (GET). Second function will have add the values in the array by using
 unshift() method. */

 import { Injectable } from '@angular/core';
 import {personlist} from './personArray';
import { person } from './person';

@Injectable()
export class personService {

  constructor() { }
  
/* 1. Create a service with two functions. First function will have array of object which it
   will return (GET). Second function will have add the values in the array by using
   unshift() method.  */

  getPersonArray(){
       return personlist;
  }

  getAddValuesArray(name2:string) {
      personlist.unshift(new person(name2));
     return personlist;
 /*
  getAddValuesArray() {
    personlist.unshift(new person("Federer"), new person("Nadal"));
     return personlist;
     */
          
   }

  }

