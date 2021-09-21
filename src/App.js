import React, { useEffect } from 'react'
import store from './redux/Store'
import { Provider, useDispatch } from "react-redux"
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

/* Home */
import Footer from "./components/Home/footer";
import Header from "./components/Home/header";
import Home_SingleImage from "./components/Home//Home_SingleImage";
import Login from './components/Home/Auth/login'
import Register from './components/Home/Auth/register';
import Forget_password from './components/Home/Auth/forget_password';
import VerifyEmail from './components/Home/Auth/verify_email';

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

/* Hotels */
import All_hotels_grid from "./components/Hotel/All_Hotels/all_hotels_grid";
import All_hotels_list from "./components/Hotel/All_Hotels/all_hotels_list";
import All_hotels_map_listing from "./components/Hotel/All_Hotels/all_hotels_map_listing";
import Cart_hotel from "./components/Hotel/Hotel_Booking/cart_hotel";
import Confirmation_hotel from "./components/Hotel/Hotel_Booking/confirmation_hotel";
import Payment_hotel from "./components/Hotel/Hotel_Booking/payment_hotel";
import Single_hotel from "./components/Hotel/Single_Hotel/single_hotel";
import Single_hotel_contact from "./components/Hotel/Single_Hotel/single_hotel_contact";
import Single_hotel_datepicker_adv from "./components/Hotel/Single_Hotel/single_hotel_datepicker_adv";
import Single_hotel_datepicker_v2 from "./components/Hotel/Single_Hotel/single_hotel_datepicker_v2";
import Single_hotel_working_booking from "./components/Hotel/Single_Hotel/single_hotel_working_booking";

/* Transfer */
import All_transfer_grid from "./components/Transfer/All_Transfer/all_transfer_grid";
import All_transfer_list from "./components/Transfer/All_Transfer/all_transfer_list";
import Single_transfer from "./components/Transfer/Single_Transfer/single_transfer";
import Single_transfer_datepicker_v2 from "./components/Transfer/Single_Transfer/single_transfer_datepicker_v2";
import Cart_transfer from "./components/Transfer/Transfer_Booking/cart_transfer";
import Confirmation_transfer from "./components/Transfer/Transfer_Booking/confirmation_transfer";
import Payment_transfer from "./components/Transfer/Transfer_Booking/payment_transfer";

/* Restaurants */
import All_restaurants_grid from './components/Restaurants/All Restaurants/all_restaurants_grid'
import All_restaurants_list from './components/Restaurants/All Restaurants/all_restaurants_list'
import All_restaurants_map_listing from './components/Restaurants/All Restaurants/all_restaurants_map_listing'
import Single_restaurant from './components/Restaurants/Single Restaurant/single_restuarant'
import Single_restaurant_datepicker_v2 from './components/Restaurants/Single Restaurant/single_restaurant_datepicker_v2'
import Booking_restaurant from './components/Restaurants/Booking/booking_restaurant'
import Confirm_transfer from './components/Restaurants/Booking/confirm_transfer'

/* Admin */
import Profile from './components/Admin/Profile/profile'

/* 404 Page */
import Page_404 from './components/Others/404';
import Bookings from './components/Admin/Bookings/bookings';


function App() {

  // store.subscribe(
  //   userState = store.getState(),
  //   console.log('userState', userState)
  //   )
  // console.log('getState',store.getState())

  // let dispatch = useDispatch()
  // const user = useSelector(state => state.auth.user)
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged( async (user) => {
  //     if(user) {
  //       const tokenID = await user.getIdTokenResult()
  //       console.log("user --> ",user)
  //       console.log("token --> ",tokenID)

  //       console.log('email',user.email, 'token', tokenID.token, 'name', user.displayName)
  //       dispatch({
  //         type: 'LOGIN_USER',
  //         payload: {
  //           email: user.email,
  //           token: tokenID.token,
  //           name: user.displayName
  //         }
  //       })
  //     }
  //   })

  //   return () => unsubscribe() 

  // }, [])


  return (
    <div className="App">
    <Provider store={store}>

      <BrowserRouter>
      <Header />

      <Switch>
        { /* Home Routes */ }
        <Route exact path="/" component={Home_SingleImage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget_password" component={Forget_password} />
        <Route exact path="/verifyEmail" component={VerifyEmail} />


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

        { /* Hotel Routes */ }
        <Route exact path="/all_hotels_grid" component={All_hotels_grid} />
        <Route exact path="/all_hotels_list" component={All_hotels_list} />
        <Route exact path="/all_hotels_map_listing" component={All_hotels_map_listing} />
        <Route exact path="/cart_hotel" component={Cart_hotel} />
        <Route exact path="/confirmation_hotel" component={Confirmation_hotel} />
        <Route exact path="/payment_hotel" component={Payment_hotel} />
        <Route exact path="/single_hotel" component={Single_hotel} />
        <Route exact path="/single_hotel_contact" component={Single_hotel_contact} />
        <Route exact path="/single_hotel_datepicker_adv" component={Single_hotel_datepicker_adv} />
        <Route exact path="/single_hotel_working_booking" component={Single_hotel_working_booking} />
        <Route exact path="/single_hotel_datepicker_v2" component={Single_hotel_datepicker_v2} />

        { /* Transfer Routes */ }
        <Route exact path="/all_transfer_grid" compnent={All_transfer_grid} />
        <Route exact path="/all_transfer_list" component={All_transfer_list} />
        <Route exact path="/single_transfer" component={Single_transfer} />
        <Route exact path="/single_transfer_datepicker" component={Single_transfer_datepicker_v2} />
        <Route exact path="/cart_transfer" component={Cart_transfer} />
        <Route exact path="/confirmation_transfer" component={Confirmation_transfer} />
        <Route exact path="/payment_transfer" component={Payment_transfer} />

        { /* Admin Routes */ }
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/bookings" component={Bookings} />



        { /* 404 Page */ }
        <Route exact path='*' component={Page_404}/>

      </Switch>
      <Footer />
    </BrowserRouter>
    </Provider>
    <ToastContainer />
    </div>
  );
}

export default App;
