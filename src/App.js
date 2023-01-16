import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FeedbackProvider>
    </>
  );
};

export default App;
