import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast"; // 🔥 Import toaster

const App = () => {
  const location = useLocation();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  );
};

export default App;
