import "./index.css";

export default function CardResults(props) {
  const { valueType, price, labelColor } = props;
  return (
    <div className="card">
      <h3>{valueType}</h3>
      <label style={{color: labelColor}}>{price} </label>
    </div>
  );
}
