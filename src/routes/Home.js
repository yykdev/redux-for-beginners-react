import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
