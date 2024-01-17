import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'; 


function App() {

      //번호 삽입
      const [nextId, setNextId] = useState(4);

      const [names,setNames] = useState([
        { id: 1, name: '🌥️ 아침 6시 기상', checked: true},
        { id: 2, name: '🍙 점심 약 먹기', checked: true},
        { id: 3, name: '🐹 햄스터 밥 주기', checked: true},

      ]);

      const onCheckedElement = (checked, item) => {
        if (checked) {
          setCheckedList([...checkedList, item]);
        } else if (!checked) {
          setCheckedList(checkedList.filter(el => el !== item));
        }
      };

      const onCheckedRemove = item => {
        setCheckedList(checkedList.filter(el => el !== item));
      };

       
      const onChangeHandler = e => setImputText(e.target.value);

    
      //문장 입력
      const [inputText, setImputText] = useState("");


    // checked: true 변경 함수
    const onToggle = useCallback(id => {
      setTodos(todos.map(todo => 
        todo.id === id ? {...todo, checked: true} : todo
      ))
    }, [todos]);

      //문장, 번호 병합
      const onClickHAndler = () => {
        const changeNames = names.concat({
          is: nextId,
          name: inputText,
          checked: false
        });
        setNextId(nextId+1);
        setNames(changeNames);
        setImputText("");
      }

     //삭제 함수
     const onRemove = id => {
     const changeNames = names.filter(name => name.in !== id);
     setNames(changeNames);
     }

     const nameList = names.map(
      name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
          {name.name}
        </li>
      )
     )


      return (
        <div className="App">
        <div className = "all">
          <h1>📝 To Do List</h1>
          <br/>
        <div className="addlist">
          <ul>
            {nameList}
            </ul>
            <br/>
            <Button onClick={onRemove} as="input" type="button" value="삭제하기"/>

            <input value={inputText} onChange ={onChangeHandler}/>
        <Button onClick={onClickHAndler} as="input" type="button" value="추가하기"/>
        </div>
        </div>
    </div>
  );
}

export default App;
