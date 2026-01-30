
export const deliveryOption=[{
    id:'1',
    deliveryDays:7,
    deliveryPriceCents:0

},
{
    id:'2',
    deliveryDays:3,
    deliveryPriceCents:499

},
{
    id:'3',
    deliveryDays:1,
    deliveryPriceCents:999

}];
export function  getDeliveryOption(deliveryId){
    let deliverySelection;
        deliveryOption.forEach((option)=>{
            if(deliveryId===option.id){
                deliverySelection=option;    
            }

        });
        return deliverySelection || deliveryOption[0];
    }