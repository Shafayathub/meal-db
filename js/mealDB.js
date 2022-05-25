const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear search box
  searchField.value = '';
  if (searchText == '') {
    alert('Please enter text to search');
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // load data
    fetch(url)
      .then((response) => response.json())
      .then((data) => displaySearchResults(data.meals));
  }
};
const displaySearchResults = (meals) => {
  console.log(meals);
  const searchResult = document.getElementById('search-result');
  // clear loaded content
  searchResult.textContent = '';
  if (meals == null) {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card">
        <div class="card-header">
          Quote
        </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>We don't have such food, please search another item or stay hungry.</p>
            <footer class="blockquote-footer">Another Eater <cite title="Source Title">MD shafayat Islam</cite></footer>
            </blockquote>
          </div>
          <div class="card-footer">
                   <small class="text-muted">
                      <a target=_blank href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/" class="btn btn-warning stretched-link">Meet the eater</a>
                   </small>
          </div>
      </div>`;
    searchResult.appendChild(div);
  } else {
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
                      <a target=_blank href="${meal.strYoutube}" class="btn btn-warning stretched-link">Watch it over Youtube</a>
                   </small>
                </div>
            </div>
      `;
      searchResult.appendChild(div);
    });
  }
};
