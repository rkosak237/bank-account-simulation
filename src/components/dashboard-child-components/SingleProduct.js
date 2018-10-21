import * as React from 'react';
// import { wallet, deposits, accounts, funds, bankLoans } from '../../assets/svgInTag/svg';
import {WalletIcon, DepositsIcon, AccountsIcon, FundsIcon, BankLoansIcon} from '../../assets/svgInTag/svg';

const SingleProduct = ({type, amount, currency}) => {
 const title = type;
    const switchFunc = (icon) => {
        const size = '90%';
        switch(icon) {
            case "Wallet":
                type =
                <WalletIcon
                size={size}/>
            break;
            case "Deposits":
                type =
                <DepositsIcon
                size={size}/>
            break;
            case "Accounts":
                type =
                <AccountsIcon
                size={size}/>
            break;
            case "Funds":
                type = <FundsIcon
                size={size}/>
            break;
            case "Bank loans":
                type = <BankLoansIcon
                size={size}/>
            break;
        default:
            type = "icon-default"
        }
    }
    return(
        <div className="products__single-product">
            <div className="single-product__icon">
               {switchFunc(type)}
               {type}
            </div>
            <div className="single-product__description">
                <p className="single-product__description__text">{title}</p>
                <p className="single-product__description__text">{amount} {currency}</p>
            </div>
        </div>
    )
}
export default SingleProduct;