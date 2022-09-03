const ListReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case "ADD_NEW":
            return [...state,action.payload];
        default:
            return state;
    }
}
export default ListReducer;