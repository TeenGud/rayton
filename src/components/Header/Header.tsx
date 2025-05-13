import { useState } from 'react';
import './Header.scss';

import { Drawer } from 'antd';
import { HeaderContent } from './HeaderContent';

export function Header() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <header className="header">
            <img src="/logo.svg" alt="Rayton logo" />
            <HeaderContent />
            <button className='header__button_small--burger' onClick={showDrawer}>
                <img src="/burger.svg" alt="Burger button" />
            </button>
            <Drawer
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
                styles={{
                    header: {
                        height: '10px'
                    }
                }}
            >  
                <HeaderContent className='modal'/>
            </Drawer>
        </header>
    );
};