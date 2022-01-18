function fetchdata(){
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=g9b7LSFuaR7VYn6xzqqtj6EyuEAd8wmVeesm01Mm')
.then(response =>{
if (!response.ok) {
    throw Error("ERROR")
}    
return response.json()
.then(data => {
    const html = data.photos.map(user => {

        return ` 
        <div class="card">
        <img src= "${user.img_src}" alt="Mars Photo"/>
        <div class="card-body">
        <p>Date: ${user.earth_date}</p>
        <p>Rover: ${user.rover.status}</p>
        <br>
        <button onclick="btn1(this)" id="button">Like</button>
        </div>
        </div>`

    }).join ("");
    let space = document.querySelector('#space').insertAdjacentHTML("afterbegin", html)
    let space1 = document.querySelector('#space1')
    let pic1 = document.querySelector('#pic1', html)
    var myobj = document.querySelector("#imageLoadSpinner");
myobj.remove();
});

});

}
fetchdata();
function btn1(info) {
   if(info.innerHTML == "Like") {
       info.innerHTML = "❤️"
       
   } 
   else if(info.innerHTML == "❤️"){
       info.innerHTML = "Like"
   }
   
}

