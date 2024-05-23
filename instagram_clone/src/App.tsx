import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";

import "../css/style.css";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.data.user.user);

  return <div className="app">{user ? <Homepage /> : <Authentication />}</div>;
}

export default App;
