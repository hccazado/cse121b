const anArray = ["one", "two", "three"];

const htmlArray = anArray.map(current => {
    return `<li>${current}</li>`;
});

document.querySelector("#myList").innerHTML = htmlArray.join('');
