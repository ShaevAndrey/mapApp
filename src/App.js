import React from 'react';
import './App.css'
import Split from 'react-split'
import { Map } from './components/map'
import 'antd/dist/antd.css'
import { OrderDash } from './components/orderdash';

function App() {

  

  return (
    
    <Split className='split'>
        <div className='part_1' >        
          <OrderDash />
        </div>
        <div className='part_2'>
          <Map/>
        </div>
    </Split>
    
  )}

export default App
