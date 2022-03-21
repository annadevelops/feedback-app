import { v4 as uuidv4} from 'uuid'; // Import the components and data files for UUID which generates unique ID for objects
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)


    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => {
            return item.id !== id
        }))
    }

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
      }, 0) / feedback.length

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
       setFeedback([newFeedback, ...feedback])
       
    }

    console.log(average)


    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;
