import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AllNotifications
from "./pages/AllNotifications";

import PriorityNotifications
from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">
          All Notifications
        </Link>

        {" | "}

        <Link to="/priority">
          Priority
        </Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <AllNotifications />
          }
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;