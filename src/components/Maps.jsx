import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -1.4246489,
      lng: -48.4769445
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50%', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpOi6R3ADtF-ZIoKhrTau88tQfhBB_kls" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-1.4246489}
          lng={-48.4769445}
          text="Minha Localização"
        />
      </GoogleMapReact>
    </div>
  );
}


export default SimpleMap