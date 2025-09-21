/**
 * =====================================================
 *  NAME    : App.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: CODE FOR REDUX JOINER WITH PROVIDE STORE, ROUTING FOR REACT
 * =====================================================
*/

// DEPENDENCIES
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import store from "./store";
import { Provider } from "react-redux";

// APP PROVIDER FOR REDUX STORE AND ROUTER
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
