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
import ClassDetails from "../Pages/Classes/ClassDetails";
import AdminRoute from "./AdminRoute/AdminRoute";
import TrainerRoute from "./TrainerRoute/TrainerRoute";

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
        element: <TrainerDetails />,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/trainers/betrainer",
        element: (
          <PrivateRoute>
            <BeTrainerForm></BeTrainerForm>,
          </PrivateRoute>
        ),
      },
      {
        path: "/trainers/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>,
          </PrivateRoute>
        ),
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
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>,
    </PrivateRoute>,
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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSubscribers></AllSubscribers>,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllTrainers></AllTrainers>,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "applied-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AppliedTrainers></AppliedTrainers>,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "balance",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Balance></Balance>,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-article",
        element: (
          <PrivateRoute>
            <AddArticles></AddArticles>,
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <AddClass></AddClass>,
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageMembers></ManageMembers>,
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageSlots></ManageSlots>,
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "activities",
        element: (
          <PrivateRoute>
            <Activity></Activity>,
          </PrivateRoute>
        ),
      },
      {
        path: "recommended-class",
        element: (
          <PrivateRoute>
            <Recommended></Recommended>,
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
