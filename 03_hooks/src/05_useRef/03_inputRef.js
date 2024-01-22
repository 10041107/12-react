import { useEffect, useState, useRef } from "react"

const LoginComponent = () =>{
    const [from, setFrom] = useState({
        username: ' ',
        password: ' '
    });

    const userNameRef = useRef();


    useEffect(() => {
        console.log(userNameRef.current);
        userNameRef.current.focus();
    },[])

    const onClickHandler = () => {
        alert(`username: ${from.username} \n password " ${from.password}`);
        setFrom({
            username: ' ',
            password:' '
        });
        userNameRef.current.focus();
    }

    const onChangeHandler = (e) => {
        setFrom({
            ...from,
            [e.target.name]: e.target.value
        });
    }

    return (

        <>
        <input
            type="text"
            name="username"
            placeholder="이름"
            onChange={onChangeHandler}
            value={from.username}
            ref={userNameRef}/>
            <br/>
            <input type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChangeHandler}
            value={from.password}/>
            <br/>
            <button onClick={onClickHandler}>로그인</button>


        </>
    )

}
export default LoginComponent;