const form = document.getElementById('form');
const productName = document.getElementById('name');
const productPrice = document.getElementById('price');
const imageUrl = document.getElementById('url');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var nameValue = productName.value.trim();
    var priceValue = productPrice.value.trim();
    var urlValue = imageUrl.value.trim();

    if(nameValue === ''){
        setErrorFor(productName, 'name of product can not be empty');
    }else{
        setSuccessFor(productName);
    }

    if(priceValue === ''){
        setErrorFor(productPrice, 'price of product can not be empty');
    }else{
        setSuccessFor(productPrice);
    }

    if(urlValue === ''){
        setErrorFor(imageUrl, 'url of image can not be empty');
    }else{
        setSuccessFor(imageUrl);
    }

    if(nameValue !== '' & priceValue !== '' & urlValue !== ''){
        addProduct(nameValue,priceValue,urlValue);
        productName.value = '';
        productPrice.value = '';
        imageUrl.value = '';
    }
}

function setErrorFor(input , message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function addProduct(product,price,url){
    var allProducts = new Array();
    allProducts.push({
        id: allProducts.length + 13,
        "name": product,
        detail: "جزئیات محصول",
        price: price,
        photo: url
    });
    console.log(allProducts);
    localStorage.setItem('new',JSON.stringify(allProducts));
    const a = localStorage.getItem('new');
    allProducts = JSON.parse(a); 
    // var id = allProducts.length + 13;
    
    // const newProduct = {id,product,detail: "جزئیات محصول",price,url};
    
    // localStorage.setItem('new',JSON.stringify(allProducts));
    location.href = "products.html";
}