import React, { useState, useEffect } from 'react'
import UserHead from '../Components/User/UserHead'
import AdCard from '../Components/Ads Card/AdCard'
import { AdsData } from '../Data/Data'

export default function Ads() {
  const [CheckStatus, setCheckStatus] = useState('Active')

  const handleStatus = (status) => {
    setCheckStatus(status)
  }

  return (
    <div>
      <UserHead headingName='Advertisements'
        CheckStatus={CheckStatus}
        handleStatus={handleStatus}
      />
      <div className="Card_container">
        {AdsData.map(({ id, image, name, detail }) => <AdCard id={id} image={image} name={name} detail={detail} CheckStatus={CheckStatus} />)}
      </div>
    </div>
  )
}
