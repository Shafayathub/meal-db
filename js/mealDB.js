const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  //   console.log(searchText);
  searchField.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySearchResults(data.meals));
};
const displaySearchResults = (meals) => {
  const searchResult = document.getElementById('search-result');
  meals.forEach((meal) => {
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}
                    </p>
                </div>
                <div class="card-footer">
                   <small class="text-muted">
                      <a target=_blank href="${meal.strYoutube}" class="btn btn-primary stretched-link">Watch it over Youtube</a>
                   </small>
                </div>
            </div>
    `;
    searchResult.appendChild(div);
  });
};
