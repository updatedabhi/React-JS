import React, { useState } from 'react'

export default function ThemeApp() {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [text, setText] = useState("Dark");

    const changeTheme = () => {
        setBackgroundColor("black");
        setText("Light");
    }

    return (
        <div style={{ backgroundColor: backgroundColor, color: "white" }}>
            <h1>Theme Application</h1>
            <button onClick={changeTheme}>{text}</button>
        </div>
    );
}