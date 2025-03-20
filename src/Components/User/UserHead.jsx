import ABButton from '../Button/ABButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './UserHead.css'

export default function UserHead({ CheckStatus, handleStatus, Active, handleActive, headingName, user, seller }) {
  return (
    <div className='User_section Dashboard_container'>
      <h2>{ headingName }</h2>
      <div className="first_row">
        <div className="user_seller">
          <p className={`${Active === 'Users' ? 'active' : ''}`} onClick={() => handleActive('Users')}>{ user }</p>
          <p className={Active === 'Sellers' ? 'active' : ''} onClick={() => handleActive('Sellers')}>{ seller }</p>
        </div>
        <div className="btn_searchbar">
          <div className="active_blocked_btn">
            <ABButton name='Active' onClick={() => handleStatus('Active')} isActive={CheckStatus === 'Active'} />
            <ABButton name='Blocked' onClick={() => handleStatus('Blocked')} isActive={CheckStatus === 'Blocked'} />
          </div>
          <div className="SearchBar">
            <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
            <input type="Search"  />
          </div>
        </div>
      </div>
    </div>
  )
}

