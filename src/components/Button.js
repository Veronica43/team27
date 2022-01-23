import "../styles/Button.scss";

export const Button = ({ text, method }) => (
  <button onClick={method}>{text}</button>
);
