import { useState, useEffect } from "react";

const useEffectUpdate = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    console.log("message update", user.username);
  }, [user.username]);

  useEffect(() => {
    console.log("password update", user.password);
  }, [user.password]);

  return (
    <>
      <label>Username: </label>
      <input type="text" name="username" onChange={onChangeHandler} />
      <br />
      <label>Password: </label>
      <input type="password" name="password" onChange={onChangeHandler} />
      <h3>Username: {username}</h3>
      <h3>Password: {password}</h3>
    </>
  );
};

export default useEffectUpdate;
