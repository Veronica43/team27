import PropTypes from 'prop-types';
import '../styles/Button.scss';

export const Button = ({ text, method }) => (
  <button onClick={ method }>{ text }</button>
);

Button.propTypes = {
  text: PropTypes.string,
  method: PropTypes.func
};
