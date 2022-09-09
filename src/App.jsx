import React from 'react';
import Cards from './components/cards'
import Header from './components/header'

export default function App(){

  const[darkmode,setdarkMode]=React.useState(false)

  function toggleDarkMode(){
    setdarkMode(prevmode=>!prevmode)
    }
  
  return(
    <div className='container'>
      <Header 
      darkmode={darkmode}
      togglerdarkmode={toggleDarkMode}
      />
      <Cards
      darkmode={darkmode}/> 
    </div>
    
  )
}