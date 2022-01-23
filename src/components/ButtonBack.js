import {Link} from 'react-router-dom';
import '../styles/ButtonBack.scss';

export const ButtonBack = () => (
  <div className='getBack'>
      <Link to='/game'>Get back</Link>
  </div>
);
