
import apiData from "./api.js";

document.querySelector("h1").innerText = "Final Project | Heitor C. Cazado | CSE-121B"

document.querySelector("#users_title").innerText = "GitHub Users";

const buttonSearch = document.querySelector("#search_btn");

buttonSearch.addEventListener("click",(e)=> {
    const inputElement = document.getElementById("user_name");
    let user = inputElement.value;
    if (String(user).length == 0){
        apiData.init();
        inputElement.value = "";
    }
    else{
        apiData.search(user);
        inputElement.value = "";
    }
});

apiData.init();