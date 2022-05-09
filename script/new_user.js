// let btn = document.getElementById("log_btn").addEventListener("click",suraj)
// console.log("hey suraj")
// document.getElementById("Form").addEventListener("click",sub_detais)
let arr = []
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
window.location.href="./index.html"
}
