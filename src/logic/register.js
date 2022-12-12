const userBtn = document.querySelector(".userBtn");
const adminBtn = document.querySelector(".adminBtn");
const userForm = document.querySelector(".user-form");
const adminForm = document.querySelector(".admin-form");

userBtn.addEventListener("click", showUserForm);
adminBtn.addEventListener("click", showAdminForm);

document.onload = showUserForm();

function showUserForm() {
    userForm.style.display = "grid";
    adminForm.style.display = "none";
    userBtn.style.background = "#CFCCD2";
    userBtn.style.color = "black";
    adminBtn.style.background = "#663398";
    adminBtn.style.color = "white";
}

function showAdminForm() {
    adminForm.style.display = "grid";
    userForm.style.display = "none";
    adminBtn.style.background = "#CFCCD2";
    adminBtn.style.color = "black";
    userBtn.style.background = "#663398";
    userBtn.style.color = "white";
}