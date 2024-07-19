
import React, { Component} from "react";

class Welcome extends Component {


    constructor (props){
        super(props);

    }
    render(){
        return(
            <div> Welcome {this.props.title} ( from class component) </div>

        );
    }

}

export default Welcome