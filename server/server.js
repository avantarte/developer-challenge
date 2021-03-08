const express = require('express')
var cors = require("cors")

const PORT = process.env.PORT || 3500
const app = express()

app.use(cors())
const data = {
    "works": [
        {
            "id": 1,
            "title": "Paul Insect",
            "tags": [
                "Sold out"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/TheReflection-Red_f4f48005-c954-43ad-afab-31ea7a49f9ef_500x.png?v=1610713168",
            "url": "https://shop.avantarte.com/products/the-reflection-red",
            "price": 3700.00
        },
        {
            "id": 2,
            "title": "Yue Minjun",
            "tags": [
                "Sold out"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/PRINT_1A_online_500x.jpg?v=1608632645",
            "url": "https://shop.avantarte.com/products/hibiscus-handfinished",
            "price": 7500.00
        },
        {
            "id": 3,
            "title": "Susumu Kamijo",
            "tags": [
                "Sold out"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/SUSUMU_02copy_4488d8f1-6536-49ef-a310-adec11d2213d_500x.jpg?v=1613558884",
            "url": "https://shop.avantarte.com/products/the-sinner-at-dusk-1",
            "price": 4000.00
        },
        {
            "id": 4,
            "title": "Lu Yang",
            "tags": [
                "Available"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/Misc_Image_Opt_x2_5bbdcff0-bb30-4920-b458-8ad0424be0bc_500x.png?v=1578932906",
            "url": "https://shop.avantarte.com/products/luyang-gong-tau-alien",
            "price": 2000.00
        },
        {
            "id": 5,
            "title": "Paul Insect",
            "tags": [
                "Sold out"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/PRINT_4A_online_afd0023e-5666-4fe7-ab97-58c0d183b98e_500x.jpg?v=1610713268",
            "url": "https://shop.avantarte.com/products/the-observer-1",
            "price": 650.00
        },
        {
            "id": 6,
            "title": "Elmgreen & Dragset",
            "tags": [
                "Coming soon",
                "Available"
            ],
            "image": "//cdn.shopify.com/s/files/1/0260/5524/5923/products/ELGREEN_DRAGSET_01_online_b7358648-4f6d-44a5-8e14-e5ce272f5dba_500x.jpg?v=1605101928",
            "url": "https://shop.avantarte.com/products/the-future-elmgreen-dragset",
            "price": 7500.00
        }
    ]
}

app.get('/works', (req, res) => {
    res.send(data.works)
})

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
)