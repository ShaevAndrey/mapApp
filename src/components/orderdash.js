import { RouteList } from './routelist'
import { useDispatch } from 'react-redux'
import { Button } from 'antd' 
import { addRoute } from '../redux/reducers/actions'
import './style/list.css'

export const OrderDash = () =>{

    const dispatch = useDispatch()
        const addRouter = () => {
        dispatch(addRoute())
    }


    return (
        <div className='wrapper'>
            <div className='header'>
                <span className='collumn'>Погрузка</span>
                <span className='collumn'>Разгрузка</span>
                <span className='collumn'>Опции</span>
            </div>
            <RouteList />
            <Button type='primary' block='true' onClick={addRouter} style={{marginTop:'20px'}}>Добавить маршрут</Button>
        </div>
    )

}

