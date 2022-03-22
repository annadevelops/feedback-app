import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'; // Import the components and data files for UUID which generates unique ID for objects
import FeedbackData from '../data/FeedbackData'


const FeedbackContext = createContext()

/**
 * A React component that acts as a provider to return the FeedbackContext
 * @param children - The children of the component. 
 * @returns FeedbackContext.Provider
 */
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    //set state to edit the feedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Bringing deleteFeedback function from App.js to here so no need to use function passed through props for each component
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => {
            return item.id !== id
        }))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
       setFeedback([newFeedback, ...feedback])
       
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? updItem : item))
        )
    }

    // The context provider for the feedback component. Value is what we want to pass to our children so the state functions etc
    return <FeedbackContext.Provider value={{ 
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext