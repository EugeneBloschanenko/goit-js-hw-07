const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);

    const categoryElemCount = category.querySelectorAll('li').length;
    console.log(`Elements: ${categoryElemCount}`);
}) 