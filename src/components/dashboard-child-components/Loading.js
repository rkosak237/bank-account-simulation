import * as React from 'react';
import Loader from 'react-loader-spinner'

export default ({ classes }) => (
  <div className={classes}>
    <Loader
      type="Oval"
      color="#34495e"
      height="100"
      width="100"
    />
  </div>
);
