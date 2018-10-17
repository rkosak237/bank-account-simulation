import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../components/Header';
import Desktop from '../view/Desktop';

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
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )}
            />
        </div>
    </BrowserRouter>
)
export default AppRouter;