
// get product data

const getProduct = async () =>{
  try {
    const result = await fetch('./data/products.json');
    const data = await result.json();
    const products = data.products;
    return products;
} catch (error) {
    console.log(error)
  }
  

}


//load products
window.addEventListener('DOMContentLoaded', async () => {
  const products = await getProduct();
  displayProductItems(products);
  // console.log(products)
})
 


const categoryCenter = document.querySelector('.category__center')
//display products

const displayProductItems = (items) => {
  let displayProduct = items.map(product =>
    ` <div class="product category__product">
    <div class="product__header">
        <img src="${product.image}" alt="">
    </div>
    <div class="product__footer">
        <h3>${product.title}</h3>
        <div class="ratting">
            <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"> </use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"> </use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"> </use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"> </use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"> </use>
            </svg>
        </div>
        <div class="product__price">
            <h4>$${product.price}</h4>
            <a href="#">
                <button type="button" class="product__btn">Add to Card</button>
            </a>
        </div>
        <ul>
            <a href="#">
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-eye"> </use>
                </svg>
            </a>
            <a href="#">
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-heart-o"> </use>
                </svg>
            </a>
            <a href="#">
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-loop2"> </use>
                </svg>
            </a>
        </ul>
    </div>
</div>`
  )
  displayProduct = displayProduct.join('')
  if(categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
}

//filter category

const filterBtn = document.querySelector('.fillter-btn')
const categoryContainer = document.getElementById('category')

if(categoryContainer){
  categoryContainer.addEventListener('click', async(e) =>{
    const target = e.target.closest('.section__title')
    // console.log(target)
    if(!target) return;
    
    const id = target.dataset.id
    const products =await getProduct();
    if(id){ 
      Array.from(filterBtn).forEach(btn => {
        btn.classList.remove('active');
      })
      target.classList.add('active');

      // load product
      let menuCategory  =products.filter(product => {
        if(product.category ===id){ 
          // console.log(product)
          return product
        }})

        if(id === 'All Products'){
          displayProductItems(products)
        }else{
          displayProductItems(menuCategory)
        }
    }
  })
}