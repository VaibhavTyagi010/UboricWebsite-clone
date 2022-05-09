// let btn = document.getElementById("log_btn").addEventListener("click",suraj)
// console.log("hey suraj")
// document.getElementById("Form").addEventListener("click",sub_detais)
import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let arr =JSON.parse(localStorage.getItem("sing_data"))||[]
function suraj () {
//  e.preventDefault();
  let name = document.getElementById("log_email").value;
  let passowrd = document.getElementById("log_pass").value
  
  let obj = {
      name:name,
      passowrd:passowrd
  }
  arr.push(obj)
//   console.log(arr)
localStorage.setItem("sing_data",JSON.stringify(arr))
alert("Account created successfully")
window.location.href="./index.html"
}
document.querySelector("#login").addEventListener("click",suraj)
// document.querySelector("#last2222").addEventListener("click", finle)
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