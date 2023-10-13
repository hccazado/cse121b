const apiUrl = "https://api.github.com/users";
var results;

async function getUrl(url){
    const result = await fetch(url);
    const data = await result.text();
    //console.log(data);
    data.for(user => {
        console.log(user.name);
    });
}

getUrl(apiUrl);