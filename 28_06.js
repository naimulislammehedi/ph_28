const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayPosts(data);
        });
};

// {userId: 10, id: 94, title: 'qui qui voluptates illo iste minima', body: 'aspernatur expedita soluta quo ab ut similique\nexp…mnis facilis nam ipsum natus sint similique omnis'}

const displayPosts = (posts) => {
    // 1 - get the container and empty the container 
    const postsContainer = document.getElementById("post-container"); 
    postsContainer.innerHTML = ""; 
    posts.forEach((post) => {
        // 2. create element
        const postCard = document.createElement("div"); 
        postCard.innerHTML = ` <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`; 

        // 3 - add to the container 
        postsContainer.append(postCard)
    }); 

}; 

loadPost(); 