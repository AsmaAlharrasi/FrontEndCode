let names = ['ahmed','ali','gamal'];
let ages= ['18 years old','17 years old','22 years old',];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';

function element(name , ages){
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    let head = document.createTextNode(name);
    let agecontect = document.createTextNode(ages);

    img.src = '../assest/images\img1.jpg';
    title.appendChild(head);
    age.appendChild(agecontect);

    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    img.style.width = '100%';
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);

}

for(let i=0; i<3; i++){
    element(names[i],ages[i]);
}