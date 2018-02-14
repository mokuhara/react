import React, { PropTypes } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.positon}
    center={props.positon}
  >
    <Marker {...props.marker} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => {
  const positon = { lat, lng };
  return (
    <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      positon={positon}
      marker={{ positon }}
    />
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  lat: 35.6,
  lng: 39.7,
};


export default Map;
