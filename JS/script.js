let allProduct = document.querySelector(".products")
let q = [
    {
        id: 1,
        imageURL : "image/🔥 USA Sale_ KVIDIO Over-Ear Wired Headphones – Only $11_39.jpg",
        name : "Headphone",
        price : "1200 EGP"
    },
    {
        id: 2,
        imageURL : "image/68 Keys Mechanical Keyboard Ergonomics RGB Backlit LED Hot Swappable Blue Switch Gaming Keyboard for.jpg",
        name : "Keyboard",
        price : "1800 EGP"
    },
    {
         id: 3,
        imageURL : "image/Ninja Dragon Stealth 7 Wireless Silent LED Gaming Mouse.jpg",
        name : "Gaming Mous",
        price : "850 EGP"
    },
    {
         id: 4,
        imageURL : "image/Smart Watch for Android iPhone iOS 1_4.jpg",
        name : "Smart Watch",
        price : "2500 EGP"
    },
    {
         id: 5,
        imageURL : "image/Portable Bluetooth Speaker, 2026 Bluetooth 5_4 Wireless Speaker with 20W HD Stereo Sound, 20H Playtime, IP7, TWS Pairing, LED Lights, Built-in Mic, for Outdoor, Party, Beach, Gift.jpg",
        name : "Speaker",
        price : "1500 EGP"
    },
    {
         id: 6,
        imageURL : "image/4K Webcam for PC with Stable Auto Focus, Smooth Video, 2 Noise-Cancelling Microphones, USB Pl___.jpg",
        name : "Webcam",
        price : "1700 EGP"
    },
    {
         id: 7,
        imageURL : "image/FIFINE-micrófono dinámico USB_XLR con botón de silencio táctil, Conector de auriculares, controles de E_S, para PC, mezclador de PS5_4, amplificador de micrófono para juegos AM8 - AliExpress 44.jpg",
        name : "USB Microphone",
        price : "2100 EGP"
    },
    {
         id: 8,
        imageURL : "image/download (1).jpg",
        name : "Power Bank",
        price : "900 EGP"
    },
    {
         id: 9,
        imageURL : "image/Disco sólido SSD interno Kingston SNV2S_1000G 1TB.jpg",
        name : "SSD 1TB",
        price : "4200 EGP"
    },
    {
         id: 10,
        imageURL : "image/6 In 1 USB Type-C Hub 4K HDMI Video Adapter TF Card Reader PD 3_0 Charging Dock.jpg",
        name : "USB-C Hub",
        price : "650 EGP"
    }

]
function draw(){
    let y = q.map( (item) => {
        return `
        <div class="product1">
                <img src="${item.imageURL}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <button class="button2" onClick = "addCart(${item.id})">Add to Cart</button>
                <button class="button3">Add to Favorites</button>
            </div>
        `
    })
    allProduct.innerHTML += y.join(" ")
}
draw()
let addDiv = document.querySelector(".carts_products div")
let counCart = document.querySelector("#counter")
let addedcart = localStorage.getItem("productsCart") ? JSON.parse(localStorage.getItem("productsCart")) : []
if(localStorage.getItem("productsCart")){
    addedcart.map(item => {
        addDiv.innerHTML += `<p style="font-size:20px">${item.name}</p>`
    })
    counCart.style.display="block"
    counCart.innerHTML = addedcart.length
}
function addCart(id){
    let att = q.find ( (item) => item.id === id)
    addDiv.innerHTML += `<p style="font-size:20px">${att.name}</p>`
    let divs = addDiv.children
    counCart.style.display = "block"
    counCart.innerHTML = divs.length
    addedcart = [...addedcart , att]
    localStorage.setItem("productsCart" , JSON.stringify(addedcart))
    let counter = divs.length
    localStorage.setItem("counter" , counter)
    if (!(localStorage.getItem("username"))){
        alert("please enter your data")
    }
}

let iconcart = document.querySelector(".shopping_cart i")
let list = document.querySelector(".carts_products")
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



