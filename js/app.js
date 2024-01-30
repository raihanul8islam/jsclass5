let singupBtn = document.getElementById("singupBtn");
let singinBtn = document.getElementById("singinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


singinBtn.onclick = function (){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sing In";
    singupBtn.classList.add("disable");
    singinBtn.classList.remove("disable");
}


singupBtn.onclick = function (){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sing Up";
    singupBtn.classList.remove("disable");
    singinBtn.classList.add("disable");
}