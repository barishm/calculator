import Buttons from "./Buttons";
import FormulaScreen from "./FormulaScreen";
import OutputScreen from "./OutputScreen";

const Calculator = () => {




    return(
       <div className="calculator">
            <FormulaScreen/>
            <OutputScreen/>
            <Buttons/>
       </div>
    );
}

export default Calculator;