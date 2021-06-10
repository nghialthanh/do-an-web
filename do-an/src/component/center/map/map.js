import React,{useState,useCallback,useRef}  from 'react';
import { GoogleMap,useLoadScript,Marker,InfoWindow} from "@react-google-maps/api";
import  Geocode  from "react-geocode";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100%",
    width: "100%",
};
const center = {
  lat: 10.776530,
  lng: 106.700981,
};
// const options = {
//     styles: mapStyles,
//     disableDefaultUI: true,
//     zoomControl: true,
// };

const Map = (props) => {
    // const [selected, setSelected] = useState(null);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    const getAddress = (lat,lng) => {
        
        Geocode.fromLatLng(lat,lng).then(
            response => {
                props.setAddress(response.results[0].formatted_address);
                props.setCheckAddress(1);
            },
            error => {
              console.error(error);
            }
          );
    }
    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
        getAddress(lat,lng);
        setMarkers(() => [
            {
                lat: lat,
                lng: lng,
                
            },
        ])
        
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    return (
        <div className="mapsgg">
            <GoogleMap
                id='search-box-example'
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={center}
                // onClick={(event)=>{
                //     getAddress(event.latLng.lat(),event.latLng.lng());
                //     // setSelected(null);
                //     setMarkers(() => [
                //     {
                //         lat: event.latLng.lat(),
                //         lng: event.latLng.lng(),
                        
                //     },
                // ]);}}
                onLoad={onMapLoad}
                            
            >
                {markers.map((marker,index) => (
                    <>
                        <InfoWindow
                            key={`${marker.lat}-${marker.lng}`}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onCloseClick={() => {
                            // setSelected(null);
                            }}
                        >
                            <div>
                            <p>{props.address}</p>
                            </div>
                        </InfoWindow>
                    </>
                    ))}
            </GoogleMap>
        </div>
    );
}
export default Map;
