import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()


// const codevalue= document.querySelector("v_input");
// codevalue.addEventListener("v_button",()=>{
//     let value = document.querySelector("v_input");
//     value.innerHTML=masai
// })

const wrapper= document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn00");
const searchInp = wrapper.querySelector("input");
const Options = wrapper.querySelector(".options");

let countries = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Armenia",
"Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus",
"Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Colombia","Dominica","Ecuador","Egypt","El Salvador",
"Equatorial Guinea","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)",
"Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Japan","Jersey",
"Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait",
"Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
"Lithuania","Luxembourg","Macao","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte",
"Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)",
"Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Portugal",
"Qatar","Russian Federation (the)","South Africa","Spain","Sri Lanka","Sudan (the)","Suriname","Tuvalu","Uganda","Ukraine",
"United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)",
"United States of America (the)","Uzbekistan",];

function addCountries(){
    countries.forEach(country =>{
       // console.log(country)
       let li = `<li onclick="updateName(this)">${country}</li>`
       Options.insertAdjacentHTML("beforeend",li)
    });
}
addCountries()

function updateName(selectedli){
    // console.log(selectedli.innerText)
    selectBtn.firstElementChild.innerText=selectedli.innerText;
}
searchInp.addEventListener("keyup",()=>{
    let arr =[];
    let SrhValue = searchInp.value.toLowerCase();
    arr= countries.filter(data=>{
        return data.toLowerCase().startsWith(SrhValue);
    })
console.log(arr)
});

let price=localStorage.getItem("subtotal")
price=+price
console.log(price)
document.querySelector("#subprice").innerText=`₹${price}`
let num=0
if(price<1000)
{
     num=Math.floor(price/100)
    num=+num*10
    document.querySelector("#charge").innerText=`₹${num}`
    document.querySelector("#total").innerText=`₹${num+price}`
}
else
{
document.querySelector("#charge").innerText="Free"
document.querySelector("#total").innerText=`₹${price}`
}
let data=[]
localStorage.setItem("cart",JSON.stringify(data))
selectBtn.addEventListener("click",()=>{
    wrapper.classList.toggle("active");
})


function finle(){
    window.location.href="reserve.html"
}
document.querySelector("#last2222").addEventListener("click", finle)
let InputSearch=(e)=>{
    let query=document.querySelector("#vinput").value 
    if(e.key== "Enter" && query!="")
    {
       localStorage.setItem("search",query)
       window.location.href="sproducts.html" 
    }

}
let InputSearch1=()=>{
   let query=document.querySelector("#vinput").value 
   if(query!="")
  { localStorage.setItem("search",query)
   window.location.href="sproducts.html"}

}

document.querySelector("#v1icon").addEventListener("click",InputSearch1)

document.querySelector("#vinput").addEventListener("keydown",InputSearch)
document.querySelector("#vlogo").addEventListener("click",home)
function home()
{
    window.location.href="index.html"
}
document.querySelector("#signinButton").addEventListener("click",logIn)
function logIn()
{ 
event.preventDefault()
let arr=JSON.parse(localStorage.getItem("sing_data"))||[]
let name=document.querySelector("#signinEmail").value
let ans=false
  arr.map(function(ele)
  {
      if(ele.name==name)
      {
          ans=true
      }
  })
  if(ans)
  {
      alert("logIn successful")
  }
  else
  alert("wrong details")
}