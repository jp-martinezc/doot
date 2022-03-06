import { Height } from '@material-ui/icons';
import { Map, GoogleApiWrapper, GoogleMap, withScriptsjs, withGoogleMap } from 'google-maps-react';
import {Component} from "react";
const apiKey = process.env.GOOGLE_API;





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