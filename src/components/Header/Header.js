import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderDown from './HeaderDown/HeaderDown';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderDown />
        </div>
    );
};

export default Header;
