import React, {Component} from "react"
import "./style.css"

class Content extends Component{
    constructor(){
        super()
        this.state = {
            fname: "",
            lname: "",
            dob: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }
    handleChange(event){
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )

    }
    handleButton(){
        return(
            <div>
                <p>{this.state.fname}</p>
            </div>
        )
    }
    render(){
        return(
            <div className = "content">
                <br/>
                <p>Enter first name</p>
                <input type = "text" name = "fname" placeholder ="FirstName" onChange = {this.handleChange}/>
                <p>Enter last name</p>
                <input type = "text" name = "lname" placeholder ="LastName" onChange = {this.handleChange}/>
                <p>Birth date</p>
                <input type = "text" name = "dob" placeholder ="DOB" onChange = {this.handleChange}/>
                <p>Email</p>
                <input type = "text" name = "mail" placeholder =" xyz@mail.com" onChange = {this.handleChange}/><br/>

                <br/><br/><br/>
                <button onClick = {this.handleButton}> Submit Details </button><br/>
            </div>
        )
    }
}
export default Content 