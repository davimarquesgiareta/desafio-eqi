import react, {useState} from "react";

import './index.css'

export default function SimulatorForm(){


  const [yieldButton, setYieldButton] = useState('')
  const [indexingTypesButton, setIndexingTypesButton] = useState('')

  function simulate (){
    console.log(yieldButton + ' ' + indexingTypesButton)

  }


  return(
    <div className="formInputs" >
        <h2>Simulador</h2>
        <div className='content' >

          <div className='leftSimulatorContent' style={{marginRight:"10px"}}>

            <label className="titleLabels">Rendimento i</label>

            <div className='flexButton'>
              <button className={yieldButton === 'brutoActive'? 'isActive' : 'formButton'} onClick={()=> setYieldButton('brutoActive')} style={{borderRadius:"4px 0px 0px 4px"}}>Bruto</button>
              <button className={yieldButton === 'liquidoActive'? 'isActive' : 'formButton'} onClick={()=> setYieldButton('liquidoActive')} style={{borderRadius:"0px 4px 4px 0px"}}>Líquido</button>
            </div>

            <div className="labelFields"  >
              Aporte Inicial
            </div>

            <input type="text" id="" name=""/>

            <div className="labelFields" >
              Aporte Inicial
            </div>  

            <input type="text" id="" name=""/>

            <div className="labelFields" >
              Aporte Inicial
            </div>

            <input type="text" id="" name=""/>

          </div>

          <div className='rightSimulatorContent'>

          <label className="marginLeftPropToRightSimulatorContent" style={{display:"block", textAlign:"start", marginBottom:"12px"}}>Rendimento i</label>

            <div className='flexButtonWithJustifyContent'>
              <button className={indexingTypesButton=== 'preActive'? 'isActive' : 'firstFormButton'} onClick={()=> setIndexingTypesButton('preActive')} style={{borderRadius:"4px 0px 0px 4px"}}>PRÉ</button>
              <button className={indexingTypesButton=== 'posActive'? 'isActive' : 'formButton'} onClick={()=> setIndexingTypesButton('posActive')} >PÓS</button>
              <button className='formButton' style={{borderRadius:"0px 4px 4px 0px"}}>FIXADO</button>
            </div>
            
            <div className="labelFields"  >
              <label className='labelRightSimulatorFields'>Aporte 1</label>
            </div>

            <input className="inputMaxWidth" type="text" id="" name=""/>
              
            <div className="labelFields" >
              <label className='labelRightSimulatorFields'>Aporte</label>
            </div>  
            
            <input className="inputMaxWidth" type="text" id="" name=""/>

            <div className="labelFields" >
              <label className='labelRightSimulatorFields'>Aporte</label>
            </div>

            <input className="inputMaxWidth" type="text" id="" name=""/>
            
          </div>

        </div>

        <div className='buttonsForm'>

          <button className='cleanFieldsButton'> limpar Campos </button>
          <button className='simulationButton' onClick={()=> simulate()} > Simular</button>

        </div>
       
    </div>

  )
}