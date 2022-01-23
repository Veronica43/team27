import '../styles/Points.scss';
import { pointValues } from '../assets/points';

export const Points = ({ newValue }) => {

  return (
    <div className="points-container">
      <h3>Points in this game</h3>
      <ul>
        {
          pointValues.map(pointItem => <li
            key={ pointItem.id }
            className={ `${pointItem.id === newValue ? 'active' : null }` }
          >
            { pointItem.value } points
          </li>)
        }
      </ul>
    </div>
  );
}
