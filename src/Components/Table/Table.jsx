import React from 'react'
import { TableHead, TableData } from '../../Data/Data'
import Button from '../Button/Button'
import './Table.css'

export default function Table({ userData, CheckStatus }) {
  return (
    <div className='User_Seller Table'>
      <table>
        <thead>
          <tr>
            {
              TableHead.map(({ id, Th }) =>
                <td key={id}>{Th}</td>
              )
            }
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr key={data.id}>
              <td>{data.userName}</td>
              <td>{data.PhoneNumber}</td>
              <td>{data.Email}</td>
              <td>{data.Location}</td>
              <td>{data.GarageName}</td>
              <td>{data.Gender}</td>
              <td className='Status_btn'>
                <Button name={CheckStatus === 'Active' ? data.Status.Active : data.Status.Block} isBlocked={CheckStatus === 'Blocked'} />
                <div className="cross_or_tick">
                  <span><img src={CheckStatus === 'Active' ? './tickG.svg' : './Tick.svg'} alt="Tick.svg" /></span>
                  <span><img src={CheckStatus === 'Active' ? './crossD.svg' : './Cross.svg'} alt="Cross.svg" /></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
