let data = [
    {
        id: 1,
        image: 'http://www.telegraph.co.uk/content/dam/food-and-drink/2017/01/04/coffeeS006G8_wwwAlamycom_Heart-shaped-coffee-art-on-a-latte_trans_NvBQzQNjv4BqEDjTm7JpzhSGR1_8ApEWQA1vLvhkMtVb21dMmpQBfEs.jpg?imwidth=450',
        name: 'Cafe Tostado',
        price: '30.45',
        stock: 10
    },
    {
        id: 2,
        image: 'https://www.comedera.com/wp-content/uploads/2016/10/sopa-de-fideos.jpg',
        name: 'Fideos',
        price: '12.45',
        stock: 45
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5b4rTPOysoqAPv-9k_lQ3D4dPwOHh_JX2KRQV_oV0uhjazcEPw',
        name: 'sopa de fideos',
        price: '56.45',
        stock: 66
    },
    {
        id: 4,
        image: 'http://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg',
        name: 'salsa roja',
        price: '30.00',
        stock: 45
    },
    {
        id: 5,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/cb/46/ca/camaroes-potiguar.jpg',
        name: 'Camarones',
        price: '10.00',
        stock: 34
    },
    {
        id: 6,
        image: 'http://menuperu.pe.s3.amazonaws.com/media/receta/Alb%C3%B3ndigas+de+acelga+y+soya+con+fideos-2464.jpeg',
        name: 'Soya en fideos',
        price: '11.25',
        stock: 16
    },
    {
        id: 7,
        image: 'https://www.comedera.com/wp-content/uploads/2016/10/sopa-de-fideos.jpg',
        name: 'Macarrones',
        price: '8.25',
        stock: 6
    },
    {
        id: 8,
        image: 'http://elestimulo.com/bienmesabe/wp-content/uploads/sites/7/2015/06/fideos-soya-frutos-del-mar-victor-moreno-bms.jpg',
        name: 'Caballa al atun',
        price: '43.66',
        stock: 44
    },
    {
        id: 9,
        image: 'https://estaticos.muyinteresante.es/media/cache/680x_thumb/uploads/images/gallery/5548e20741444aef0ed38eb0/slide-comida-animo.jpg',
        name: 'Cereales con leche',
        price: '30.00',
        stock: 11
    },
    {
        id: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmTbgQX42d6vJf7gZVdhW355wTGzcOc8CHylaTcedbgxK2Zhi',
        name: 'Lechuga fresca 1Kg',
        price: '09.44',
        stock: 34
    },
    {
        id: 11,
        image: 'http://static.azteca.com/crop/crop.php?width=570&img=http://static.azteca.com/imagenes/2012/42/%C3%91oquis-de-papa-con-salsa-de-chipotle-1702227.jpg',
        name: 'Papa con salsa blanca',
        price: '15.25',
        stock: 46
    }
]

var express = require('express');
var app = express();

function allowCrossTokenHeader (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
    next()
}


app.use(allowCrossTokenHeader)

app.get('/', function (req, res) {
  res.status(200).json({
    items: data
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
