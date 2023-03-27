document.addEventListener('DOMContentLoaded', init);
function init() {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    console.log(searchByID.value);
    
    fetch(`http://localhost:3000/movies/${searchByID.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      title.innerText = data.title;
      summary.innerText = data.summary;
    })
    });
}