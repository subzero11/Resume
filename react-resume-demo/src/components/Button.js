const Button = ({color, text, onClicked}) => {


  return (
    <button 
    onClick={onClicked}
    style={{backgroundColor: color}} 
    className = 'btn'>
    {text}
    </button>
  )
}

export default Button