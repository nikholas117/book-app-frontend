import { Outlet } from "react-router-dom";
import Navbar from "./compnents/Navbar";

import "./App.css";
import Footer from "./compnents/Footer";
import { AuthProvide } from "./context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "./compnents/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;
