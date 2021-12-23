const image ="data:image/jpeg;base64,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"

const recipeData =  [
        {
            "id": 1,
            "name": "Smokey Shim",
            "image": 'https://cdn.diffords.com/contrib/encyclopedia/2021/08/61150a6456e5e.jpg',
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "orange peel"
         },
         {
            "id": 2,
            "name": "Tequila Old Fashioned",
            "image": image,
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "none"
         },
         {
            "id": 3,
            "name": "Mezcal Negroni",
            "image": image,
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "lemon wedge"
         },
         {
            "id": 4,
            "name": "Negroni",
            "image": image,
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "none"
         },
         {
            "id": 5,
            "name": "Rum Eggnog",
            "image": image,
            "ingredients" : ["1 oz Mezcal", "1 oz Aperol", "1 oz Sweet Vermouth"],
            "instructions": ["Combine with ice", "Shake for 15 seconds", "Pour over ice"],
            "garnish": "cherry"
         },
    ]


export default recipeData;