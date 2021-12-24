import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  HashRouter,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "tippy.js/dist/tippy.css";

/* Home */
import Footer from "./components/Home/footer";
import Header from "./components/Home/header";
import Home_SingleImage from "./components/Home//Home_SingleImage";
import Login from "./components/Home/Auth/login";
import Register from "./components/Home/Auth/register";
import Forget_password from "./components/Home/Auth/forget_password";
import VerifyEmail from "./components/Home/Auth/verify_email";
import Reset_password from "./components/Home/Auth/reset_password";

/* Tours */
import CreateTour from "./components/Admin/Tours/CreateTour";
import UpdateTour from "./components/Admin/Tours/UpdateTour";
import All_tours_grid from "./components/Tours/All Tours/all_tours_grid";
import All_tours_list from "./components/Tours/All Tours/all_tours_list";
import Single_tour from "./components/Tours/Single Tour/single_tour_page";

/* Hotels */
import CreateHotel from "./components/Hotel/Form/create_hotel";
import UpdateHotel from "./components/Hotel/Form/update_hotel";
import All_hotels_grid from "./components/Hotel/All_Hotels/all_hotels_grid";
import All_hotels_list from "./components/Hotel/All_Hotels/all_hotels_list";
import Single_hotel from "./components/Hotel/Single_Hotel/single_hotel";

/* Transfer */
import CreateTransport from "./components/Admin/Transport/Foam/create_transport";
import UpdateTransport from "./components/Admin/Transport/Foam/update_transport";
import All_transfer_grid from "./components/Admin/Transport/All_Transfer/all_transfer_grid";
import All_transfer_list from "./components/Admin/Transport/All_Transfer/all_transfer_list";
import Single_transfer from "./components/Admin/Transport/Single_Transfer/single_transfer";

/* Restaurants */
import CreateRestaurant from "./components/Admin/Restaurant/CreateRestaurant";
import UpdateRestaurant from "./components/Admin/Restaurant/UpdateRestaurant";
import All_restaurants_grid from "./components/Restaurants/All Restaurants/all_restaurants_grid";
import All_restaurants_list from "./components/Restaurants/All Restaurants/all_restaurants_list";

/* Plan */
import CreatePlan from "./components/Plan/form/CreatePlan";
import GetPlans from "./components/Plan/All_Plans/get_all_plan";
import Single_plan from "./components/Plan/single_plan.js/single_plan";
import Get_plan_by_name from "./components/Plan/single_plan.js/single_plan_by_name";
import All_plans_grid from "./components/Plan/All_Plans/all_plans_grid";
import UpdatePlan from "./components/Plan/form/UpdatePlan";

/* Admin */
import Profile from "./components/Admin/Profile/profile";
import CreateProfile from "./components/Admin/Profile/create_profile";
import AdminDashBoard from "./components/Admin/Dashboard/admin";
import Tours from "./components/Admin/Dashboard/tours";

/* Place */
import CreatePlace from "./components/Admin/Place/CreatePlace";
import UpdatePlace from "./components/Admin/Place/UpdatePlace";

/* Rooms */
import CreateRooms from "./components/Admin/Rooms/CreateRooms";
import UpdateRooms from "./components/Admin/Rooms/UpdateRooms";

/* Dishes */
import CreateDishes from "./components/Admin/Dishes/CreateDishes";
import UpdateDishes from "./components/Admin/Dishes/UpdateDishes";

