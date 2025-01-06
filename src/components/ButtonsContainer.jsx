import AppCss from './App.module.css';
const ButtonsContainer = ({handleCalBtn}) => {
    const buttonNames = ['C','Del','+','1','2','-','3','4','*','5','6','/','7','8','=','9','0','.'];
    return (
        <div className="row mt-2 mx-auto justify-content-center">
            {buttonNames.map((name,index) => (
                <button key={index} className={`${name==='C' ? 'btn btn-warning' : 'btn btn-secondary'} col-sm-3 ${AppCss['cal-button']}`} onClick={() => handleCalBtn(name)}>{name}</button>
            ))}
        </div>
    )
}

export default ButtonsContainer;