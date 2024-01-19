import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import button from 'react-bootstrap/Button';
import './quiz.css';

function Quiz() {

    useEffect(() => {
        alert("어서오세용"); // 그냥 하면 됨
    }, []);

    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);
    const question = "햄스터의 수명은?";

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        if (input.trim() === "correctInput") {
            setIsDone(true);
            alert("축하드립니다!");
        } else {
            alert("땡!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    }

    return (
        <div className='App'>
            <h1>{question}</h1>
            <div className='buttons'>
                <input
                    type="text"
                    value={input}
                    placeholder="정답을 입력하세요."
                    onChange={handleChange}
                />
                <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "#c78585", color: "white", width: "150px", height: "50px" }}
                    onClick={handleSubmit}
                >
                    제출하기
                </button>
            </div>
        </div>
    );
}

export default Quiz;
