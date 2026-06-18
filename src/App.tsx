import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Footer } from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Footer />;
    </>
  );
}
