import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.scss";

function App() {

  return (
    <BrowserRouter>
      
      <Header />
      
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;