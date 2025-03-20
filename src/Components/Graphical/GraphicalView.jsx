import React from 'react'
import Button from '../Button/Button'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import { GraphData } from '../../Data/Data'
import './Graphical.css'


export default function GraphicalView({ isActive }) {

  return (
    <div className='Graph_chart'>
      <div className="Btn_row">
        <Button name="Weak" isActive={isActive} />
        <Button name="Month" />
        <Button name="Year" />
      </div>
      <div className="Graph">
        <ResponsiveContainer width="100%" aspect={7}>
          <AreaChart width={500}  data={GraphData} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
            <Tooltip />
            <Area dataKey='Waves' type="monotone" />
            <XAxis dataKey="Days" interval={'preserveStartEnd'} />
            <YAxis dataKey='Price' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
