import react, {useState, useEffect, useContext} from "react";
import api from '../../services/api'
import CurrencyFormat from 'react-currency-format';


import './index.css'
import { FormContext } from "../../context/FormContext";

export default function SimulatorForm(){

  const { yieldInfo,  indexingTypes, changeSimulatorInfo }= useContext(FormContext)
  
  //FORM FIELDS
  const [yieldButton, setYieldButton] = useState('brutoActive') // Botão de Rendimento
  const [indexingTypesButton, setIndexingTypesButton] = useState('posActive') // Botão Tipos de Indexação
  const [initialContribution, setInitialContribution] = useState('') // Aporte Inicial
  const [deadlineInMonths, setDeadlineInMonths] = useState('') // Prazo (em meses)
  const [ipca, setIpca] = useState ('') // IPCA (ao ano)
  const [monthContribution, setMonthContribution] = useState('') // Aporte Mensal
  const [profitability, setProfitability] = useState('') // Rentabilidade
  const [cdi, setCdi] = useState('') // CDI (ao vivo)

  
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`indicadores`);
      setCdi(data[0].valor)
      setIpca(data[1].valor)
      
    })();
  }, []);
  


  function simulate (){
  
    if (yieldButton === 'brutoActive' && indexingTypesButton === 'preActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }

    if (yieldButton === 'brutoActive' && indexingTypesButton === 'posActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }

    if (yieldButton === 'liquidoActive' && indexingTypesButton === 'preActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }

    if (yieldButton === 'liquidoActive' && indexingTypesButton === 'posActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }

    if (yieldButton === 'liquidoActive' && indexingTypesButton === 'fixedActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }

    if (yieldButton === 'brutoActive' && indexingTypesButton === 'fixedActive'){
      changeSimulatorInfo(yieldButton, indexingTypesButton)
    }
  }

  function cleanAllFields(){
    setInitialContribution('')
    setDeadlineInMonths('')
    setMonthContribution('')
    setProfitability('')
    
  }

  function brazilianMoneyMask(value){
   return (value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) )
  }

  return(
    <div className="formInputs" >
        <h2>Simulador</h2>
        <div className='content' >

          <div className='leftSimulatorContent' style={{marginRight:"10px"}}>

            <div className="divTitleLabels" >
            <label >Rendimento </label>
            <img src="https://img.icons8.com/material-outlined/24/000000/info.png"/>
            </div>
            

            <div className='flexButton'>
              <button className={yieldButton === 'brutoActive'? 'isActive' : 'formButton'} onClick={()=> setYieldButton('brutoActive')} style={{borderRadius:"4px 0px 0px 4px", width:"100%"}}>Bruto</button>
              <button className={yieldButton === 'liquidoActive'? 'isActive' : 'formButton'} onClick={()=> setYieldButton('liquidoActive')} style={{borderRadius:"0px 4px 4px 0px",width:"100%"}}>Líquido</button>
            </div>

            <div className="labelFields"  >
              Aporte Inicial
            </div>

            {/* <input type="text" id="" name="" onChange={event => setInitialContribution(brazilianMoneyMask(event.target.value))} value={initialContribution} /> */}
            <CurrencyFormat thousandSeparator={true} onChange={e => setInitialContribution(e.target.value)} value={initialContribution} prefix={'R$ '} placeholder="R$ 1,500.00" />
           

            <div className="labelFields" >
              Prazo (em meses)
            </div>  

            {/* <input type="text" id="" name=""/> */}
            <CurrencyFormat  className="inputMaxWidth" onChange={e => setDeadlineInMonths(e.target.value)} value={deadlineInMonths}  placeholder="12" />

            <div className="labelFields" >
              IPCA (ao ano)
            </div>

            <input type="text" readOnly  id="" name="" value={ipca + "%"}/>
              

          </div>

          <div className='rightSimulatorContent'>

          <div className="divTitleLabelsRight">
             <label className="marginLeftPropToRightSimulatorContent" >Rendimento </label>
              <img src="https://img.icons8.com/material-outlined/24/000000/info.png"/>
            </div>
            
          

            <div className='flexButtonWithJustifyContent'>
              <button className={indexingTypesButton=== 'preActive'? 'isActive' : 'firstFormButton'} onClick={()=> setIndexingTypesButton('preActive')} style={{borderRadius:"4px 0px 0px 4px"}}> PRÉ</button>
              <button className={indexingTypesButton=== 'posActive'? 'isActive' : 'formButton'} onClick={()=> setIndexingTypesButton('posActive')} >PÓS</button>
              <button className={indexingTypesButton=== 'fixedActive'? 'isActive' : 'formButton'} onClick={()=> setIndexingTypesButton('fixedActive')} style={{borderRadius:"0px 4px 4px 0px"}}>FIXADO</button>
            </div>
            
            <div className="labelFields"  >
              <label className='labelRightSimulatorFields'>Aporte Mensal</label>
            </div>

            <CurrencyFormat  className="inputMaxWidth" thousandSeparator={true} value={monthContribution} onChange={e => setMonthContribution(e.target.value)} prefix={'R$ '} placeholder="R$ 200.00" />
              
            <div className="labelFields" >
              <label className='labelRightSimulatorFields'>Rentabilidade</label>
            </div>  
            
            {/* <input className="inputMaxWidth" type="text" id="" name=""/> */}
            <CurrencyFormat  className="inputMaxWidth" thousandSeparator={true} onChange={e => setProfitability(e.target.value)} value={profitability} suffix={' %'} placeholder="20%" />

            <div className="labelFields" >
              <label className='labelRightSimulatorFields'>CDI (ao vivo)</label>
            </div>

            <input className="inputMaxWidth" readOnly type="text" id="" name="" value={cdi + "%"}/>
            
          </div>

        </div>

        <div className='buttonsForm'>

          <button className='cleanFieldsButton' onClick={()=> cleanAllFields()} > limpar Campos </button>
          <button className='simulationButton' onClick={()=> simulate()} > Simular</button>

        </div>
      
    </div>

  )
}