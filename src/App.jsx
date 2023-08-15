import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import NavComponent from "./components/Nav"
import { ServicesProvider } from "./context/services"
import { DestionationsProvider } from "./context/destinations"
const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <NavComponent />
        <ServicesProvider>
          <DestionationsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
              <Route path="*" element={'asdasd'} />
            </Routes>
          </DestionationsProvider>
        </ServicesProvider>
      </BrowserRouter></>
  )
}

export default App
