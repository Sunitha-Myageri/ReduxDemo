export const increment=()=>
{
    return{
        type:"INCREMENT"
    }
}
export const decrement=()=>
{
    return{
        type:"DECREMENT"
    }
}
export const addnewitem=(item)=>
{
    return{
        type:"ADD_NEW",
        payload:item
    }
}