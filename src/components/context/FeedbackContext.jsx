import {createContext, useState} from 'react'

/**
 * The context for the feedback component.  This context is used to provide the feedback component with the necessary data.
 * @returns The context for the feedback component.
 */
const FeedbackContext = createContext()

/**
 * A React component that acts as a provider to return the feedback component to its children
 * @param children - The children of the component. 
 * @returns FeedbackContext.Provider
 */
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])
    // The context provider for the feedback component. Value is what we want to pass to our children so the state functions etc
    return <FeedbackContext.Provider value={{ 
        feedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext