import Footer from "./components/footer";
import Header from "./components/header";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2_with_only_tours";
import Home3_with_header_video from "./components/Home3_with_header_video";
import Home4_with_search_panel from "./components/Home4_with_search_panel";
import Home5_with_map from "./components/Home5_with_map";
import Home_SingleImage from "./components/Home_SingleImage";
import Home_with_search_bar from "./components/Home_with_search_bar";
import RevSlider from "./components/RevSlider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home4_with_search_panel} />
            <Route exact path="/login" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
