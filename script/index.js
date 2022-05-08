import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let home=()=>{
    console.log("hello")
    window.location.href="index.html"
}
document.querySelector("#vlogo").addEventListener("click",home)
// ...............................................................slideshow...........................................................
// let i=0
// let slide =(data)=>{
//  console.log()
//     setInterval(()=>{
//         console.log(data)
//         document.querySelector("#vslide_show").innerHTML=null
//     let img=document.createElement("img")
//     img.src=data.ads[i].image
//     img.setAttribute("id","vslideimg")
    
    
//     document.querySelector("#vslide_show").append(img)
//     if(i==6)
//     {
//         i=0;
//     }
//     i++
//     },3000)
//  }
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





//  ...............................................................amzon data..............................................................................
// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(json=>slide(json))
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'wolf-amazon-data-scraper.p.rapidapi.com',
// 		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
// 	}
// };

// fetch('https://wolf-amazon-data-scraper.p.rapidapi.com/search/kitchen?api_key=59ef84be287bba26357f5519b0058332', options)
// 	.then(response => response.json())
// 	.then(response => slide(response))
// 	.catch(err => slide(err));
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'wolf-amazon-data-scraper.p.rapidapi.com',
// 		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
// 	}
// };

// fetch('https://wolf-amazon-data-scraper.p.rapidapi.com/products/B077QWM132?api_key=59ef84be287bba26357f5519b0058332', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// ..................................................mazon 4sec
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'aditi-amazon-data-scraper.p.rapidapi.com',
// 		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
// 	}
// };

// fetch('https://aditi-amazon-data-scraper.p.rapidapi.com/search/Macbook%20Air?api_key=ab2df129e9130e8d47bbb894b37aeaf0', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'aditi-amazon-data-scraper.p.rapidapi.com',
// 		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
// 	}
// };

// fetch('https://aditi-amazon-data-scraper.p.rapidapi.com/products/B08N5N6RSS', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));