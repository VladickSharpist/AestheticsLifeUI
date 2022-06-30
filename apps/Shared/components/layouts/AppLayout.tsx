import { Route, Switch } from 'react-router-dom';
import { AestheticsLife } from '../../../AestheticsLife';
import { Auth } from '../../../Auth';
import { LoginForm } from '../../../Auth/components/LoginForm';
import { DetectAuthorization } from '../DetectAuthorization';

export const AppLayout = () => {
  return (
    <DetectAuthorization>
      <Switch>
        <Route path='/aesthetics-life/:rest?' component={AestheticsLife} />
        <Route path='/auth/:rest?' component={Auth} />
      </Switch>
    </DetectAuthorization>
  );
};
