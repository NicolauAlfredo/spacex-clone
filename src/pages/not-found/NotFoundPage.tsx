import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <main className="route-not-found">
      <h1>Page not found</h1>
      <p>The requested page does not exist.</p>
      <Link to="/">Return to homepage</Link>
    </main>
  );
}
