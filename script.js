const image=document.querySelector("#img")
var degeree=document.querySelector("#deg")
var place=document.querySelector("#place")
var climate=document.querySelector("#climate")
var btn=document.querySelector("#search")
var input=document.querySelector("#input")
var mph=document.querySelector("#mph")
var kph=document.querySelector("#kph")
async function getdata(){
const res=await fetch(`https://api.weatherapi.com/v1/current.json?key=c4ad55973ff54e0d82035204231604&q=${input.value}`,{headers: {
      "Content-Type": "application/json"},method:"GET"})
.then(function(response){
return response.json();
})
.then(function(data){
degeree.innerHTML=`${data.current.temp_f}°F`;
place.innerHTML=data.location.name;
climate.innerHTML=data.current.condition.text;
mph.innerHTML=`${data.current.wind_mph}mph`;
kph.innerHTML=`${data.current.wind_kph}kph`;
if(data.current.condition.text=="Clear"){
image.src="Images/clear.svg"
}
else if(data.current.condition.text=="Partly cloudy"){
image.src="Images/cloud.svg"
}
else if(data.current.condition.text=="Sunny"){
 image.src="Images/clear.svg"
}
else if(data.current.condition.text=="Moderateorheavyrainwiththunder"){
climate.style.fontsize="5px";
image.src="Images/rain.svg"
}
else if(data.current.condition.text == "Patchy rain possible"){
image.src="Images/haze.svg"
}
else if(data.current.condition.text=="Mist"){
image.src="Images/cloud.svg"
}

else{
console.log("error");
}
})

}
btn.addEventListener("click",function(){
getdata();
})
