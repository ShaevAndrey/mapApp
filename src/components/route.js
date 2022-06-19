import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { setRouteBase, setRouteClient, deleteRoute} from "../redux/reducers/actions";
import { ACTIONS } from "../redux/reducers/actions";
import { Button,Select } from "antd";

const { Option } = Select;

export const Route = ({route}) => {
    const bases = useSelector(store=>store.points.from)
    const clients = useSelector(store=>store.points.to)
    const dispatch = useDispatch()
    
    const addStart = (value) => {
        const base = bases.filter(base=>base.name===value)[0]
        dispatch(setRouteBase(route.id, base))
    }
    
    const addEnd = (value) => {
        const client = clients.filter(client=>client.name===value)[0]
        dispatch(setRouteClient(route.id, client))
    }

    const getRoute = () =>{
        dispatch({type:ACTIONS.GET_ROUTE_PLINE, route})
    }

    const del = ()=> {
        dispatch(deleteRoute(route.id))
    }
    
    

    return (
        <div className='wrapper'  onClick={getRoute} >
            <div className='row'style={route.isActive?{background:'rgb(171, 246, 232)'}:{background:'rgb(246, 244, 244)'}}>
                <span className='collumn'>{route.base ? <p>{route.base.name}</p> : <p>точка не задана</p>}
                    
                    <Select
                        defaultValue="---"
                        style={{width: 120,}}
                        onChange={addStart} 
                        >
                        {bases.map(base=><Option value={base.name} > {base.name} </Option>)}
                    </Select>
                </span>
                
                <span className='collumn'>{route.client ? <p>{route.client.name}</p> : <p>точка не задана</p>}
                    <Select
                        defaultValue="---"
                        style={{width: 120,}}
                        onChange={addEnd} 
                        >
                        {clients.map(client=><Option value={client.name}>{client.name}</Option>)}
                    </Select>
                </span>
                
                <span className='collumn'><Button onClick={del} type='primary' danger='true'> Delete</Button></span>
            </div>
        </div>
    ) 
}