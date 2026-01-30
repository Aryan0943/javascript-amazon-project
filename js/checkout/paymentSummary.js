import  {cart}  from "../../data/cart.js";
import { products } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryoption.js";
import {formatCurrency} from "../utilis/money.js"

export function renderPaymentSummary(){
    let totalItems=0;
    let  deliveryCharges=0;
    cart.forEach((cartItem)=>{
        let matchingItem;
        products.forEach((product)=>{
            if(cartItem.productId===product.id){
                matchingItem=product;
                totalItems+=(product.priceCents*cartItem.quantity);

                
            }
        });
        let deliveryOption=getDeliveryOption(cartItem.deliveryId);
        deliveryCharges+=deliveryOption.deliveryPriceCents;
        
        
        
    });
    const totalBeforeTax=totalItems+deliveryCharges;
    const tax=0.1*totalBeforeTax;
    const totalCents=totalBeforeTax+tax;
    const payment=`
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(totalItems)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryCharges)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
    document.querySelector(".js-payment-summary").innerHTML=payment;
}
