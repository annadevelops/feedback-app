import {Link} from 'react-router-dom'
function Header({text, bgColour, textColour }) {
  const headerStyles = {
    backgroundColor: bgColour,
    color: textColour
  }
  return (
    <header style = {headerStyles}>
      <div className="container" >
        <Link to="/" className="header-text">
        <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

// .defaultProps to set props above 
Header.defaultProps = {
  text: 'Feedback UI',
  bgColour: 'rgba(0,0,0,0.4)',
  textColour: '#ff6a95'
}
export default Header