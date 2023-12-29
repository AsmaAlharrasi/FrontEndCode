let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let temp;

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }
    else {
        total.innerHTML = ' ';
        total.style.background = '#051df486';
    }
}


//-------------------Creat Data-------------------------

let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
}
else {

    datapro = [];
}
submit.onclick = function () {
    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    if (title.value != '' && price.value != '' && category.value !='' && newpro.count < 100 ){
        if(mood == 'create'){

    if (newpro.count > 1)
    {
        for(let i =0; i<newpro.count;i++)
        {
            datapro.push(newpro);
        }
    }
    else
    {
        datapro.push(newpro);
    }
    }else
    {
        datapro[temp]=newpro
        mood='create';
        submit.innerHTML = 'Create';
    }
    }else
    {
        cleardata();
    }
        


    //---------Sava LocalStorage-------------

    localStorage.setItem('product',   JSON.stringify(datapro));
    clearData()
    showData()
}
    
    

//------------------Clear Data--------------------

function clearData()
{
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//--------------Read Data-------------------
function showData()
{
    let table = '';
    for(let i =0; i<datapro.length;i++){
        table += 
        ` <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;
    let btndelete = document.getElementById('deleteall');
    if(datapro.length > 0){
        btndelete.innerHTML =` <button onclick="deleteAll()">Delete All(${datapro.length})</button>`

    }
    else{
        btndelete.innerHTML = '';
    }
}
showData()

//------------------Delet One Product------------------

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData();
}

//-----------------Delete All Data---------------------

function deleteAll()
{
    localStorage.clear()
    datapro.splice(0)
    showData()
}

//--------------Update Data--------------------

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    getTotal();
    count.style.display = "none";
    category.value = datapro[i].category;
    submit.innerHTML = 'update';
    mood ='update';
    temp =i;
    scroll({
        top : 0,
        behavior:'smooth'
    })
}

//--------------Search for Data--------------------

let searchmood = 'title';

function getSearchMood(id){

    let search = document.getElementById("search");
    if(id == 'searchTitle'){
        searchmood = 'title';
        search.placeholder = 'search by title';
    }else{
        searchmood = 'category';
        search.placeholder = 'search by category';
    }
    search.focus();
    search.value = '';
    showData();
}

function searchData(value){
    let table = '';
    if(searchmood == 'title'){
        
        for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].title.includes(value)){
                table +=`
            <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update"> update </button></td>
                <td><button onclick="deleteData (${i})" id="delete"> delete </button></td>
            </tr>
        `;
            }
        }
    }else{
        for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].category.includes(value)){
                table +=`
            <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update"> update </button></td>
                <td><button onclick="deleteData (${i})" id="delete"> delete </button></td>
            </tr>
        `;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;

}



