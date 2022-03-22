import { v4 as uuidv4} from 'uuid'; // Import the components and data files for UUID which generates unique ID for objects
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)


    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => {
            return item.id !== id
        }))
    }


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
       setFeedback([newFeedback, ...feedback])
       
    }


    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
        <Routes>
            <Route exact path="/" element={
                <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats />
                <FeedbackList handleDelete={deleteFeedback} />
                </>
            } />
            <Route exact path="/about" element={<AboutPage/>}/>
        
        </Routes>
        <AboutIconLink/> 
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App;
