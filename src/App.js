import * as React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'
import store from './store/configureStore';


// const App = () => (
//       <div>
//         <AppRouter />
//       </div>
// );

const App = () => (
        <Provider store={store}>
                <AppRouter />
        </Provider>
);
setTimeout(() => {
        console.log(store.getState());
}, 5000);

export default App;