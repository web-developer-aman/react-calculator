import { useState } from 'react';
import AppCss from './components/App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
function App(){
  const [displayVal, setDisplayVal] = useState('');
  const onClickBtn = (btnName) => {
    if(btnName === 'C') {
      setDisplayVal('');
    }else if(btnName === 'Del') {
      const displayValArr = displayVal.split('');
      displayValArr.pop();
      setDisplayVal(displayValArr.join(''));
    }else if(btnName === '=') {
      const result =  eval(displayVal);
      setDisplayVal(result.toString());
    }else if(displayVal == '' && btnName === '0'){
      setDisplayVal('');
    }else{
      const newDisplayVal = displayVal + btnName;
      setDisplayVal(newDisplayVal);
    }
    
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 m-auto">
            <div className="border rounded p-2 shadow-sm">
              <div className='px-1'>
                <input id="display" className={`w-100 m-auto ${AppCss['cal-display']}`} value={displayVal} type="text" readOnly/>
              </div>
              <ButtonsContainer handleCalBtn = {onClickBtn}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;