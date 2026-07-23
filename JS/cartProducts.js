let allProduct = localStorage.getItem("productsCart")
let displayProduct = document.querySelector(".products")
if (allProduct){
    allProduct = JSON.parse(allProduct)
    function draw(){
        let y = allProduct.map((item) => {
            return `
        <div class="product1">
                <img src="${item.imageURL}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <button class="button3" onClick="Delet()">Delet</button>
            </div>
        `
        })
        displayProduct.innerHTML += y.join(" ")
    }
    draw()
}
let link = document.querySelector("#link")
let user_info = document.querySelector("#user_info")
let user = document.querySelector("#user")

if (localStorage.getItem("username"))
{
    link.remove()
    user_info.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
let iconcart = document.querySelector(".shopping_cart i")
let list = document.querySelector(".carts_products")
let addDiv = document.querySelector(".carts_products div")
list.style.display="none"
iconcart.addEventListener("click" , function(){
    if (addDiv.innerHTML != ""){
        if (list.style.display === "block"){
        list.style.display="none"
    }
    else{
        list.style.display="block"
    }
    }
})