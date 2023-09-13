import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const navMenu = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];

const Header = () => {
  return (
    <div className='d-flex header-wrap'>
        <div className='d-flex header-top'>
            <FontAwesomeIcon icon={faBars} size="lg" />
            <div className='d-flex header-login'>
                <FontAwesomeIcon icon={faUser} size="lg" />
                <p>로그인</p>
            </div>
        </div>

        <div className='header-logo'>
            <img src='https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png' width={100} />
        </div>

        <div className='d-flex header-menu'>
            <div className='d-flex menu-wrap'>
                { navMenu.map(menu => {
                    return (
                        <div>
                            <p>{menu}</p>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex menu-search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
                <input type='text' placeholder='제품검색' />
            </div>
        </div>
    </div>
  )
}

export default Header;
