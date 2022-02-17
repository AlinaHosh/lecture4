fetch('https://fakestoreapi.com/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.sort(comparing);
  });

function comparing(element1, element2){
  return element1.category.localeCompare(element2.category) || element2.price - element1.price;
}

