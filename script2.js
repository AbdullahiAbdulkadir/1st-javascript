const myHeading = document.getElementById("heading");
myHeading.style.color="green"
myHeading.addEventListener("mouseenter",

function(){
    myHeading.style.color="yellow"
}


)

myHeading.addEventListener("mouseleave",

function(){
    myHeading.style.color="blue"
}

)

const button = document.getElementById("btn")
button.addEventListener("click",

function(){
    myHeading.style.color="pink"
}

)
