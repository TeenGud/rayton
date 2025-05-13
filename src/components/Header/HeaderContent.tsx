export function HeaderContent({className}: {className?: string}) {
    return (
        <>
                <ul className={`header__list ${className}`}>
                    <li className='header__listitem'>
                        <a href="#" className='header__listitem_link'>
                            Главная
                        </a>
                    </li>
                    <li className='header__listitem'>
                        <a href="#" className='header__listitem_link'>
                            SMM/SEO
                        </a>
                    </li>
                    <li className='header__listitem'>
                        <a href="#" className='header__listitem_link'>
                            CRM Маркетинг
                        </a>
                    </li>
                    <li className='header__listitem' >
                        <a href="#" className='header__listitem_link'>
                            О компании
                        </a>
                    </li>
                    <li className='header__listitem'>
                        <a href="#" className='header__listitem_link'>
                            Кейсы
                        </a>
                    </li>
                </ul>
                <div className={`header__buttons ${className}`}>
                    <a href="#" className='header__button_small'>
                        <img src="/telegram.svg" alt="Telegram" />
                    </a>
                    <a href="#" className='header__button_small'>
                        <img src="/whatsapp.svg" alt="Whatsapp" />
                    </a>
                    <button className='header__button'>Позвонить Вам?</button>
                    <button className='header__button_black'>+7 950 949-27-27</button>
                </div>
                </>
    );
};