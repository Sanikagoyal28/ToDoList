export const addItem =(element)=>{
return{
    type:"ADDITEM",
    payload:{
        id:Math.floor(Math.random()*10)+1,
        element:element
    }
}
}

export const deleteItem =(id)=>{
    return{
        type:"DELETEITEM",
        payload:{
           id:id
        }
    }
    }
