import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { addItem } from '../action';
import ToDoCard from './toDoCard';
import "./toDoList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoList = () => {

    const item= useRef("");
    const dispatch= useDispatch();

    const itemList = useSelector((state)=>state.addNewItem);
    console.log(itemList)
    console.log(itemList.list)
  return <>
    <div className='container'>
    <FontAwesomeIcon icon="fa-duotone fa-check" />
        <p className="listHead">To Do List</p>
        <div className='addElement1'>
        <input type="text" className="addElement" ref={item}placeholder="Add work to do"/>
        </div>
        <button className='buttonAdd' onClick={()=>{console.log(item.current.value)
            dispatch(addItem(item.current.value))}}>Add Item</button>
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