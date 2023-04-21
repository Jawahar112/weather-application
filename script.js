const image=document.querySelector("#img")
var degeree=document.querySelector("#deg")
var place=document.querySelector("#place")
var climate=document.querySelector("#climate")
var btn=document.querySelector("#search")
var input=document.querySelector("#input")
var mph=document.querySelector("#mph")
var kph=document.querySelector("#kph")
var loader=document.querySelector(".loader")

async function getdata(){

loader.style.display="block";
const res=await fetch(`https://api.weatherapi.com/v1/current.json?key=c4ad55973ff54e0d82035204231604&q=${input.value}`,{headers: {
      "Content-Type": "application/json"},method:"GET"})
.then(function(response){

return response.json();
})
.then(function(data){
loader.style.display="none";
degeree.innerHTML=`${data.current.temp_f}°F`;
place.innerHTML=data.location.name;
climate.innerHTML=data.current.condition.text;
mph.innerHTML=`${data.current.wind_mph}mph`;
kph.innerHTML=`${data.current.wind_kph}kph`;
if(data.current.condition.text=="Clear"){
image.src="images/clear.svg"
}
else if(data.current.condition.text=="Partly cloudy"){
image.src="images/cloud.svg"
}
else if(data.current.condition.text=="Sunny"){
 image.src="images/clear.svg"
}
else if(data.current.condition.text=="Moderateorheavyrainwiththunder"){
climate.style.fontsize="5px";
image.src="images/rain.svg"
}
else if(data.current.condition.text == "Patchy rain possible"){
image.src="images/haze.svg"
}
else if(data.current.condition.text=="Mist"){
image.src="images/cloud.svg"
}
else if(data.current.condition.text=="Light rain shower"){
image.src="images/rain.svg"
}


else{
console.log("error");
}
})
.catch(function()
{
alert("invalid city")
})

}
btn.addEventListener("click",function()
{
if(input.value=="")
{
alert("pls enter value")
}
else{
getdata();
input.value="";
}
})
