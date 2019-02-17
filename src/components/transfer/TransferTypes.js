import * as React from 'react';
import {
    Company,
    Tax,
    User,
    Insurence,
    Smartphone,
    Charity
} from '../../assets/svgInTag/svg';

class TransferTypes extends React.Component {

  render() {
      const iconStyle = 'transfer-types__icon';
  return (
    <section className="transfer-types__container">
        <div className="transfer-types__single-type">
            <User
            classes={`${iconStyle} ${iconStyle}--person`}/>
            <h3>Person</h3>
        </div>
        <div className="transfer-types__single-type transfer-types--company">
            <Company
            classes={`${iconStyle} ${iconStyle}--company`}/>
            <h3>Company</h3>
        </div>
        <div className="transfer-types__single-type transfer-types--phone">
            <Smartphone
            classes={`${iconStyle} ${iconStyle}--phone`}/>
            <h3>Phone</h3>
        </div>
        <div className="transfer-types__single-type transfer-types--insurence">
            <Insurence
            classes={`${iconStyle} ${iconStyle}--insurence`}/>
            <h3>ZUS</h3>
        </div>
        <div className="transfer-types__single-type transfer-types--tax">
            <Tax
            classes={`${iconStyle} ${iconStyle}--tax`}/>
            <h3>US</h3>
        </div>
        <div className="transfer-types__single-type transfer-types--charity">
            <Charity
            classes={`${iconStyle} ${iconStyle}--charity`}/>
            <h3>Charity</h3>
        </div>
    </section>
    );
  }
}

export default TransferTypes;