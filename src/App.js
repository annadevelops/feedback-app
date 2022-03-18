import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

import FeedbackStats from "./components/FeedbackStats";

function App() {

    let averageCount = () => {
        FeedbackData.map((item) => {
            return item.rating*1
        })
    };

    console.log(averageCount())
    const [feedback, setFeedback] = useState(FeedbackData)


    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => {
            return item.id !== id
        }))
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;
