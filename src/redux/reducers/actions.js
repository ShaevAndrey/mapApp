

export const ACTIONS = {
    SET_ROUTE_BASE:'SET_ROUTE_BASE',
    SET_ROUTE_CLIENT:'SET_ROUTE_CLIENT',
    DELETE_ROUTE:"DELETE_ROUTE",
    ADD_ROUTE:"ADD_ROUTE",
    SET_ACTIVE_ROUTE:'SET_ACTIVE_ROUTE',
    SET_ROUTE_PLINE: 'SET_ROUTE_PLINE',
    GET_ROUTE_PLINE: 'GET_ROUTE_PLINE'
}

export function setRouteBase(routeId, base) {
    return {type:ACTIONS.SET_ROUTE_BASE, payload:{routeId, base}}
}

export function setRouteClient(routeId, client) {
    return {type:ACTIONS.SET_ROUTE_CLIENT, payload:{routeId, client}}
}


export function deleteRoute(routeId) {
    return {type:ACTIONS.DELETE_ROUTE, payload:routeId}
}


export function addRoute() {
    return {type:ACTIONS.ADD_ROUTE, payload:{id:Date.now()}}
}

export function setActiveRoute (id) {
    return {type:ACTIONS.SET_ACTIVE_ROUTE, payload: id}
} 

export function setRoutePline (data) {
    return {type:ACTIONS.SET_ROUTE_PLINE, payload:data}
}