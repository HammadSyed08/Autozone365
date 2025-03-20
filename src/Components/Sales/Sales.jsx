import React from 'react'
import Button from '../Button/Button'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { GraphData, SalesData } from '../../Data/Data'
import './Sales.css'

export default function Sales({ isActive }) {
  return (
    <div className='Sales'>
      <div className="row_one">
        <p>Sales</p>
        <div className="Btn_row">
          <Button name="Weak" isActive={isActive} />
          <Button name="Month" />
          <Button name="Year" />
        </div>
      </div>
      <div className="graphicalBar">
        <ResponsiveContainer width="100%"  aspect={7}>
          <BarChart data={SalesData}  margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey='Waves' fill="#1CA2D7" />
            <YAxis dataKey='Price' interval={'preserveStartEnd'} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
