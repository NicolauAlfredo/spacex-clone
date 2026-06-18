import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Header } from "./components/header/Header";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Header />
    </>
  );
}
