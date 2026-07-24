let allProduct = localStorage.getItem("productsCart")
let displayProduct = document.querySelector(".products")
allProduct = JSON.parse(allProduct)
if (allProduct){
    function draw(){
        let y = allProduct.map((item) => {
            return `
        <div class="product1">
                <img src="${item.imageURL}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <button class="button3" onClick="Delet(${item.id})">Delet</button>
            </div>
        `
        })
        displayProduct.innerHTML += y.join(" ")
    }
    draw()
}
let counter2 = localStorage.getItem("counter")
let counter = document.querySelector("#counter")
function Delet(id){
    let index = allProduct.findIndex(item => item.id === id)
    if (index !== -1) {
        allProduct.splice(index, 1)
        counter2--
        localStorage.setItem("counter" , counter2)
        counter.innerHTML = localStorage.getItem("counter")
    }
    localStorage.setItem("productsCart", JSON.stringify(allProduct))
    displayProduct.innerHTML = ""
    draw()

}
let iconcart = document.querySelector(".shopping_cart i")
let list = document.querySelector(".carts_products")
let addDiv = document.querySelector(".carts_products div")
list.style.display="none"
iconcart.addEventListener("click" , function(){
        if (list.style.display === "block"){
        list.style.display="none"
    }
    else{
        list.style.display="block"
    }
})


    counter.style.display="block"
    counter.innerHTML = localStorage.getItem("counter")
