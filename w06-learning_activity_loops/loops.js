myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  /*let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];*/
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  /*document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);*/

  document.querySelector("#favorite-foods-title").innerHTML = "Favorite Foods";
  document.querySelector("#hobbies-title").innerHTML = "Hobbies";
  document.querySelector("#places-lived-title").innerHTML = "Places lived";
  
  const foodList = document.querySelector("#favorite-foods");
  const hobbiesList = document.querySelector("#hobbies-list");
  const placesLived = document.querySelector("#places-lived");
  
  function appendFavoriteFood(food){
    let liElement = document.createElement("li");
    liElement.innerText = food;
    foodList.appendChild(liElement);
  }

  function appendHobby(hobby){
    let liElement = document.createElement("li");
    liElement.innerText = hobby;
    hobbiesList.appendChild(liElement);
  }

  function mapStringFood(food){
    return `<li>${food}</li>`;
  }

  const foodsListElements = myInfo.favoriteFoods.map(mapStringFood);

  const foodsListElementsArrow = myInfo.favoriteFoods.map((food)=> `<li>${food}</li>`);


  function placesLivedCallback(place){
    return `<dt>${place.place}</dt>
            <dd>${place.length}</dd>`;
  }

  function foodsCallback(food){
    return `<li>${food}</li>`;
  }

  function elementsHTML(array, callback){
    let htmlString = "";
    htmlString = array.map((element)=>callback(element)).join("");

    return htmlString;
  }
    
  placesLived.innerHTML = elementsHTML(myInfo.placesLived, placesLivedCallback);

  foodList.innerHTML = elementsHTML(myInfo.favoriteFoods, foodsCallback);


  
  
  myInfo.hobbies.map((hobby)=>appendHobby(hobby));