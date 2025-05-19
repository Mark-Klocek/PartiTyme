document.querySelector('button').addEventListener('click',drinkName)

function drinkName(){
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('p').innerText = data.drinks[0].strInstructions
        let i = 1
        
        while (data.drinks[0][`strIngredient${i}`] !== null){
        document.querySelector('ul').innerHTML += `<li>${data.drinks[0][`strIngredient${i}`]}: ${data.drinks[0][`strMeasure${i}`]}</li>`
        i++
        }
        
        
    console.log(data.drinks[0])
    console.log(data.drinks[0][`strIngredient${i}`])
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
