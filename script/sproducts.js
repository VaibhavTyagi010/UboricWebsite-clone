import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()
let name=localStorage.getItem("search")
console.log(name)
let data =[]  
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'wolf-amazon-data-scraper.p.rapidapi.com',
// 		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
// 	}
// };

// fetch(`https://wolf-amazon-data-scraper.p.rapidapi.com/search/${name}?api_key=59ef84be287bba26357f5519b0058332`, options)
// 	.then(response => response.json())
// 	.then(response => getdata(response.results))
// 	.catch(err =>console.log(err));
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon-data-scraperapi.p.rapidapi.com',
		'X-RapidAPI-Key': '14bb6c7121msh329648d6b001aadp1b68eejsnba4cf1648fce'
	}
};

fetch(`https://amazon-data-scraperapi.p.rapidapi.com/search/${name}%20air?api_key=16e8a0391d250b1bb02b79751c286816`, options)
	.then(response => response.json())
	.then(response => getdata(response.results))
	.catch(err =>
         document.querySelector("#limg").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7lx65_LTmxDgpsExCHk6JvnnffG4jfXRKGrXfFGsCxh2yUdcTvdiAh--p0uAvy1d8tE&usqp=CAU");
  
    let getdata=(d)=>{
data=d
console.log(data)
append(data)
window.addEventListener("load",function(){
    append(data);
})
    }

 

let append=(data)=>{
document.querySelector("#v_products").innerHTML=""

document.querySelector("#pro-num").innerText=data.length
data.map((ele)=>{
    
    let image=document.createElement("img")
    image.src=ele.image
    image.setAttribute("id","iresize")
    let name=document.createElement("h3")
    name.innerText=ele.name
    let div1=document.createElement("div")
    div1.setAttribute("id","name_size")
    div1.append(name)
    let price=document.createElement("h3")
    price.innerText=`₹${ele.total_reviews}`
    let div2=document.createElement("div")
    div2.append(price)
    div2.setAttribute("id","vrename_price")
    let div=document.createElement("div")
    let div3=document.createElement("div")
   div3.setAttribute("id","v_addbutton")
   let btn=document.createElement("button")
   btn.innerText="Add To Cart"
   btn.addEventListener("click",function(){
       setlocal(ele)
   })
   let btn1=document.createElement("button")
   btn1.innerText="More detail"
   btn1.addEventListener("click",function(){
       detail(ele)
   })
   div3.append(btn,btn1)
    div.append(image,div1,div2,div3)
    document.querySelector("#v_products").append(div)

})
}
document.querySelector("#vlogo").addEventListener("click",home)
function home()
{
    window.location.href="index.html"
}

let cart1=JSON.parse(localStorage.getItem("cart"))||[]

document.querySelector("#vvalue").innerText=cart1.length
function setlocal(ele)
{
  
    cart1.push(ele)
    localStorage.setItem("cart",JSON.stringify(cart1))
    document.querySelector("#vvalue").innerText=cart1.length
}
function detail(ele)
{
    let arr=[]
    arr.push(ele)
    localStorage.setItem("detail",JSON.stringify(arr))
    window.location.href="detail.html"
}
 let sort =()=>{
     let select=document.querySelector("#v_sort").value 
     if(select=="asd")
     {
         data.sort(function(a,b){
             return a.total_reviews -b.total_reviews
         });
         append(data)
     }
     else
     {
        data.sort(function(a,b){
            return b.total_reviews -a.total_reviews
        });
        append(data)
    }

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

document.querySelector("#v1icon").addEventListener("click",InputSearch1)

document.querySelector("#vinput").addEventListener("keydown",InputSearch)
 let input= document.querySelector("#v_sort")
 input.onchange=sort  

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
