async function getProducts() {
    // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
    let response = await fetch("store.json");
    // Очікуємо на отримання та розпакування JSON-даних з відповіді
    let products = await response.json();
  
    // Повертаємо отримані продукти
    return products;
  }
  
  function card_html(product) {
    return `
      <div>
          <img src="${product.image}">
          <div>
              <h4>${product.title}</h4>
              <p>${product.description}</p>
              <p>${product.price}</p>
              <a href="">Buy</a>
          </div>
      </div>
      `;
  }
  
  getProducts().then(function (products) {
    let products_list = document.querySelector(".products-list");
    if (products_list) {
      products.forEach(function (product) {
        products_list.innerHTML += card_html(product);
      });
    }
  });