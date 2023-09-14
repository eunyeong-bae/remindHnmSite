import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const navMenu = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];

const Header = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate();
    const productSearch = (e) => {
        if(e.key === 'Enter'){
            const keyword = e.target.value;
    
            navigate(`/?q=${keyword}`);
        }
    };

    const goToLogin = () => {
        setAuthenticate(!authenticate);
         navigate('/login');
    };

    const handleSideNav = (state) => {
        const sideNavbar = document.querySelector('.side-navbar');
        state === 'show' ? sideNavbar.classList.add('show') : sideNavbar.classList.remove('show')
    };

  return (
    <div className='d-flex header-wrap'>
        <div className='side-navbar'>
            <div className='side-close-btn' onClick={handleSideNav.bind(this,'hide')}>
                <FontAwesomeIcon icon={faX} />
            </div>
            <div className='d-flex side-list-wrap'>
                { navMenu.map(menu => {
                    return (
                        <p>{menu}</p>
                    )
                })}
            </div>
        </div>
        <div className='d-flex header-top'>
            <div style={{cursor:'pointer'}} onClick={handleSideNav.bind(this, 'show')}>
                <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
            <div className='d-flex header-login'>
                <FontAwesomeIcon icon={faUser} size="lg" />
                <p onClick={goToLogin}>{authenticate ? '로그아웃':'로그인'}</p>
            </div>
        </div>

        <div className='header-logo' onClick={()=>navigate('/')}>
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
                <input type='text' placeholder='제품검색' onKeyDown={(event) => productSearch(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Header;
