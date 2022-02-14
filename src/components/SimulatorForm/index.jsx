import react from "react";

import './index.css'

export default function SimulatorForm(){
  return(
    <div className="formInputs" >
        <h2>Simulador</h2>
        <div className='content' style={{marginTop:"1rem"}}>

          <div className='leftSimulatorContent' style={{marginRight:"10px"}}>

            <label>Rendimento i</label>

            <div className='flexButton'>
              <button className='formButton' style={{borderRadius:"4px 0px 0px 4px"}}>Bruto</button>
              <button className='formButton' style={{borderRadius:"0px 4px 4px 0px"}}>Líquido</button>
            </div>

            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}}  >
              Aporte Inicial
            </div>

            <input type="text" id="" name=""/>

            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}} >
              Aporte Inicial
            </div>  

            <input type="text" id="" name=""/>

            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}} >
              Aporte Inicial
            </div>

            <input type="text" id="" name=""/>

          </div>

          <div className='rightSimulatorContent'>

          <label className="marginLeftPropToRightSimulatorContent" style={{display:"block", textAlign:"start"}}>Rendimento i</label>

            <div className='flexButton'>
              <button className='firstFormButton' style={{borderRadius:"4px 0px 0px 4px"}}>PRÉ</button>
              <button className='formButton' >PÓS</button>
              <button className='formButton' style={{borderRadius:"0px 4px 4px 0px"}}>FIXADO</button>
            </div>
            
            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}}  >
              <label className='labelRightSimulatorFields'>Aporte</label>
            </div>

            <input type="text" id="" name=""/>
              
            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}} >
              <label className='labelRightSimulatorFields'>Aporte</label>
            </div>  
            
            <input type="text" id="" name=""/>

            <div style={{marginTop:"1.5rem", marginBottom:"1.5rem"}} >
              <label className='labelRightSimulatorFields'>Aporte</label>
            </div>

            <input type="text" id="" name=""/>
            
          </div>

        </div>

        <div className='buttonsForm'>

          <button className='cleanFieldsButton'> limpar Campos </button>
          <button className='simulationButton' > Simular</button>

        </div>
       
    </div>

  )
}