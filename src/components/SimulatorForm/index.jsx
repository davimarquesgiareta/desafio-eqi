import react from "react";

import './index.css'

export default function SimulatorForm(){
  return(
    <div className="formInputs" >
        <h2>Simulador</h2>
        <div className='content' >

          <div className='leftSimulatorContent' style={{marginRight:"10px"}}>

            <label className="titleLabels">Rendimento i</label>

            <div className='flexButton'>
              <button className='formButton' style={{borderRadius:"4px 0px 0px 4px"}}>Bruto</button>
              <button className='formButton' style={{borderRadius:"0px 4px 4px 0px"}}>Líquido</button>
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
              <button className='firstFormButton' style={{borderRadius:"4px 0px 0px 4px"}}>PRÉ</button>
              <button className='formButton' >PÓS</button>
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
          <button className='simulationButton' > Simular</button>

        </div>
       
    </div>

  )
}