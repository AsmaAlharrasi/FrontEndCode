import User from "./user.js";
import { calcSalary , calcAge } from "./function.js";

let user = new User ( "Asma" , 2001 , 900);
console.log(user);
console.log(calcSalary(user.salary));
console.log(calcAge(user.yearofbirth));

     