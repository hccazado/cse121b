
const apiData = {
    users: [],
    usersUrl: "https://api.github.com/users",
    baseUrl: "https://api.github.com/users/",
    display(){
        const usersContainer = document.querySelector("#users_container");
        usersContainer.innerHTML = "";
        this.users.forEach(user =>{
            usersContainer.innerHTML += htmlUser(user);
        });
    },
    async search(input){
        let customurl = this.baseUrl + input;
        await fetchUsers(customurl, true);
        this.display();
    },
    async init(){
        await fetchUsers(this.usersUrl);
        this.display();
    }
}

async function fetchUsers(url, singleUser=false){
    let response = await fetch(url);
    if(response.ok){
        apiData.users = [];

        let data = await response.json();
        if (singleUser){
            apiData.users.push({
                id: data.id,
                login: data.login,
                avatar: data.avatar_url,
                profile: data.html_url
            });
        }
        else{
            data.map( (user) =>{
                apiData.users.push({
                    id: user.id,
                    login: user.login,
                    avatar: user.avatar_url,
                    profile: user.html_url
                });
            });
        }
    }
    else{
        apiData.users = [];
    }
}

const htmlUser= (user)=>{
    let card = `
    <a href=${user.profile} class="user" target="_blank">
        <div id=${user.id} >
        <img src=${user.avatar} alt="${user.login} avatar image">
        <h3>${user.login}</h3>
        </div>
    </a>`
    
    return card;
}

export default apiData;