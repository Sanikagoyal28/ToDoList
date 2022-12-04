export const addItem =(element)=>{
return{
    type:"ADDITEM",
    payload:{
        id: new Date().getTime().toString(),
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
