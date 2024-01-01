
    async function GetAllMovies() {
        console.log("Hello")
        const response = await fetch ('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data); 
    }
    GetAllMovies();


// let userInput = prompt( "Enter your Github User Name: ");
// const url = ` https://api.github.com/users/${userInput}`;

// async function loadData(){
//     let obj = await fetch(url);
//     let dtt = await obj.json();
//     await console.log(dtt);

//     document.querySelector('#main').innerHTML = ` <img src= ${dtt.avatar_url} alt="Avatar">`;
// }
// loadData();
// let dtt = loadData();
// console.log(dtt.avatar_url);