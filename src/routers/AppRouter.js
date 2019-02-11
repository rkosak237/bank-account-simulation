import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from '../view/LandingPage';
import Desktop from '../view/Desktop';
import LogInPage from "../view/LogInPage";
import History from '../view/History';
import Transfer from '../view/Transfer';
import Calendar from '../view/Calendar';
import RegiesterPage from '../view/RegiesterPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Switch location={location}>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/login" exact={true} component={LogInPage} />
        <Route path="/regiester" exact={true} component={RegiesterPage} />
        <Route path="/desktop" exact={true} component={Desktop} />
        <Route path="/history" exact={true} component={History} />
        <Route path="/calendar" exact={true} component={Calendar} />
        <Route path="/transfer" exact={true} component={Transfer} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;


// import * as React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Header from '../components/global/Header';
// import Desktop from '../view/Desktop';
// import History from '../view/History';
// import Transfer from '../view/Transfer';

// const AppRouter = () => (
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Route render={({location}) => (
//             <TransitionGroup>
//                 <CSSTransition
//                     key={location.key}
//                     timeout={1000}
//                     classNames="fade">
//                     <Switch location={location}>
//                         <Route path="/" exact={true} component={Desktop} />
//                         <Route path="/history" exact={true} component={History} />
//                         <Route path="/transfer" exact={true} component={Transfer} />
//                     </Switch>
//                 </CSSTransition>
//             </TransitionGroup>
//             )}
//             />
//         </div>
//     </BrowserRouter>
// )
// export default AppRouter;