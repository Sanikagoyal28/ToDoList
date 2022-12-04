import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { addItem } from '../action';
import ToDoCard from './toDoCard';
import "./toDoList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcCheckmark , FcMinus } from "react-icons/fc";

const ToDoList = () => {

    var item= useRef("");
    const dispatch= useDispatch();

    const itemList = useSelector((state)=>state.addNewItem);
    console.log(itemList)
    console.log(itemList.list)
  return <>
    <div className='container'>
    <FontAwesomeIcon icon="fa-duotone fa-check" />
        <p className="listHead">To Do List</p>
        <div className='addElement1'>
        <input type="text" className="addElement" ref={item} placeholder="Add work to do" required/>
        </div>
        <button className='buttonAdd' type="submit" onClick={()=>{
          console.log(item.current.value)
            dispatch(addItem(item.current.value),item.current.value="")}}><FcCheckmark id="rightIcon"/></button>
            <div className='listsCall'>
        {itemList.list.map((listOfItem)=>{
           return <ToDoCard item={listOfItem.element} id={listOfItem.id} />
        })
        }
        </div>
    </div>
  </>
}

export default ToDoList