
import { Map, GoogleApiWrapper} from 'google-maps-react';
import {Component} from "react";






class MapContainer extends Component{

    
    render(){
        
        return(
            <Map
            
            google= {this.props.google}
            style = {{width:"100%", Height:"20%"}}
            />
        )
    }
}

export default GoogleApiWrapper({

    
    apiKey:""

})(MapContainer)