const state={
    list:[
        {
            id:2,
            element:"ReactJS"
        }
    ]
}

// const initial=[
//    {

//     }
// ]
//above code is wrong since it leads to add the data to function itself so we need to create an object for the function and then array to map

const addNewItem =(stateNew=state,action)=>{
    
    switch(action.type){
        case "ADDITEM":
        const {id, element} = action.payload;  
        if(element){
        return {
            ...stateNew, list:[...stateNew.list , action.payload]  
        }
    }
        // return (
        //    initial=[...state,{id:id,element:element}]
        // )
        case "DELETEITEM":
            return {
                ...stateNew, list:(stateNew.list.filter((listToDo)=>{return listToDo.id != action.payload.id }))
            };
        default:return state;
    }
}
 export default addNewItem