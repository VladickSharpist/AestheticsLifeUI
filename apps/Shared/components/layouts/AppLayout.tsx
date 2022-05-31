import { Route, Switch } from 'react-router-dom';
import { AestheticsLife } from '../../../AestheticsLife';

export const AppLayout = () => {
  return (
    <Switch>
      <Route path='/aesthetics-life/:rest?' component={AestheticsLife} />
    </Switch>
  );
};
