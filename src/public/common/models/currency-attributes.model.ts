export class CurrencyAttributes {
    code:string;
    name:string;
    currency_type:string;
    code_iso_numeric3:string;
    code_iso_alpha3:string;
    symbol:any;
    native_symbol:string;
    category:string;
    constructor(currencyAttributesInfo?:any){
        this.code = currencyAttributesInfo && currencyAttributesInfo.code || null;
        this.name = currencyAttributesInfo && currencyAttributesInfo.name || null;
        this.currency_type = currencyAttributesInfo && currencyAttributesInfo.currency_type || null;
        this.code_iso_numeric3 = currencyAttributesInfo && currencyAttributesInfo.code_iso_numeric3 || null;
        this.code_iso_alpha3 = currencyAttributesInfo && currencyAttributesInfo.code_iso_alpha3 || null;
        this.symbol = currencyAttributesInfo && currencyAttributesInfo.symbol || null;
        this.native_symbol = currencyAttributesInfo && currencyAttributesInfo.native_symbol || null;
        this.category = currencyAttributesInfo && currencyAttributesInfo.category || null;
    }
}