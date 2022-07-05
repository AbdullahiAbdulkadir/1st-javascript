//document is the global object, and its's the html document and it comes with plenty of properties and methods


let userName = document.getElementById("user-name");
console.log(userName);

let userBio = document.getElementById("Bio");
console.log(userBio);


let button = document.getElementById("Id-button");
console.log(button);
button.addEventListener("click", function(){
userName.innerHTML = "Abdullahi";
userBio.innerHTML = "Abdullahi and im learning Javascript.";
})