export const getRouteFromServer =async  (from, to) =>{
    const URL = `http://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?geometries=geojson&steps=true&overview=full`
    const response =  await fetch(URL)
    return await response.json()
}
