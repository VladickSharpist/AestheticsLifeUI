import { Provider } from 'react-redux';
import { store } from './store';
import { Route, BrowserRouter } from 'react-router-dom';
import { AppLayout } from './Shared/components/layouts/AppLayout';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/:appName/:rest?' component={AppLayout} />
      </BrowserRouter>
    </Provider>
  );
}
