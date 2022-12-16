const userBtn = document.querySelector(".userBtn");
const adminBtn = document.querySelector(".adminBtn");

userBtn.addEventListener("click", showUser);
adminBtn.addEventListener("click", showAdmin);

function showUser(){
 userBtn.classList.add("active");
 adminBtn.classList.remove("active");
}
function showAdmin(){
adminBtn.classList.add("active");
userBtn.classList.remove("active");
}
