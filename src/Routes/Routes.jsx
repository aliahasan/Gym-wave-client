import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import Classes from "../Pages/Classes/Classes";
import Gallery from "../Pages/Gallery/Gallery";
import Trainers from "../Pages/Trainers/Trainers";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import BeTrainerForm from "../Components/Form/BeTrainerForm";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBard from "../DashboardPages/DashBoard/DashBard";
import AllSubscribers from "../DashboardPages/Menu/AdminMenu/AllSubscribers";
import AllTrainers from "../DashboardPages/Menu/AdminMenu/AllTrainers";
import AppliedTrainers from "../DashboardPages/Menu/AdminMenu/AppliedTrainers";
import Balance from "../DashboardPages/Menu/AdminMenu/Balance";
import AddClass from "../DashboardPages/Menu/TrainerMenu/AddClass";
import ManageMembers from "../DashboardPages/Menu/TrainerMenu/ManageMembers";
import ManageSlots from "../DashboardPages/Menu/TrainerMenu/ManageSlots";
import Activity from "../DashboardPages/Menu/UserMenu/Activity";
import Recommended from "../DashboardPages/Menu/UserMenu/Recommended";
import Profile from "../DashboardPages/Menu/UserMenu/Profile";
import AddArticles from "../DashboardPages/AddArticles/AddArticles";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TrainerDetails from "../Pages/Trainers/TrainerDetails";
import Booking from "../Pages/Booking/Booking";
import Payment from "../Pages/Payment/Payment";
import { BookingProvider } from "../Provider/BookingProvider/BookingProvider";
import ClassDetails from "../Pages/Classes/ClassDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/classes/:id",
        element: <ClassDetails></ClassDetails>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/trainers",
        element: <Trainers></Trainers>,
      },
      {
        path: "/trainers/:id",
        element: (
          <BookingProvider>
            <TrainerDetails />,
          </BookingProvider>
        ),
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/trainers/betrainer",
        element: <BeTrainerForm></BeTrainerForm>,
      },
      {
        path: "/trainers/booking",
        element: (
          <PrivateRoute>
            <BookingProvider>
              <Booking></Booking>
            </BookingProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashBard></DashBard>,
          </PrivateRoute>
        ),
      },
      {
        path: "all-subscribers",
        element: <AllSubscribers></AllSubscribers>,
      },
      {
        path: "all-trainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "applied-trainers",
        element: <AppliedTrainers></AppliedTrainers>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "add-article",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "manage-members",
        element: <ManageMembers></ManageMembers>,
      },
      {
        path: "manage-slots",
        element: <ManageSlots></ManageSlots>,
      },
      {
        path: "activities",
        element: <Activity></Activity>,
      },
      {
        path: "recommended-class",
        element: <Recommended></Recommended>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
