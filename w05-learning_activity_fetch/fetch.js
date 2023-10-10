const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

async function getPokemonList(url) {
    const response = await fetch(url);

    if (response.ok){
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuff(data, list=false) {
  
    results = data;
  
    const html = `<h2>${results.name}</h2>
                <img src=${results.sprites.front_default} alt= Image of ${results.name}>`;
  
    const output = document.querySelector("#output");
  
    output.innerHTML = html;

}

function doStuffList(data){
    const outputList = document.querySelector("#outputList");

    console.log(data);

    let pokeList = data.results;

    pokeList = sortPokemon(pokeList);
    
    let html = "";
    
    pokeList.forEach((pokemon)=>{
        html += `<li>${pokemon.name}</li>`;
    });

    outputList.innerHTML = html;
}

function sortPokemon(list){
    let sortedList = list.sort(compare);
    return sortedList;
}

function compare(a,b){
    if(a.name > b.name){
        return 1;
    }
    else if(a.name < b.name){
        return -1;
    }
    else{
        return 0;
    }
}

getPokemon(url, doStuff);

getPokemon(urlList, doStuffList);
