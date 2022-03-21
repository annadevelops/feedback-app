import { useState } from "react"

import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"


function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleRatingSelect = (e) => {
        setRating(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //construct new feedback with new text and new rating. Setting rating to be a number
        const newFeedback = {
            text: text,
            rating: Number(rating)
        }
       handleAdd(newFeedback)
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
              <RatingSelect selected={handleRatingSelect} />
          </form>
      </Card>
    
  )
}
export default FeedbackForm