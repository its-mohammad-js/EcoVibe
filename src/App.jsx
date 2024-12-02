import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getUserData } from "./reducers/auth/userDataSlice";
import AppLayout from "./layout/AppLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from "./routes/Routes";

function App() {
  const dispatch = useDispatch();

  // read all user data from local storage
  useEffect(() => {
    // read user data
    dispatch(getUserData());
  }, []);

  return (
    <AppLayout>
      <Toaster />
      <Routes />
    </AppLayout>
  );
}

export default App;
