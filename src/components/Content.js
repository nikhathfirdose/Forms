import React, {Component} from "react"

class Content extends Component{
    constructor(){
        super()
        this.state = {
            names: "Nikhath"
        }
    }
    render(){
        return(
            <div className = "content">
                <br/>
                <input type = "text" placeholder ="FirstName" /><br/>
                <br/>
                <input type = "text" placeholder ="LastName" /><br/>
                <br/>
                <input type = "text" placeholder ="DOB" /><br/>
                <br/><br/><br/>
                <button> Submit Details </button><br/>
            </div>
        )
    }
}
export default Content 