//object destruction
let user = {
    name : "Asma",
    age : 22,
    gender : "Female"
};
let { name , age , gender} = user;
console.log(name , age , gender);

//array destruction
let user1 = [ "Ahmed" , 24 , "Male" ];
let [ Name , Age , Gender] = user1;
console.log(Name , Age , Gender);
