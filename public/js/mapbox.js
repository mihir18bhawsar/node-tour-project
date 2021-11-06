/*eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94LS1taWhpciIsImEiOiJja3Y0dzNyOWUwa2RuMm9wZ2k0MzdxOXR3In0.Cl3qJ-4VYAx4D3qjqaxzKQ';
  // create new map and integrate
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox--mihir/ckv52yfce55sn14vos9lm4iu5',
    scrollZoom: false
  });

  // create bounds object
  const bounds = new mapboxgl.LngLatBounds();
  // set marker element and set its coordinates and add to map
  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates) // set latitude and longitude to marker
      .addTo(map);

    // add new popup for this marker location
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //extend bounds
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 150,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
