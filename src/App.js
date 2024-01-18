import LoginForm from "./LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardIndividual from "./Individual/DashboardIndividual";
import DashboardCorporate from "./Corporate/DashboardCorporate";

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboardCorporate' element={<DashboardCorporate />} />
          <Route
            path='/dashboardIndividual'
            element={<DashboardIndividual />}
          />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
