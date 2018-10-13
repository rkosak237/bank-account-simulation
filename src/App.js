import * as React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import Dashboard from './view/Dashboard';
import History from './view/History';
import Header from './components/Header';

// const App = () => (
//       <div>
//         <AppRouter />
//       </div>
// );

const App = () => (
        <div>
                <Header/>
                <History />
        </div>
);

export default App;