
const input = document.getElementById("ipt_name");

const btn = document.getElementById("btn");

const output = document.querySelector("#output");

btn.addEventListener("click", (event)=>{
    output.innerHTML = input.value;
});