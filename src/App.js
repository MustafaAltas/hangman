import { Provider } from "react-redux";
import Main from "./page/Main";
import store from "./redux/store";
import "./scss/App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
