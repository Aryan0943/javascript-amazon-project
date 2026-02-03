import { renderOrderSummary } from "../../js/checkout/orderSummary.js";
import { loadFromLocalStorage,cart } from "../../data/cart.js";
//integration test
describe('Test Suite:renderOrderSummary',()=>{
    beforeEach(()=>{//hook
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify(
                [{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:2,
                deliveryId:'1'
                
            },
            {
                productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity:1,
                deliveryId:'2'
            }
                        
            ])
        });
        loadFromLocalStorage();
        document.querySelector('.js-cart-container').innerHTML=`
        <div class="js-order-summary">
        </div>
        <div  class="js-payment-summary">
        </div>
        `
        renderOrderSummary();
    });

    afterEach(()=>{//hook
        document.querySelector('.js-cart-container').innerHTML=`
        `;
    })
    it('display the cart',()=>{
        
        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
        expect(document.querySelector('.js-product-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6').innerText).toContain('Quantity: 2');
        expect(document.querySelector('.js-product-quantity-15b6fc6f-327a-4ec4-896f-486349e85a3d').innerText).toContain('Quantity: 1');
        
        
    });


    it('Removes a  product',()=>{
        

        document.querySelector('.js-delete-link-e43638ce-6aa0-4b85-b27f-e1d07eb678c6').click();

        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
        expect(document.querySelector('.js-cart-item-container-e43638ce-6aa0-4b85-b27f-e1d07eb678c6')).toEqual(null);

        expect(document.querySelector('.js-cart-item-container-15b6fc6f-327a-4ec4-896f-486349e85a3d')).not.toEqual(null);

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        
    }
)

    
})
// hooks let us run code for each test