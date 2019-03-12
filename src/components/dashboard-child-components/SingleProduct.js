import * as React from 'react';
import { WalletIcon,
    DepositsIcon,
    AccountsIcon,
    FundsIcon,
    BankLoansIcon } from '../../assets/svgInTag/svg';

const SingleProduct = ({type, amount, currency}) => {
 const title = type;
    const setIcon = (icon) => {
        const classes = 'single-product__icon';
        switch(icon) {
            case "Wallet":
                type =
                <WalletIcon
                classes={classes}/>
            break;
            case "Deposits":
                type =
                <DepositsIcon
                classes={classes}/>
            break;
            case "Accounts":
                type =
                <AccountsIcon
                classes={classes}/>
            break;
            case "Funds":
                type = <FundsIcon
                classes={classes}/>
            break;
            case "Bank loans":
                type = <BankLoansIcon
                classes={classes}/>
            break;
        default:
            type = "icon-default"
        }
    }
    return (
        <a className="products__single-product" href='#'>
            <div className="single-product__icon-container">
                {setIcon(type)}
               {type}
            </div>
            <div className="single-product__description">
                <p className="single-product__description__text">{title}</p>
                <p className="single-product__description__text">
                {amount} {currency}</p>
            </div>
        </a>
    )
}
export default SingleProduct;