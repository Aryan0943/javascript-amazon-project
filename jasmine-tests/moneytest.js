import {formatCurrency}  from "../js/utilis/money.js";

describe('test suite:format currency',()=>{
    it('convert cents to dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works  with  zero',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('round up to nearest  cents',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
})
