import { useSelector } from 'react-redux'

const FormulaScreen = () => {
    const {formula} = useSelector((state) => state.calculator);

    return(
        <div className="formulaScreen">{formula}</div>
    );
}

export default FormulaScreen;