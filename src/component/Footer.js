import Logo from '../images/logo.png';

function Footer(){
    return (
        <>
            <footer>
                <div class="fnb">
                    <a href="#">이용약관</a>
                    <a href="#">개인정보처리방침</a>
                    <a href="#">책임의 한계와 법적고지</a>
                    <a href="#">회원정보 고객센터</a>
                </div>
                <address>
                    <img src={Logo} alt="NAVER" />
                    <span>Copyright &copy; NAVER Corp. All Rights Reserved.</span>
                </address>
            </footer>
        </>
    )
}

export default Footer;