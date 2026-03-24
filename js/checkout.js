import { renderOrderSummary } from "./checkout/orderSummary.js";
import  {renderPaymentSummary} from  "./checkout/paymentSummary.js";
import  {loadProducts,loadProductsFetch} from "../data/products.js";
// import '../data/cart-oops.js';
// import "../data/backend-practice.js"


Promise.all([
    loadProductsFetch()

]).then ((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});


// Promise.all([
//     new promise((resolve)=>{
//         loadProducts(()=>{
//             resolve();
//         })
//     })

// ]).then((values)=>{
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// new Promise((resolve)=>{
//  loadProducts(()=>{
//     resolve();
//  });
   
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });
