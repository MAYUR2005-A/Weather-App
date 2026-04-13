    const apikey="e23e007396741a04bfc00db0a8bc7399";
    const apilink="https://api.openweathermap.org/data/2.5/weather?q=";
    let input=document.querySelector("#inp");
    let button=document.querySelector("#searchbtn");
    async function checkweather(city){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey+ "&units=metric");
    const json=await response.json();
    console.log(json);
  if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
      document.querySelector(".details").style.display="none";
    }
  else{
      document.querySelector(".error").style.display="none";
    let temp=document.querySelector(".temp").innerText=Math.round(json.main.temp)+ "°c"; 
    let c=document.querySelector(".city").innerText=json.name; 
    let humidity=document.querySelector("#percent").innerText=json.main.humidity+ "%";
    let wind=document.querySelector("#speed").innerText=json.wind.speed + " km/hr";
    let weathertype=json.weather[0].main;
    if (weathertype=="Mist"){
      let img=document.querySelector("#imgupdate");
      img.src="mist.png";
    }
    else if(weathertype=="Clouds"){
      let img=document.querySelector("#imgupdate");
      img.src="clouds.png";
    }
    else if(weathertype=="Clear"){
      let img=document.querySelector("#imgupdate");
      img.src="clear.png";
    }
    else if(weathertype=="Snow"){
      let img=document.querySelector("#imgupdate");
      img.src="snow.png";
    }
    else if(weathertype=="Drizzle"){
      let img=document.querySelector("#imgupdate");
      img.src="drizzle.png";
    }
    else if(weathertype=="Rain"){
      let img=document.querySelector("#imgupdate");
      img.src="rain.png";
    }
  document.querySelector(".weather").style.display="block";
  document.querySelector(".details").style.display="flex";
  }
  }
button.addEventListener("click",() => {
  if(input.value==""){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
      document.querySelector(".details").style.display="none";
  }
  else{
  checkweather(input.value);}
}); 
input.addEventListener("keydown",(event)=> {
  if(event.key=="Enter"){
  checkweather(input.value);}
});