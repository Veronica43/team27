import '../styles/Profile.scss';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';

export const Profile = ({ points }) => {
  //const { userName } = useContext(UserContext);
  const userName = 'sariten';
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch(`https://robohash.org/${userName}`)
      .then(result => {
        setUrl(result.url);
      })
      .catch(error => console.log(error))
      //eslint-disable-next-line
  }, []);

  return (
    <div className="profile-box">
      <h3>{ userName }</h3>
      <div className="image">
        <img src={ url } alt="Random generated robot pic" />
      </div>
      <p className="profile-points">
        <span>20</span>
        <span>points</span>
      </p>
    </div>
  );
};
