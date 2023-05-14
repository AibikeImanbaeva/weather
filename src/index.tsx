import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.scss'
import { ThemeProvider } from './provider/ThemeProvider';
import { Provider } from 'react-redux';
import { store ,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<BrowserRouter>
    <ThemeProvider>

    <App />
    </ThemeProvider>
    </BrowserRouter>

</PersistGate>
    
    </Provider>
  </React.StrictMode>
);

