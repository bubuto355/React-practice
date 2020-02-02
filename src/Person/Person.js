import React from 'react';
//import './Person.css';
import styled from 'styled-components';
//import Radium from 'radium';

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid rgb(3, 3, 3);
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            @media(min-width: 700px){
                width: 200px;
            }`

const person = (props) => {
    const style = {
        '@media(min-width: 700px)': {
            width: '200px'
        }
    };
    return(
        //<div className = "Person" style = {style}> 
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
}

//export default Radium(person);
export default person;  