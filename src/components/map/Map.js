import { Height } from '@material-ui/icons';
import { Map, GoogleApiWrapper, GoogleMap, withScriptsjs, withGoogleMap } from 'google-maps-react';
import {Component} from "react";

class MapContainer extends Component{
    render(){
        return(
            <Map
            
            google= {this.props.google}
            style = {{width:"100%", Height:"100%"}}
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyAqEh4vzP9W7pP4WhC5mgYK12GwVxfP_W4"
})(MapContainer)