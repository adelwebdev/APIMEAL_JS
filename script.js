const searchInput = document.getElementById('searchInput')
const results = document.getElementById('results')
const randomMeal = document.getElementById('randomMeal')

let search = '';

const fetchSearch = async() => {
    meals = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=tomato')
        .
    then(res => res.json()).
    then(res => res.meals);
    console.log(meals);
} 

const searchDisplay = async() => {
    await fetchSearch();

    if (meals == null){
        results.innerHTML = `<span>Aucun resultats</span>`;
    } 
    results.innerHTML = (
        meals.map(meal => (   
          `
          <div class="searchContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>category : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' /></br>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
          `
        )).join('')
      );
}

searchInput.addEventListener('input', (e) => {
    search = e.target.value;
    searchDisplay();  
    console.log(search);
 
})

fetchSearch();