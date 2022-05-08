import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let home=()=>{
    console.log("hello")
    window.location.href="index.html"
}
document.querySelector("#vlogo").addEventListener("click",home)
let cart1=JSON.parse(localStorage.getItem("cart"))||[]
document.querySelector("#vvalue").innerText=cart1.length

let data=JSON.parse(localStorage.getItem("detail"))
console.log(data)
document.querySelector("#vname").innerText=data[0].name
let image=document.createElement("img")
image.src=data[0].image
document.querySelector("#d_left").append(image)
document.querySelector("#pro_nmae").innerText=data[0].name
let price=document.createElement("h3")
price.innerText=`₹${data[0].total_reviews}`
let div2=document.createElement("div")
let div3=document.createElement("div")
div3.innerText="(Inclusive of all taxes)"
div3.setAttribute("id","pricetag1")
div2.append(price)
let div4=document.createElement("div")
div4.append(div2,div3)
div4.setAttribute("id","pricetag")
div2.setAttribute("id","vrename_price")
let image1=document.createElement("img")
image1.src="WhatsApp Image 2022-05-08 at 9.43.49 AM.jpeg"
image1.style="width:100%"
let btn=document.createElement("button")
btn.innerText="Buy"
btn.setAttribute("class","bt_style")
let btn1=document.createElement("button")
btn1.setAttribute("class","bt_style")
btn1.innerText="Add To Cart"
btn1.style=" width: 50%"
btn.addEventListener("click",function(){
    window.location.href="checkout.html"
})
btn1.addEventListener("click",function(){
    
    localStorage.setItem("cart",JSON.stringify(data))
    window.location.href="cart.html"
})




document.querySelector("#d_right").append(div4,image1,btn,btn1)

