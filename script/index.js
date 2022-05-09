import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let home=()=>{
    console.log("hello")
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
document.querySelector("#vlogo").addEventListener("click",home)
 document.querySelector("#kitchen-item").addEventListener("click",myfun)
 function myfun()
 {
 localStorage.setItem("search","kitchen")
 window.location.href="sproducts.html"
 }
 document.querySelector("#electric").addEventListener("click",myfun1)
 function myfun1()
 {
 localStorage.setItem("search","Electric Appliances")
 window.location.href="sproducts.html"
 }
 document.querySelector("#bathroom").addEventListener("click",myfun2)
 function myfun2()
 {
 localStorage.setItem("search","Bathroom Accessories")
 window.location.href="sproducts.html"
 }
 document.querySelector("#v2product").addEventListener("click",myfun3)
 function myfun3()
 {
 localStorage.setItem("search","Headphone")
 window.location.href="sproducts.html"
 }
 document.querySelector("#clothing").addEventListener("click",myfun4)
 function myfun4()
 {
 localStorage.setItem("search","clothing")
 window.location.href="sproducts.html"
 }
 document.querySelector("#painting").addEventListener("click",myfun5)
 function myfun5()
 {
 localStorage.setItem("search","painting")
 window.location.href="sproducts.html"
 }
 document.querySelector("#v3product").addEventListener("click",myfun6)
 function myfun6()
 {
 localStorage.setItem("search","product")
 window.location.href="sproducts.html"
 }
 document.querySelector("#spices").addEventListener("click",myfun7)
 function myfun7(){
 localStorage.setItem("search","spices")
 window.location.href="sproducts.html"
 }
 
 document.querySelector("#footwear").addEventListener("click",myfun8)
  function myfun8(){
 localStorage.setItem("search","foot wear")
 window.location.href="sproducts.html"
 }
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
 
 v1icon
 document.querySelector("#v1icon").addEventListener("click",InputSearch1)

 document.querySelector("#vinput").addEventListener("keydown",InputSearch)
    let cart1=JSON.parse(localStorage.getItem("cart"))||[]

document.querySelector("#vvalue").innerText=cart1.length



