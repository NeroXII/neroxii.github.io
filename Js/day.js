 window.addEventListener('load', () => {
///////// DAY ///////////
const day = new Date;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById('today').textContent = days[day.getDay()] ;

/////////// time /////////
let sTime = () => {
    const time = new Date;
    document.getElementById('time').textContent = time.toLocaleString();
 }
 setInterval(sTime,100);

//////// Weather ///////// 
let long;
let lat;
let climat = document.getElementById('weather');
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
           lat = position.coords.latitude;
           long =position.coords.longitude;
           const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8bde240511b7507a6bd8b43ec4ced54e` ;
           
           fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    climat.textContent=data.weather[0] ['main'];

                    let apiImage = textContent=data.weather[0] ['main'];
                    let climatImg= document.getElementById('status');
                    let descArea = document.getElementById('desc');
                    let desc = data.weather[0] ['description'];

                    descArea.style.color="red";
                    document.getElementById('desc').textContent = desc;

                    if (apiImage == "Clouds") {
                        climatImg.src="imgs/weather/cloudy.png";
                    }
                    if (apiImage =="Snow") {
                        climatImg.src="imgs/weather/snowy.png";
                    }
                    if (apiImage =="Rain") {
                        climatImg.src="imgs/weather/rainy.png";
                    }
                    if (apiImage =="Clear") {
                        climatImg.src="imgs/weather/sunny.png";
                    }
                    
                    
                    
                })

                
       } )

        
      

       
    }
              

 })
 