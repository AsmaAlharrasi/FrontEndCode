async function GetAllProducts() {
  console.log("hello")
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

const Products = await GetAllProducts();
console.log(Products);

for (let i = 0; i < Products.length; i++) {

  let prd = `<div class="card" style="width: 300px;">
<img src="${Products[i].image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${Products[i].title}</h5>
  <p class="card-text">${Products[i].description}.</p>
  <a href="#" class="btn btn-primary">Show Product</a>
</div>
</div>`

  document.getElementById("demo").innerHTML += prd;
}
