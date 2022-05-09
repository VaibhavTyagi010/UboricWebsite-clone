// console.log("hey suraj")
document.getElementById("Form").addEventListener("click",sub_detais)
function sub_detais (e) {
 e.preventDefault();
  let name = document.getElementById("email").value;
  let passowrd = document.getElementById("Password").value
  console.log(name,passowrd)
}
