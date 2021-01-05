import { Provider } from 'react-redux';
import './App.css';
import RouteSetup from './routes';
import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <RouteSetup></RouteSetup>
    </Provider>
  );
}

export default App;
