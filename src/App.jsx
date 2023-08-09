import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import NavComponent from "./components/Nav"
import { ServicesProvider } from "./context/services"

const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <NavComponent />
        <ServicesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
            <Route path="*" element={'asdasd'} />
          </Routes>
        </ServicesProvider>
      </BrowserRouter></>
  )
}

export default App
