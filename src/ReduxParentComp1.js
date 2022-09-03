import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increment,decrement,addnewitem } from "./myactions/index1";

const ReduxParentComp1=()=>
{
    const counter=useSelector(x=>x.counter);
    const dispatch=useDispatch();
    const list=useSelector(state=>state.List);

    
    const AddNewItemHandler=()=>
    {
        const x=document.getElementById("name");
        const y=document.getElementById("address");
        const z=document.getElementById("age");
        var obj1={name:x.value,address:y.value,age:z.value};
        dispatch(addnewitem(obj1));

    }
    return(<>

    {counter}<br></br>

    <input type="button" value="+" onClick={()=>dispatch(increment())}></input>
    <input type="button" value="-" onClick={()=>dispatch(decrement())}></input>

    Enter Name<input type="text" id="name"></input>
    Enter Address<input type="text" id="address"></input>
    Enetr Age<input type="text" id="age"></input>

    <input type="button"value="Add" onClick={AddNewItemHandler}></input>
    {
        list.map((data)=>{
            return(
                <>
                <p>{data.name}</p>
                <p>{data.address}</p>
                <p>{data.age}</p>
                </>
                );
        })
    }
    <p>hi suni</p>
    </>);
}
export default ReduxParentComp1;