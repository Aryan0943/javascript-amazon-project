import {cart,removeFromCart,updateDeliveryOption}  from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utilis/money.js';//named export
import  dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';//default export
import {deliveryOption} from '../data/deliveryoption.js';
function renderOrderSummary(){
  let cartSummaryHTML='';
  console.log(products);
  console.log(cart);

  cart.forEach((cartItem)=>{
      const productId=cartItem.productId;
      
      let matchingProduct;

      let deliverySeletion;
      deliveryOption.forEach((option)=>{
          if(cartItem.deliveryId===option.id){
              deliverySeletion=option;    
          }
      })
      const today=dayjs();
      const deliveryDay=today.add(deliverySeletion.deliveryDays,'day');
      const displayDate=deliveryDay.format('dddd, MMMM D');
      
      

      products.forEach((product)=>{
          if(product.id===productId){
              matchingProduct=product;
              cartSummaryHTML+=
              `<div class="cart-item-container js-cart-item-container-${product.id}">
              <div class="delivery-date">
                Delivery date: ${displayDate}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${product.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${product.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(product.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${product.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionHTML(matchingProduct,cartItem)}
                  
                </div>
              </div>
            </div>`
          }
      })
      
  });

  function deliveryOptionHTML(matchingProduct,cartItem){
      let html='';
      deliveryOption.forEach((deliveryOptions)=>{
          const today=dayjs();
          const deliveryDate=today.add(deliveryOptions.deliveryDays,'days');
          const displayDate=deliveryDate.format('dddd,  MMMM D');
          const priceCents=formatCurrency(deliveryOptions.deliveryPriceCents)==0?'FREE':`$${formatCurrency(deliveryOptions.deliveryPriceCents)}`;

          const isChecked=deliveryOptions.id===cartItem.deliveryId;
          html+=
          `<div class="delivery-option js-delivery-option" data-delivery-id="${deliveryOptions.id}" data-product-id="${matchingProduct.id}">
              <input type="radio" ${isChecked?'checked':'' }            class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
              <div>
              <div class="delivery-option-date">
                  ${displayDate}
              </div>
              <div class="delivery-option-price">
                  ${priceCents} Shipping
              </div>
              </div>
          </div>`;

      })
      return html;
  }

  document.querySelector(".js-order-summary").innerHTML=cartSummaryHTML;

  document.querySelectorAll('.js-delete-link').forEach((link)=>{
      link.addEventListener('click',()=>{
          const  productId=link.dataset.productId;
          removeFromCart(productId);

          document.querySelector(`.js-cart-item-container-${productId}`).remove();
          
      })
  })

  document.querySelectorAll(".js-delivery-option").forEach((element)=>{
    element.addEventListener('click',()=>{
      const {deliveryId,productId}=element.dataset;
      updateDeliveryOption(productId,deliveryId);
      renderOrderSummary();
    })
  });

}
renderOrderSummary();