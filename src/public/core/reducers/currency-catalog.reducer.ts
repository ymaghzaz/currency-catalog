import { Action } from '@ngrx/store';
import { Currency } from 'src/public/common/models/currency.model';

export enum CurrencyCatalogActionTypes {
    INIT_CURRENCIES_DATA = '[CurrencyCatalog] Init Currencies Data',
    UPDATE_PAGE_SIZE = '[CurrencyCatalog] Update Page Size',
    UPDATE_SELECTED_PAGE = '[CurrencyCatalog] Update  Selected Page',
}

export class ActionInitCurrencyCatalog implements Action {
    readonly type = CurrencyCatalogActionTypes.INIT_CURRENCIES_DATA;
    constructor(public payload: any) { }
}

export class ActionUpdatePageSize implements Action {
    readonly type = CurrencyCatalogActionTypes.UPDATE_PAGE_SIZE;
    constructor(public payload: any) { }
}

export class ActionUpdateSelectedPage implements Action {
    readonly type = CurrencyCatalogActionTypes.UPDATE_SELECTED_PAGE;
    constructor(public payload: any) { }
}

export type CurrencyActions = ActionInitCurrencyCatalog | ActionUpdatePageSize |ActionUpdateSelectedPage;

export const initialState = {
    selectedPage:1,
    pageSize:10,
    data:[],
    links:[],
    meta:{}
}

export const selectorPageSize = state => state.pageSize;
export const selectorSelectedPage = state => state.selectedPage;
export const SelectorCurrenciesData = state => state.data;
export function CurrencyCatalogReducer(state = initialState, action: CurrencyActions) {
    switch (action.type) {
        case CurrencyCatalogActionTypes.INIT_CURRENCIES_DATA:
            let currencies :Currency[] = [];
            let currenciesData=  action.payload &&  action.payload.data || [];
            currenciesData.map(currencyInfo=>{
                currencies.push(new Currency(currencyInfo))
            })
            action.payload.data = currencies;
            return Object.assign({ }, state, {
                ...action.payload
            });
        case CurrencyCatalogActionTypes.UPDATE_PAGE_SIZE:
            console.log('UPDATE_PAGE_SIZE')
            return Object.assign({}, state, {
                ...action.payload
            });
        case CurrencyCatalogActionTypes.UPDATE_SELECTED_PAGE:
            console.log('UPDATE_SELECTED_PAGE')
            return Object.assign({}, state, {
                ...action.payload
            });
        default:
            return state;
    }
}