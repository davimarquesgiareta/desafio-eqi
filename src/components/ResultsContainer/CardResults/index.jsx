import './index.css'

export default function CardResults(props) {
  const { valueType, price} = props
  return (
    <div className="card">
      <h3>{valueType}</h3>
      <label>{price} </label>
    </div>
  );
}
