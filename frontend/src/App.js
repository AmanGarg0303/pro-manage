import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import { Sidebar } from "./components/sidebar/Sidebar";
import Analytics from "./pages/analytics/Analytics";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  const currentUser = true;

  const HomeLayout = () => {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  };

  const DashboardLayout = () => {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            position: "fixed",
            top: 0,
            backgroundColor: "white",
          }}
        >
          <Sidebar />
        </div>
        <div style={{ flex: 5, marginLeft: "15rem" }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: !currentUser ? (
            <Auth />
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    flex: 1,
                    position: "fixed",
                    top: 0,
                    backgroundColor: "white",
                  }}
                >
                  <Sidebar />
                </div>
                <div style={{ flex: 5, marginLeft: "15rem" }}>
                  <Dashboard />
                </div>
              </div>
            </>
          ),
        },
        // {
        //   path: "/playquiz/:quizId",
        //   element: <PlayQuiz />,
        // },
      ],
    },
    {
      path: "/dashboard",
      element: currentUser ? <DashboardLayout /> : <HomeLayout />,
      children: [
        {
          path: "/dashboard/",
          element: currentUser ? <Dashboard /> : <Auth />,
        },
        {
          path: "/dashboard/analytics",
          element: currentUser ? <Analytics /> : <Auth />,
        },
      ],
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
