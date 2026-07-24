let link = document.querySelector("#link")
let user_info = document.querySelector("#user_info")
let user = document.querySelector("#user")

if (localStorage.getItem("username"))
{
    link.remove()
    user_info.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
let logOut = document.querySelector("#logout")
logOut.addEventListener("click" , function(){
    localStorage.clear()
    setTimeout(() => {
        window.location = "login.html"
    } , 1000)
})
