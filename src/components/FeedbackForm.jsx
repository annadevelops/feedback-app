import { useState, useContext, useEffect } from "react"

import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //construct new feedback with new text and new rating. Setting rating to be a number
        const newFeedback = {
            text: text,
            rating: Number(rating)
        }

        if (feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
        setText('')
        setRating(10)
    }

  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How would you rate your service with us?</h2>
              {/* @TODO - rating select component */}
              <div className="input-group">
                  <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                  <Button type='submit' isDisabled={text.trim().length < 10}> 
                      Send
                  </Button>
              </div>
              { text && text.trim().length < 10 && (
                  <div className='message'>Text must be at least 10 characters</div>
              )}
              <RatingSelect select={(rating) => setRating(rating)} />
          </form>
      </Card>
    
  )
}
export default FeedbackForm