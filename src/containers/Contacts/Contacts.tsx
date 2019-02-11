import * as React from 'react';
import { Component } from 'react';

export interface ContactsProps {
  
}
 
export interface ContactsState {
  
}
 
class Contacts extends React.Component<ContactsProps, ContactsState> {
 // state = { :  }
componentDidMount() {
  const map = new (window as any).google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.0082, lng: 28.9784 },
    zoom: 8
  });
}


  render() { 
    return ( 
      <div style={{ width: window.innerWidth - 300, height: window.innerHeight - 100 }} id="map" />
     );
  }
}
 
export default Contacts;