/* 404 Page */
import Page_404 from "./components/Others/404";
import CreateBooking from "./components/Admin/Bookings/CreateBooking";
import Checkout from "./components/Payment/Checkout";
import Single_restuarant from "./components/Restaurants/Single Restaurant/single_restuarant";
import FinishBooking from "./components/Admin/Bookings/FinishBooking";
import BookingForm from "./components/Restaurants/Booking/BookingForm";
import UserDashboard from "./components/Admin/Dashboard/UserDashboard";
import HotelManagerDashboard from "./components/Admin/Dashboard/HotelManagerDashboard";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Posts from "./components/Post/posts";
import Create_post from "./components/Post/create_post";
import Timeline from "./components/Post/timeline";
import Update_post from "./components/Post/update_post";
import Postdetails from "./components/Post/postdetails";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;

  console.log("indexOfLastPage", indexOfLastPage, indexOfFirstPage);

  const history = useHistory();
  return (
    <div className="App">
      <HashRouter>
        <Header history={history} />

        <Switch>
          {/* Home Routes */}
          <Route exact path="/" component={Home_SingleImage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forget_password" component={Forget_password} />
          <Route exact path="/verifyEmail" component={VerifyEmail} />
          <Route exact path="/reset_password" component={Reset_password} />
          {/* Tours Routes */}
          <Route exact path="/create_tour" component={CreateTour} />
          <Route
            exact
            path="/update_tour/:id"
            component={UpdateTour}
            history={history}
          />

          <Route
            exact
            path="/all_tours_grid"
            component={() => (
              <All_tours_grid
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            exact
            path="/all_tours_list"
            component={() => (
              <All_tours_list
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />

          <Route exact path="/single_tour/:id" component={Single_tour} />

          {/* Restaurants Routes */}
          <Route exact path="/create_restaurant" component={CreateRestaurant} />
          <Route
            exact
            path="/update_restaurant/:id"
            component={UpdateRestaurant}
          />
          <Route
            exact
            path="/all_restaurants_grid"
            component={() => (
              <All_restaurants_grid
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            exact
            path="/all_restaurants_list"
            component={() => (
              <All_restaurants_list
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />

          <Route
            exact
            path="/single_restaurant/:id"
            component={Single_restuarant}
          />

          <Route exact path="/finishBooking" component={FinishBooking} />
          <Route exact path="/bookingForm" component={BookingForm} />

          {/* Hotel Routes */}
          <Route
            exact
            path="/all_hotels_grid"
            component={() => (
              <All_hotels_grid
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            exact
            path="/all_hotels_list"
            component={() => (
              <All_hotels_list
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />

          <Route exact path="/single_hotel/:id" component={Single_hotel} />

          {/* Transfer Routes */}
          <Route exact path="/create_transport" component={CreateTransport} />
          <Route
            exact
            path="/update_transport/:id"
            component={UpdateTransport}
          />
          <Route
            exact
            path="/all_transfer_grid"
            component={() => (
              <All_transfer_grid
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            exact
            path="/all_transfer_list"
            component={() => (
              <All_transfer_list
                indexOfLastPage={indexOfLastPage}
                indexOfFirstPage={indexOfFirstPage}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            exact
            path="/single_transfer/:id"
            component={Single_transfer}
          />

          {/* Plan Routes */}
          <Route exact path="/create_plan" component={CreatePlan} />
          <Route exact path="/get_all_plans" component={GetPlans} />
          <Route exact path="/single_plan" component={Single_plan} />
          <Route exact path="/get_plan_by_name" component={Get_plan_by_name} />
          <Route exact path="/all_plans_grid" component={All_plans_grid} />
          <Route exact path="/update_plan/:id" component={UpdatePlan} />
          {/* Admin Routes */}
          <Route exact path="/admin_dashboard" component={AdminDashBoard} />
          <Route exact path="/user_dashboard" component={UserDashboard} />
          <Route
            exact
            path="/hotel_manager_dashboard"
            component={HotelManagerDashboard}
          />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create_profile" component={CreateProfile} />
          <Route exact path="/create_bookings/:id" component={CreateBooking} />
          <Route exact path="/adminTours" component={Tours} />
          {/* Hotel Routes */}
          <Route exact path="/create_hotel" component={CreateHotel} />
          <Route exact path="/update_hotel/:id" component={UpdateHotel} />
          {/* Place Routes */}
          <Route exact path="/create_place" component={CreatePlace} />
          <Route exact path="/update_place" component={UpdatePlace} />
          {/* Rooms Routes */}
          <Route exact path="/create_room/:id" component={CreateRooms} />
          <Route exact path="/update_room/:id" component={UpdateRooms} />
          {/* Dishes Routes */}
          <Route exact path="/create_dishes" component={CreateDishes} />
          <Route exact path="/update_dishes/:id" component={UpdateDishes} />
          <Route exact path="/payment" component={Checkout} />

          <Route exact path="/posts" component={Posts} />
          <Route exact path="/create_post" component={Create_post} />
          <Route exact path="/update_post/:id" component={Update_post} />
          <Route exact path="/posts/:username" component={Timeline} />
          <Route exact path="/post/:id" component={Postdetails} />

          {/* 404 Page */}
          <Route exact path="*" component={Page_404} />
        </Switch>
        <Footer />
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
