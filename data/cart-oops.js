function Cart(localStorageName){
   const cart={
    cartItems:undefined,
    loadFromStorage(){
        this.cartItems=JSON.parse(localStorage.getItem(localStorageName));

        if(!this.cartItems){
            this.cartItems=[{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:2,
                deliveryOption:'1'
            },
            {
                productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity:1,
                deliveryOption:'2'
            }
        ];

        }

    },
    saveToStorage(){
        localStorage.setItem(localStorageName,JSON.stringify(this.cartItems));

    },
    addToCart(productId){
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{
            this.push({
                productId:productId,
                quantity:1,
                deliveryOption:'1'
            });
        }
        this.saveToStorage();


    },
    removeFromCart(productId){
        const newCart=[];
        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId!==productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems==newCart;
        this.saveToStorage();

    },
    updateDeliveryOption(productId,deliveryOptionId){
        let  matchingItem;
        this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productItem){
                matchingItem=cartItem;
            }
        });
        matchingItem.deliveryOption=deliveryOptionId;
        this.saveToStorage();
    }


    };
    return cart; 
}
const cart=Cart('cart-oop');

cart.loadFromStorage();
// cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
// console.log(cart);

const businessCart=Cart('cart-business');
businessCart.loadFromStorage();