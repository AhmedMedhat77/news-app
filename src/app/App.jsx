import "../scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Layouts/Navbar/Navbar";
import ROUTES from "../Routes/ROUTES";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar routes={ROUTES} />
        <Routes>
          {ROUTES?.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                Component={route.Element}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
