import Button from './Button'



const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className= 'header'>
    <h1>{title}</h1>    
    <Button    
    onClicked={onAdd} 
    color = {showAdd ? 'red': 'green'} text = {showAdd ? 'Close': 'Add'}  />
   

        
    </header>
  )
}

export default Header