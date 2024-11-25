import React, { useContext, useState } from 'react'
import { ShareData } from './context/UserContext';

const App = () => {

  const [name, setName] = useState("");
  const shared = useContext(ShareData)

  const formHandler = (e) => {
    //Stops page from reloading after submit
    e.preventDefault();
    console.log("App Handled");
    setName('')
  }

  return (
    <>
      {shared}
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        {/* Two way binding*/}
        <input type="text" value={name} onChange={(e) => {
          setName(e.target.value)
        }} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App