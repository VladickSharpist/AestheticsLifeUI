import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hello } from '../Shared/api/account/hello';

export const AestheticsLife = () => {
  useEffect(() => {
    (async function () {
      const response = await hello();
      console.log(response);
    })();
  }, []);
  return <Link to='/aesthetics'>Aesthetics Life Test link</Link>;
};
