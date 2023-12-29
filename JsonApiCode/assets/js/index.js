async function GetAllMovies() {
    console.log("Hello")
    const response = await fetch ('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data); 
}
GetAllMovies();
