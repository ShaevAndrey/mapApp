import { takeEvery, put } from 'redux-saga/effects'
import { ACTIONS } from './actions'
import { getRouteFromServer } from '../../api/requests'
import { setRoutePline, setActiveRoute } from './actions'



function* addPlineCoordinates({route}) {
    yield put(setActiveRoute(route.id))
    if (!route.base || !route.client){
        yield put(setRoutePline([]))
    } else {
        const plineCoordinates = yield getRouteFromServer(route.base.coordinates, route.client.coordinates)
        .catch(error=>{console.log(error)})
        const data = plineCoordinates.routes[0].geometry.coordinates.map(coor=>[coor[1], coor[0]])
        yield put(setRoutePline(data))
    }
    
}

function* sagaWatcher() {
    yield takeEvery(ACTIONS.GET_ROUTE_PLINE, addPlineCoordinates)
    
}

export function* rootSaga() {
    
    yield sagaWatcher()
}