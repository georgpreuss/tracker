import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const { state } = useContext(LocationContext)

  console.log('state is ', state)
  // let points = []
  // for (let i = 0; i < 20; i++) {
  //   points.push({
  //     latitude: 51.5074 + i * 0.001,
  //     longitude: 0.1278 + i * 0.001
  //   })
  // }
  return <MapView
    provider={PROVIDER_GOOGLE}
    style={styles.map}
    initialRegion={{
      latitude: 51.5074,
      longitude: 0.1278,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
  >
    {/* <Polyline coordinates={points}/> */}
  </MapView>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map