function Login(){
    return (
        <>
            <form action="#" method="post" id="loginFrm">
                <fieldset>
                    <legend class="skip">로그인양식</legend>
                    <input type="text" placeholder="아이디" name="user_id" />
                    <input type="password" placeholder="비밀번호" name="user_pw" />
                    <label><input type="checkbox" value="login_y" />로그인상태유지</label>
                    <button type="button" id="loginBtn">로그인</button>
                </fieldset>
            </form>
            <div class="id_pw_search">
                <a href="#">비밀번호 찾기</a>
                <a href="#">아이디 찾기</a>
                <a href="#">회원가입</a>
            </div>
        </>
    )
}

export default Login;