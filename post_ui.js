const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; 
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data); 
            displayPosts(data);  
        })
}

// {
//     "userId": 10,
//     "id": 98,
//     "title": "laboriosam dolor voluptates",
//     "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
// }

const displayPosts = (posts) => {

    // 1. get the container and empty the container 
    const postContainer = document.getElementById("post-container");
    postContainer.innerH; TML = "" 
    
    posts.forEach((post) => {
        // 2. create element 

        const postCard = document.createElement("div"); 
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `; 

        // 3. add to the container 
        postContainer.append(postCard); 
    }); 
}; 

loadPost(); 