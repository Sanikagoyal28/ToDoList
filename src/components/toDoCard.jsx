import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../action';

const ToDoCard = (props) => {

    const dispatch= useDispatch();
 return <>
 <div className='listOfCard'>
    <li className='cardList'>{props.item} <span type="button" className='buttonDelete' onClick={
      ()=>{console.log(`${props.id}`)
         dispatch(deleteItem(props.id))}}>Delete</span></li>
    </div>
 </>
}

export default ToDoCard