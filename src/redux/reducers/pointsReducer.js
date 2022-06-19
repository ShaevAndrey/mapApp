import { ACTIONS } from "./actions"
import { from, to } from "./base"

const initialState = {
    from:from,
    to:to,
    routes:[],
    activeRoute : {},
    pline: []

}
export const pointsReduser = (state = initialState, action) => {
    switch(action.type){
        // Установить маршруту точку, откуда осузествляется доставка
        case ACTIONS.SET_ROUTE_BASE:{
            return {...state, routes:state.routes.map(route=>{
                if (route.id===action.payload.routeId) {
                    route.base=action.payload.base
                }
                return route
            })}
        }

        // Установить маршруту клента
        case ACTIONS.SET_ROUTE_CLIENT:{
            return {...state, routes:state.routes.map(route=>{
                if (route.id===action.payload.routeId) {
                    route.client=action.payload.client
                }
                return route
            })}
        }


       case ACTIONS.DELETE_ROUTE :{
            return {...state, routes:state.routes.filter(route=>route.id!==action.payload)}
        }

        // Добавить маршрут
       case ACTIONS.ADD_ROUTE :{
            return {...state, routes:[...state.routes, action.payload]}
        }

        // Сделать маршрут активным
       case ACTIONS.SET_ACTIVE_ROUTE :{
            return {...state, routes:state.routes.map(route=>{if (route.id === action.payload){
                route.isActive = true
            } else {
                route.isActive = false
            }
            return route
                })
            }
        }
        

        case ACTIONS.SET_ROUTE_PLINE :{
            return {...state, pline:action.payload}
        }
        
    default: return state
}
}


