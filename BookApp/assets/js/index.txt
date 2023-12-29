let addbtn = document.querySelector("#add");
let bookname = document.querySelector("#bookname");
let booklist = document.querySelector("#booklist");
let dltbtns = document.getElementsByClassName("dlt");
let hd = document.querySelector("#hide");
console.log(dltbtns);

addbtn.addEventListener("click", (e) => {
    let name = bookname.value;
    let li = document.createElement("li");
    let spn1 = document.createElement("span");
    let spn2 = document.createElement("span");
    spn1.textContent = name;
    spn2.textContent = "Delete";
    li.className = "my-4";
    spn2.className += "btn btn-light text-danger dlt";
    li.appendChild(spn1);
    li.appendChild(spn2);
    booklist.appendChild(li);
    bookname.value = "";
})

booklist.addEventListener("click", (e) => {
    if (e.target.className == "btn btn-light text-danger dlt") {
        e.target.parentElement.remove();
    }
})

let flag = true;
hd.addEventListener("click", () => {
    if (flag) {
        booklist.style.display = "none";
        hd.textContent = "UnHide";
        flag = false;
    }
    else {
        booklist.style.display = "block";
        hd.textContent = "Hide";
        flag = true;
    }

    //ternary operator
    //booklist.style.display = (booklist.style.display == "none") ? "none" : "block";
})
