const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => res.json())
        .then((data) => console.log(data)); 
}; 

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; 

    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        console.log(json); 
        displayPost(json); 
    }); 
}; 

const displayPost = (posts) => {
    posts.forEach((posts) => {
        console.log(posts); 
    })
} 