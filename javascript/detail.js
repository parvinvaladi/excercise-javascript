let section = document.getElementById('selected');
var id = localStorage.getItem('selectedid');
console.log(typeof(id));
var products = new Array();
var pr = localStorage.getItem("old");
products = JSON.parse(pr);

let productImg = document.createElement('div');
productImg.className = 'product-image';
section.appendChild(productImg);

for(i = 0; i < products.length; i++){
    if(parseInt(id) === products[i].num){
        let image = document.createElement('img');
        image.className = 'image';
        image.alt = 'image';
        image.src = products[i].photo;
        productImg.appendChild(image);

        let productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        section.appendChild(productInfo);

        let title = document.createElement('h1');
        title.className = 'title';
        title.textContent = products[i].name;
        productInfo.appendChild(title);

        let detail = document.createElement('h3');
        detail.className = 'detail';
        detail.textContent = products[i].detail;
        productInfo.appendChild(detail);

        let price = document.createElement('h3');
        price.className = 'price';
        price.textContent = products[i].price;
        productInfo.appendChild(price);
    }
}

// let image = document.createElement('img');
// image.className = 'image';
// image.alt = 'image';
// image.src = products[parseInt(id)-1].photo;
// productImg.appendChild(image);

// let productInfo = document.createElement('div');
// productInfo.className = 'product-info';
// section.appendChild(productInfo);

// let title = document.createElement('h1');
// title.className = 'title';
// title.textContent = products[parseInt(id)-1].name;
// productInfo.appendChild(title);

// let detail = document.createElement('h3');
// detail.className = 'detail';
// detail.textContent = products[parseInt(id)-1].detail;
// productInfo.appendChild(detail);

// let price = document.createElement('h3');
// price.className = 'price';
// price.textContent = products[parseInt(id)-1].price;
// productInfo.appendChild(price);