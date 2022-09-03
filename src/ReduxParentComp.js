import { useSelector,useDispatch } from "react-redux";
import { increment } from "./actions";
const ReduxParentComp=()=>
{
    const counter = useSelector(a=>a.counter);
    const dispatch = useDispatch();
    return(
        <>
    hi
    <p>{counter}</p>
    <input type="button" value="+" onClick={()=>dispatch(increment())}></input>
        </>
    )
}
export default ReduxParentComp;