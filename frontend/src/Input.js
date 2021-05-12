import React from 'react';
import './Input.css'
import axios from 'axios';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {x: '',
                      y:'',
                      res: ''}
        this.handleChangeX = this.handleChangeX.bind(this)
        this.handleChangeY = this.handleChangeY.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChangeX(event) {
        this.setState({x: event.target.value})
    }
    handleChangeY(event) {
        this.setState({y: event.target.value})
    }

    handleSubmit(event) {
        axios.post("http://127.0.0.1:5000/calculate", {
            x:this.state.x, 
            y:this.state.y}
        )
        .then(res => {
            console.log(res)
            this.setState({res:res.data["result"]})
        })
        .catch(err =>{
            alert(err.message)
        })
        
       event.preventDefault()
    }

    render() {
        let result;
        console.log(this.state.res)
        if (this.state.res !== '') {
        result =  <textarea>{this.state.res}</textarea>
        }
        return (
            <div class="container">
                <form onSubmit = {this.handleSubmit}>
                    <label for="x"> 
                        Enter the first input
                    </label>
                    <br></br>
                    <input type = "text" onChange = {this.handleChangeX} id="x"></input>
                    <br></br>
                    
                    <label>
                        Enter the second input
                    </label>
                    <br></br>
                    <input type = "text" onChange = {this.handleChangeY}></input>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
               
                {result}
                
                
            </div>
        )
    }


}
export default Input;