fetch("https://api.example.com/products")
  .then(res => res.json())
  .then(data => console.log(data));