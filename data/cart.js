
//normalizing  the data/e-duplicating
export let cart=JSON.parse(localStorage.getItem('cart')) || [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryId:'1'
    
},
{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryId:'2'
}

];
export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId){
    let matchingItem;
        cart.forEach((items)=>{
            if(productId===items.productId){
                matchingItem=items;
            }
        })
        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{
            cart.push({
                productId:productId,
                quantity:1,
                deliveryId:'1'
            });
        } 
        saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItems)=>{
        if(cartItems.productId!=productId){
            newCart.push(cartItems);
        }
    });
    cart=newCart
    saveToStorage();
}