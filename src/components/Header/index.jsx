import "./index.css";

export default function Header(props) {
  const { title } = props;

  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}
