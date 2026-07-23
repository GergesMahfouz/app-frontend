let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginbtn = document.querySelector("#Sing_in")
let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginbtn.addEventListener("click" , function(e){
    e.preventDefault()
    if (username.value === "" || password.value === "")
    {
        alert("please file data")
    }
    else
    {
        if (getusername && getusername.trim() === username.value.trim() && getpassword && getpassword.trim() === password.value.trim())
        {
            setTimeout(() => {
                window.location = "index.html"
            } , 1000)
        }
        else
        {
            alert("username or password is wrong")
        }
    }
})