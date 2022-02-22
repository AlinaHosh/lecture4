async function sortingData(){
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
  
    const sorted = await json.sort(comparing);
  
    return sorted;
    
  }catch(err){
    alert(err);
  }
}
  
function comparing(element1, element2){
      
  return element1.category.localeCompare(element2.category) || element2.price - element1.price;
}
