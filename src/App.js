import * as React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'
import store from './store/configureStore';


const App = () => (
        <Provider store={store}>
                <AppRouter />
        </Provider>
);
export default App;