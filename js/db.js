//Since JS are not allowed to read local files directly, I have to convert json blob to an js script and bind it via html to execution env

const products = [
    {
        "id": 0,
        "title": "Овсяная каша с фруктами",
        "thumbnail": "i/im1.jpg",
        "attributes": {
            "price": 25,
            "category": 1
        } 
    },
    {
        "id": 1,
        "title": "Яичница глазунья с овощами на сковородке",
        "thumbnail": "i/im2.jpg",
        "attributes": {
            "price": 25,
            "category": 1
        } 
    },
    {
        "id": 2,
        "title": "Сет азербайджанский завтрак",
        "thumbnail": "i/im3.jpg",
        "attributes": {
            "price": 30,
            "category": 1
        } 
    },
    {
        "id": 3,
        "title": "Яичница с помидорами по-бакински",
        "thumbnail": "i/im4.jpg",
        "attributes": {
            "price": 45,
            "category": 1
        } 
    },
    {
        "id": 4,
        "title": "Сырники со сметаной",
        "thumbnail": "i/im5.jpg",
        "attributes": {
            "price": 45,
            "category": 2
        } 
    },
    {
        "id": 5,
        "title": "Шпинатный крем-суп",
        "thumbnail": "i/im6.jpg",
        "attributes": {
            "price": 50,
            "category": 2
        } 
    },
    {
        "id": 6,
        "title": "Суп Пити",
        "thumbnail": "i/im7.jpg",
        "attributes": {
            "price": 85,
            "category": 2
        } 
    },
    {
        "id": 7,
        "title": "Борщ украинский",
        "thumbnail": "i/im8.jpg",
        "attributes": {
            "price": 95,
            "category": 2
        } 
    },
    {
        "id": 8,
        "title": "Суп Кюфта Бозбаш",
        "thumbnail": "i/im9.jpg",
        "attributes": {
            "price": 100,
            "category": 3
        } 
    },
    {
        "id": 9,
        "title": "Картофель фри",
        "thumbnail": "i/im10.jpg",
        "attributes": {
            "price": 125,
            "category": 3
        } 
    },
    {
        "id": 10,
        "title": "Картофель по-домашнему",
        "thumbnail": "i/im11.jpg",
        "attributes": {
            "price": 135,
            "category": 3
        } 
    },
    {
        "id": 11,
        "title": "Рис с овощами",
        "thumbnail": "i/im12.jpg",
        "attributes": {
            "price": 150,
            "category": 3
        } 
    }
]

const categories = {
    0 : "Все",
    1 : "Завтрак",
    2 : "Первые блюда",
    3 : "Гарниры"
}

const filterOptions = {
    0 : "Все",
    30 : "До 30 грн",
    50 : "До 50 грн",
    100 : "До 100 грн",
    150 : "До 150 грн"
}