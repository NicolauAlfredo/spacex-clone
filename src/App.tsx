import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Footer } from "./layouts/footer/Footer";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Footer />;
    </>
  );
}
