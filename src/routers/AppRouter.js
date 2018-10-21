import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../components/Header';
import Desktop from '../view/Desktop';
import History from '../view/History';
import Transfer from '../view/Transfer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={200}
                    classNames="fade">
                    <Switch location={location}>
                        <Route path="/" exact={true} component={Desktop} />
                        <Route path="/History" exact={true} component={History} />
                        <Route path="/Transfer" exact={true} component={Transfer} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )}
            />
        </div>
    </BrowserRouter>
)
export default AppRouter;