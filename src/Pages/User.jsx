import { useState, useEffect } from 'react';
import { TableData } from '../Data/Data'
import Table from '../Components/Table/Table'
import UserHead from '../Components/User/UserHead';

export default function User() {
  const [UserData, setUserData] = useState([])
  const [CheckStatus, setCheckStatus] = useState('Active')
  const [Active, setActive] = useState('Users')

  useEffect(() => {
    setUserData(TableData)
  }, [])

  const handleStatus = (status) => {
    setCheckStatus(status)
  }

  const handleActive = (tab) => {
    setActive(tab)
  }

  const FilterData = UserData.filter((user) =>
    (Active === 'Users' ? user.type?.user === 'Users' : user.type?.seller === 'Sellers') &&
    (CheckStatus === "Active" ? user.Status?.Active === "Active" : user.Status?.Block === "Blocked")
  );

  return (
    <>
      <div className="user_container">
        <UserHead CheckStatus={CheckStatus}
          handleStatus={handleStatus}
          handleActive={handleActive}
          Active={Active}
          headingName='Users'
          user='Users'
          seller='Sellers'
        />
        <div className="second_row_Table">
          <Table userData={FilterData} CheckStatus={CheckStatus} />
        </div>
      </div>
    </>
  )
}
