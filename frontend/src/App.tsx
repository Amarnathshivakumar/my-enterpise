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
import { Provider } from "react-redux";
import Router from "./router";
import store from "./store";
import ThemeProvider from "@/components/containers/ThemeProvider";

// APP PROVIDER FOR REDUX STORE AND ROUTER
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
