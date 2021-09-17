const bucketContainer = document.getElementById('bucket');
const productContainer = document.getElementById('product');
const counterH = document.getElementById('counter');
const BUCKET_KEY = 'bucket';
const bucketProducts = JSON.parse(localStorage.getItem(BUCKET_KEY)) || [];
generateBucket();

html = ''

products.map((item, index) => {
    html +=
        `<a class="product__link" href="#">\n' +
    '                    <h3 class="product__title">\n' +
    '                        <span class="product__name">Перфоратор BOSCH</span>\n' +
    '                        <span class="product__model">${item.title}</span>\n' +
    '                    </h3>\n' +
    '                    <p class="product__img">\n' +
    '                        <img src="${item.img}" width="184" height="81" alt="Перфоратор BOSCH BFG 9000">\n' +
    '                    </p>\n' +
    '                </a>\n' +
    '                <p class="product__action">\n' +
    '                    <a id="bfg-9000" class="product__btn product__btn--add-cart" href="#" type="button" onclick="addClothes(${index})">Купить</a>\n' +
    '                    <a class="product__btn product__btn--add-bookmark" href="#">В закладки</a>\n' +
    '                </p>\n' +
    '                <s class="product__price product__price--old">3500 byn.</s>\n' +
    '                <span class="product__price product__price--actual">${item.price} byn.</span>`
})

function generateBucket() {
    let bucketHtml = ''
    let total = 0;
    let counter = 0;
    bucketProducts.forEach((item, index) => {
        total += item.price * item.count;
        bucketHtml += `<div class="column">
                        <div class="row">
                            <div class="product__btn--add-cart">
                            </div>
                            <div class="title-prod-bucket">
                                ${item.title}
                            </div>
                            <div class="row">
                                <button onclick="add(${index}, -1)" class="but-kol">-</button>
                                &nbsp ${item.count} &nbsp
                                <button onclick="add(${index}, 1)" class="but-kol">+</button>
                            </div>
                            <div class="cost"> ${item.price * item.count} р.</div>
                            <button onclick="deleteFromBucket(${index})" class="but-kol">x</button>
                        </div>
                    </div>`
        counter += item.count;
        counterH.classList.add('dBlock');
        counterH.innerText = counter;
    })

    if (bucketHtml === '') {
        bucketHtml = 'Корзина: 0';
    } else {
        bucketHtml += `<div class="sum"><p>Сумма: <span> ${total} </span> бел.руб.</p></div>`

    }
    bucketContainer.innerHTML = bucketHtml;
}

function add(clothesIndex, num) {
    const clothes = bucketProducts[clothesIndex];
    clothes.count = clothes.count + num;
    if (clothes.count === 0) {
        bucketProducts.splice(clothesIndex, 1);
        counterH.classList.remove('dBlock');
    }
    localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
    generateBucket();
}

function deleteFromBucket(bucketItemIndex) {
    bucketProducts.splice(bucketItemIndex, 1);
    localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
    counterH.classList.remove('dBlock');
    generateBucket();
}

function addClothes(clothesIndex) {
    const clothes = products[clothesIndex];
    const foundClothes = bucketProducts.find(item => item.title === clothes.title);
    if (foundClothes) {
        foundClothes.count++;
    } else {
        clothes.count = 1
        bucketProducts.push(clothes);
    }
    generateBucket();
    localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
}

productContainer.innerHTML = html;
