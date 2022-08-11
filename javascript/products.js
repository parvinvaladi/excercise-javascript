const data = [
    
    {
        num: 1,
        "name": "laptop",
        detail: "جزئیات محصول",
        price: "20,000,000 tm",
        photo: "./image/1.jpg"
    },
    {
        num: 2,
        "name": "camera",
        detail: "جزئیات محصول",
        price: "10,000,000 tm",
        photo: "./image/2.jpg"
    },
    {
        num: 3,
        "name": "book1",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 4,
        "name": "book2",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 5,
        "name": "book3",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 6,
        "name": "book4",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 7,
        "name": "book5",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 8,
        "name": "book6",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 9,
        "name": "book7",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 10,
        "name": "book8",
        detail: "جزئیات محصول",
        "price":  "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 11,
        "name": "book9",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    },
    {
        num: 12,
        "name": "book10",
        detail: "جزئیات محصول",
        "price": "50,000 tm",
        photo: "./image/3.jpg"
    }
];

if(!localStorage.getItem("old")){
    localStorage.setItem("old",JSON.stringify(data));
}

var products = [];
var oldProducts = [];
var newProducts = [];
let productSection = document.getElementById("products");
var pr = localStorage.getItem("old");
oldProducts = JSON.parse(pr);
if(!!localStorage.getItem('new')){
    var pr2 = localStorage.getItem('new');
    newProducts = JSON.parse(pr2);
    products = oldProducts.concat(newProducts);
    localStorage.setItem("old",JSON.stringify(products));
    localStorage.removeItem('new');
}else{
    products = oldProducts;
}
var b = products.length;
showData(products);

function showData(product){
    // let productSection = document.getElementById("products");
    // var pr = localStorage.getItem("data");
    // products = JSON.parse(pr);
    var b1 = product.length;
    productSection.innerHTML = "";
    let container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('id','cont');
    productSection.appendChild(container);
    for(j = 0; j<b1; j++){
        let card = document.createElement('div');
        card.className = 'card';
        // let id = products[j*4+i].id;
        // card.setAttribute('id',id);
        container.appendChild(card);

        let image = document.createElement('img');
        image.className = 'image';
        image.alt = 'image';
        image.src = product[j].photo;
        card.appendChild(image);

        let name = document.createElement('h2');
        name.className = 'name';
        name.textContent = product[j].name;
        card.appendChild(name);

        let price = document.createElement('price');
        price.className = 'price';
        price.textContent = product[j].price;
        card.appendChild(price);

        let buy = document.createElement('button');
        buy.className = 'buy';
        buy.textContent = "Read more";
        let id = product[j].num;
        buy.setAttribute('id',id);
        card.appendChild(buy);

        let bin = document.createElement('i');
        bin.className = 'fa fa-trash-o';
        bin.setAttribute('id',id);
        bin.style = "font-size: 24;display: block; margin-top: 0.3rem;text-align: right";
        card.appendChild(bin);
    }
}


productSection.addEventListener('click', (event) => {
    
    const isBin = event.target.className === 'fa fa-trash-o';
    if(!isBin){
        return;
    }
    
    alert("alert");
    for(i = 0; i < b; i++){
        if(event.target.id == products[i].num){
            console.log("true");
            products.splice(i,1);
            break;
        }
    }

    localStorage.setItem('old',JSON.stringify(products));
    showData(products);
})

productSection.addEventListener('click', (event) => {
    const isButton = event.target.className === 'buy';
    if(!isButton){
        return;
    }
    for(i = 0; i<b; i++){
        if(event.target.id == products[i].num){
            console.log(typeof(products[i].num));
            localStorage.setItem('selectedid',JSON.stringify(products[i].num));
            location.href= 'detail.html';
        }
        
    }

})

