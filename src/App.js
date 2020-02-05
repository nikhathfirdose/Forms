import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import "./style.css"

function App(){
  return(
    <div className = "page">
      <Header/>
      <Content/>
    </div>
  )
}

export default App