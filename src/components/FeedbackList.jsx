import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    return (
          <div className='feedback-list'>
            {feedback.length > 0 ? (
              <AnimatePresence>
              {feedback.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}
                  >
                    <FeedbackItem key={item.id} item={item} />
                  </motion.div>
                
              ))}
              </AnimatePresence>
            ) : <p>No Feedback Yet</p> }
              
          </div>
      
  )
}
export default FeedbackList