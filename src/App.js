import React from 'react'
import store from './redux/Store'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Home */
import Footer from "./components/Home/footer";
import Header from "./components/Home/header";
import Home1 from "./components/Home//Home1";
import Home2 from "./components/Home//Home2_with_only_tours";
import Home_SingleImage from "./components/Home//Home_SingleImage";
import RevSlider from "./components/Home//RevSlider";
import Login from './components/Home/login'

/* Tours */
import All_tours_grid from './components/Tours/All Tours/all_tours_grid' 
import All_tours_list from './components/Tours/All Tours/all_tours_list' 
import All_tours_map_listing from './components/Tours/All Tours/all_tours_map_listing'
import Single_tour from './components/Tours/Single Tour/single_tour_page'
import Single_tour_gallary from './components/Tours/Single Tour/single_tour_gallary'
import Single_tour_working_booking from './components/Tours/Single Tour/single_tour_working_booking'
import Single_tour_datepicker from './components/Tours/Single Tour/single_tour_datepicker'
import Single_tour_cart from './components/Tours/Single Tour/single_tour_cart'
import Single_tour_booking from './components/Tours/Single Tour/single_tour_booking'
import Single_tour_fixed_sidebar from './components/Tours/Single Tour/sidebar/single_tour_fixed_sidebar'
import Single_tour_fixed_sidebar_2 from './components/Tours/Single Tour/sidebar/single_tour_fixed_sidebar_2'
import Cart_fixed_sidebar from './components/Tours/Single Tour/sidebar/cart_fixed_sidebar'
import Payment_fixed_sidebar from './components/Tours/Single Tour/sidebar/payment_fixed_sidebar'
import Confirmation_fixed_sidebar from './components/Tours/Single Tour/sidebar/confirmation_fixed_sidebar'

/* Restaurants */
import All_restaurants_grid from './components/Restaurants/All Restaurants/all_restaurants_grid'
import All_restaurants_list from './components/Restaurants/All Restaurants/all_restaurants_list'
import All_restaurants_map_listing from './components/Restaurants/All Restaurants/all_restaurants_map_listing'
import Single_restaurant from './components/Restaurants/Single Restaurant/single_restuarant'
import Single_restaurant_datepicker_v2 from './components/Restaurants/Single Restaurant/single_restaurant_datepicker_v2'
import Booking_restaurant from './components/Restaurants/Booking/booking_restaurant'
import Confirm_transfer from './components/Restaurants/Booking/confirm_transfer'

/* 404 Page */
import Page_404 from './components/Others/404';


function App() {
  return (
    <div className="App">
    <Provider store={store}>

      <BrowserRouter>
      <Header style={{margingBottom: '30px'}}/>

      <Switch>
        { /* Home Routes */ }
        <Route exact path="/" component={Home_SingleImage} />
        <Route exact path="/login" component={Login} />

        { /* Tours Routes */ }
        <Route exact path="/all_tours_grid" component={All_tours_grid} />
        <Route exact path="/all_tours_list" component={All_tours_list} />
        <Route exact path="/all_tours_map_listing" component={All_tours_map_listing} />
        <Route exact path="/single_tour" component={Single_tour} />
        <Route exact path="/single_tour_gallary" component={Single_tour_gallary} />
        <Route exact path="/single_tour_working_booking" component={Single_tour_working_booking} />
        <Route exact path="/single_tour_datepicker" component={Single_tour_datepicker} />
        <Route exact path="/single_tour_cart" component={Single_tour_cart} />
        <Route exact path="/single_tour_booking" component={Single_tour_booking} />
        <Route exact path="/single_tour_fixed_sidebar" component={Single_tour_fixed_sidebar} />
        <Route exact path="/single_tour_fixed_sidebar_2" component={Single_tour_fixed_sidebar_2} />
        <Route exact path="/cart_fixed_sidebar" component={Cart_fixed_sidebar} />
        <Route exact path="/payment_fixed_sidebar" component={Payment_fixed_sidebar} />
        <Route exact path="/confirmation_fixed_sidebar" component={Confirmation_fixed_sidebar} />

        { /* Restaurants Routes */ }
        <Route exact path="/all_restaurants_grid" component={All_restaurants_grid} />
        <Route exact path="/all_restaurants_list" component={All_restaurants_list} />
        <Route exact path="/all_restaurants_map_listing" component={All_restaurants_map_listing} />
        <Route exact path="/single_restaurant" component={Single_restaurant} />
        <Route exact path="/single_restaurant_datepicker_v2" component={Single_restaurant_datepicker_v2} />
        <Route exact path="/booking_restaurant" component={Booking_restaurant} />
        <Route exact path="/confirm_transfer" component={Confirm_transfer} />

        { /* 404 Page */ }
        <Route exact path='*' component={Page_404}/>

      </Switch>
    </BrowserRouter>
    <Footer />
    </Provider>
    </div>
  );
}

export default App;
