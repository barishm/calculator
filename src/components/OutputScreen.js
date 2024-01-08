import { useSelector } from 'react-redux'

const OutputScreen = () => {
    const {output} = useSelector((state) => state.calculator);


    return(
        <div className="outputScreen" id="display">{output}</div>
    );
}

export default OutputScreen;