export const cart=[];

export function addTOCart(productId){
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
                quantity:1
            });
        } 
}