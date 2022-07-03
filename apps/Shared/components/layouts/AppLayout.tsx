import { Route, Switch } from 'react-router-dom';
import { AestheticsLife } from '../../../AestheticsLife';
import { LoginForm } from '../../../Auth/components/LoginForm';
import { Health } from '../../../Health';
import { Training } from '../../../Training';
import { DetectAuthorization } from '../DetectAuthorization';

export const AppLayout = () => {
  return (
    <DetectAuthorization>
      <Switch>
        <Route path='/aesthetics-life/:rest?' component={AestheticsLife} />
        <Route path='/login/:rest?' component={LoginForm} />
        <Route path='/training/:rest?' component={Training} />
        <Route path='/health/:rest?' component={Health} />
      </Switch>
    </DetectAuthorization>
  );
};
