import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../components/global/Header';
import Desktop from '../view/Desktop';
import SignUp from '../view/SignUp';
import History from '../view/History';
import Transfer from '../view/Transfer';

const AppRouter = () => (
    <BrowserRouter>
        <div className="router">
            <Switch location={location}>
                <Route path="/" exact={true} component={SignUp} />
                <Route path="/desktop" exact={true} component={Desktop} />
                <Route path="/history" exact={true} component={History} />
                <Route path="/transfer" exact={true} component={Transfer} />
            </Switch>
        </div>
    </BrowserRouter>
)
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