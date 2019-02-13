import * as React from 'react';
import { withRouter } from "react-router-dom";

class RegiesterPage extends React.Component {
constructor(props) {
  super(props);

   this.state = {}
}


  render() {

     return (
      <div className="main__container fade-in signUp">
        <section className="signUp__container">
         <h1>Regiester Page</h1>
        </section>
      </div>
    )
  }
}
export default withRouter(RegiesterPage);