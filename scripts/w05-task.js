/* W05: Programming Tasks */

/* Declare and initialize global variables */
var templesElement = document.querySelector("#temples");

var templeList = null;

/* async displayTemples Function */

const displayTemples = (temples)=>{
    temples.forEach((temple)=>{

        const articleElement = document.createElement("article");

        //replace above line with beneath commented one in order to apply assignment's example styling

        //const articleElement = document.createElement("picture");

        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.innerHTML = temple.templeName;
        
        img.setAttribute("src",temple.imageUrl);

        img.setAttribute("alt",temple.location);

        articleElement.appendChild(h3);

        articleElement.appendChild(img);

        articleElement.setAttribute("class","picture");

        templesElement.appendChild(articleElement);

    });
}


/* async getTemples Function using fetch()*/

const getTemples = async ()=> {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */
const reset = function () {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = function (temples) {
    
    reset();

    let filter = document.querySelector("#sortBy").value;
    console.log(filter);
    
    switch (filter){

        case "utah":
            displayTemples(templeList.filter(temple=>{
                return temple.location.includes("Utah");

            }));  

        break;
        case "notutah":
            displayTemples(templeList.filter(temple=>{
                return !temple.location.includes("Utah");
            }));

        break;
        case "older":
            displayTemples(templeList.filter(temple=>{
                const dedicated = new Date(temple.dedicated);

                return dedicated < new Date(1950, 0, 1);
            }));

        break;
        case "all":
            displayTemples(templeList);
        break;

    }

}


getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", ()=>{ sortBy(templeList) });