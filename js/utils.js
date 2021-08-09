
const cartSummary = document.getElementById("cart-summary");
const itemsParent = document.getElementById("products-root");
const orderModal = document.getElementById("orderConfirmation")

function InstantiateItem(data, onClick){

    let item = document.createElement("div");
    item.className = "product-box__item";

    let title = document.createElement("h3");
    title.className = "product-box__title";
    title.innerText = data.title;

    let img = document.createElement("div");
    img.className = "product-box__img";

    let thumbnail = document.createElement("IMG");
    thumbnail.className = "img-fluid";
    thumbnail.src = data.thumbnail;

    img.append(thumbnail);

    let meta = document.createElement("div");
    meta.className = "product-box__meta";
    
    let price = document.createElement("p");
    price.innerText = `${data.attributes.price} грн.`;

    let qty = document.createElement("div");
    qty.className = "qty";

    let input = document.createElement("input");
    input.className = "qty__item";
    input.type = "number";
    input.min = 1;
    input.value = 1;

    let label = document.createElement("span")
    label.innerText = " Кол "

    qty.append(input);
    qty.appendChild(label);

    let button = document.createElement("button");
    button.className = "product-box__btn";
    button.innerText = "Добавить";

    button.addEventListener("click", function(event) {
        onClick(data.id, input.valueAsNumber);
    })

    meta.append(price);
    meta.append(qty)
    meta.append(button);

    item.append(title);
    item.append(img);
    item.append(meta);

    itemsParent.append(item);

    return item;
}

function UpdateCartInfo(count, sum){
    cartSummary.children[0].innerText = count;
    cartSummary.children[1].innerText = sum;
}

function IsEmpty(value)
{
    return !value || value.replace(/\s/g, "").indexOf(" ") != -1;
}