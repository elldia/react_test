import Logo from '../images/logo.png';
import Lang from './Lang';

function Header(){
    return (
        <>
            <header>
            <Lang />
                <h1><img src={Logo} alt="NAVER" /></h1>
            </header>
        </>
    )
}

export default Header;