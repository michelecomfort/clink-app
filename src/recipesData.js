const smokeyShim = 'https://cdn.diffords.com/contrib/stock-images/2018/05/5af30cc19990e.jpg'
const tequilaOldFashioned = 'https://assets-prd-weg.unataops.com/web/recipe_header/1fea54287faa40bdbe059222e6b48824.jpg'
const ginNegroni = 'https://cdn.diffords.com/contrib/stock-images/2015/7/25/20153d9edca73fbc76ce9648f3e93498e916.jpg'
const espressoMartini = 'https://cdn3.foodviva.com/static-content/food-images/vodka-recipes/toasted-almond-drink/toasted-almond-drink-250.jpg'
const eggnogMartini = 'https://media.istockphoto.com/photos/homemade-traditional-christmas-eggnog-drinks-with-ground-nutmeg-and-picture-id1184730043?k=20&m=1184730043&s=612x612&w=0&h=IFu-DRKH-pk3ws4lbW8M-RdBHGVYDkj_NvsuqRAXnaM='
const spicyAppleCiderMargarita = 'https://i.pinimg.com/736x/dd/b8/32/ddb8329c49f7efd33283efc7704571bf--foxs-news-hot-apple-cider.jpg'
const classicMargarita = 'https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/12227/authentic-margarita.jpg?v=1&mode=crop&width=800&height=640&upscale=false'


const recipeData =  [
        {
            "id": 1,
            "name": "Smokey Shim",
            "image": smokeyShim,
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "orange peel"
         },
         {
            "id": 2,
            "name": "Tequila Old Fashioned",
            "image": tequilaOldFashioned,
            "ingredients" : ["3 oz Anejo Tequilla", ".25 - .5oz Agave", "2-3 shakes Orange Bitters", "2-3 shakes Angostura Bitters"],
            "instructions": ["Shake or stir over ice"],
            "garnish": "cherry"
         },
         {
            "id": 3,
            "name": "Traditional Negroni",
            "image": ginNegroni,
            "ingredients" : ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "none"
         },
         {
            "id": 4,
            "name": "Eggnog Martini",
            "image": eggnogMartini,
            "ingredients" : ["1.5 oz Vanilla Vodka", "1 oz Amarreto", "2 oz Eggnog"],
            "instructions": ["Combine with ice", "Shake for 25 seconds", "Strain out ice"],
            "garnish": "Pinch of nutmeg"
         },
         {
            "id": 5,
            "name": "Spicy Apple Cider Margarita",
            "image": spicyAppleCiderMargarita,
            "ingredients" : ["2 oz Tequila Resposada", "2 oz Apple Cider", ".75 oz Fresh Lime Juice", ".5 oz Agave"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "2 pinches cinnamon & 2 pinches cayenne pepper"
         },
         {
            "id": 6,
            "name": "Classic Margarita",
            "image": classicMargarita,
            "ingredients" : ["4 oz Tequilla Blanca", "1.5 oz Fresh Lime Juice", "2 oz Cointreau"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "lime wedge"
         },
         {
            "id": 7,
            "name": "Espresso Martini",
            "image": espressoMartini,
            "ingredients" : ["2 oz Espresso", "1 oz Vodka", "1 oz Kahlua"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Strain out ice"],
            "garnish": "none"
         },
      
    ]


export default recipeData;