import {CurrencyAttributes} from './currency-attributes.model'

export class Currency {
    id :string;
    attributes:CurrencyAttributes;
    constructor(currencyInfo?:any){
        this.id = currencyInfo && currencyInfo.id || null;
        this.attributes = new CurrencyAttributes( currencyInfo &&  currencyInfo.attributes  || null);
    }
}