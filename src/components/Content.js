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
            <div>
                
                <input type = "text" placeholder ="FirstName" />
                <input type = "text" placeholder ="LastName" />
                <input type = "text" placeholder ="DOB" />
                <button> Submit Details </button>

            </div>
        )
    }
}
export default Content