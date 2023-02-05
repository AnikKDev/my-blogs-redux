import "animate.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import router from "./router/router";

function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
