var currentCategory = 0, currentFilter = 0;

var spawnedItems = [];
var shoppingCart = [];

var customerName = "", customerEmail = "";

function InstantiateProducts(){
    products.forEach(x => {
        let item = InstantiateItem(x, OnClickItem);
        item.id = x.id;
        spawnedItems.push(item);
    });
}

InstantiateProducts();

function AddItemToCart(itemId, count)
{
    let existingItem = shoppingCart.find(x => x.id == itemId);

    if(existingItem)
    {
        existingItem.count += 1;
    }
    else
    {
        let item = products[itemId];
        item.count = count;
        shoppingCart.push(item);
    }

    let totalCount = 0;
    let totalSum = 0;

    shoppingCart.forEach(x => {
        totalCount += x.count;
        totalSum += x.count * x.attributes.price;
    });

    UpdateCartInfo(totalCount, totalSum);
}

function OnClickItem(itemId, count)
{
    document.getElementById(itemId).getElementsByClassName("qty__item")[0].value = 1;

    AddItemToCart(itemId, count);
}

function UpdateItemTable(){
    spawnedItems.forEach(x => {
        let filtered = currentFilter == 0 | products[x.id].attributes.price <= currentFilter;

        if(filtered)
            filtered = currentCategory == 0 | products[x.id].attributes.category == currentCategory;
        
        x.style.visibility = filtered ? "visible" : "hidden";
    });
}

function OnCategory(value){
    currentCategory = value;
    UpdateItemTable();
}

function OnFilter(value){
    currentFilter = value;
    UpdateItemTable();

}

function Checkout(){
    SetActiveModalWindow(true);

    var span = document.getElementsByClassName("close")[0];
    span.onclick = () => SetActiveModalWindow(false);

    window.onclick = (event) => {
        if (event.target == orderModalWindow) {
            SetActiveModalWindow(false);
        }
    }

    ValidateCheckoutForm();
}

function OnName(value){

    document.getElementById("name").value = StripWhitespace(value);

    customerName = value;
    ValidateCheckoutForm();
}

function OnEmail(value){

    document.getElementById("email").value = StripWhitespace(value);

    customerEmail = value;
    ValidateCheckoutForm();
}

function ProceedOrder()
{
    if(IsEmpty(customerName) && IsEmpty(customerEmail)){
        alert("Введіть ваше ім'я та адресу електронної пошти");
    }else if(IsEmpty(customerName)){
        alert("Некоректне ім'я користувача. Перевірте ім'я та спробуйте ще раз");
    }else if(IsEmpty(customerEmail)){
        alert("Некоректний адрес електронної пошти. Перевірте адрес та спробуйте ще раз");
    }else{
        SendForm();
        Dispose();
        alert("Дякуємо за покупку!");
    }
}

function SendForm(){
    let form = {
        user: StripWhitespace(customerName),
        email: StripWhitespace(customerEmail),
        order: shoppingCart.map((item) => {
            return {itemId: item.id, count: item.count}
        })
    }

    console.log(form);
}

function Dispose(){
    SetActiveModalWindow(false);
    shoppingCart = [];
    UpdateCartInfo(0,0);

    spawnedItems.forEach(x =>{
        x.getElementsByClassName("qty__item")[0].value = 1;
    });
}
