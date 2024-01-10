import { useDispatch } from 'react-redux'
import { add, AC, calculate } from '../redux/calculatorSlice';


const Buttons = () => {
    const dispatch = useDispatch();

    const input = (e) => {
      dispatch(add(e.currentTarget.value.toString()));
    }



    return (
        <div>
          <button
            className="jumbo"
            id="clear"
            value="AC"
            style={{ background: "rgb(172, 57, 40)" }}
            onClick={() => {dispatch(AC())}}
          >
            AC
          </button>
          <button id="divide" value="/" onClick={input} >
            /
          </button>
          <button id="multiply" value="*" onClick={input} >
            x
          </button>
          <button id="seven" value="7" onClick={input} >
            7
          </button>
          <button id="eight" value="8" onClick={input}>
            8
          </button>
          <button id="nine" value="9" onClick={input} >
            9
          </button>
          <button id="subtract" value="-" onClick={input}>
            -
          </button>
          <button id="four" value="4" onClick={input}>
            4
          </button>
          <button id="five" value="5" onClick={input}>
            5
          </button>
          <button id="six" value="6" onClick={input}>
            6
          </button>
          <button id="add" value="+" onClick={input}>
            +
          </button>
          <button id="one" value="1" onClick={input}>
            1
          </button>
          <button id="two" value="2" onClick={input}>
            2
          </button>
          <button id="three" value="3" onClick={input}>
            3
          </button>
          <button className="jumbo" id="zero" value="0" onClick={input}>
            0
          </button>
          <button id="decimal" value="." onClick={input}>
            .
          </button>
          <button
            id="equals"
            value="="
            style={{
              background: "rgb(0, 68, 200)",
              position: "absolute",
              height: "130px",
              bottom: "5px",
            }}
            onClick={() => {dispatch(calculate())}}
          >
            =
          </button>
        </div>
      );
};
export default Buttons;
