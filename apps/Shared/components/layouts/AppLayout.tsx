import { Route, Switch } from 'react-router-dom';
import { AestheticsLife } from '../../../AestheticsLife';
import { Auth } from '../../../Auth';
import { LoginForm } from '../../../Auth/components/LoginForm';
// import { Health } from '../../../Health';
// import { Training } from '../../../Training';
import { DetectAuthorization } from '../DetectAuthorization';
import { Notifications } from '../Notifications/Notifications';

export const AppLayout = () => {
  return (
    <DetectAuthorization>
       <Notifications>
        <Switch>
        <Route path='/aesthetics-life/:rest?' component={AestheticsLife} />
        <Route path='/auth/:rest?' component={Auth} />
        <Route path='/login/:rest?' component={LoginForm} />
        {/* <Route path='/training/:rest?' component={Training} />
        <Route path='/health/:rest?' component={Health} /> */}
        </Switch>
      </Notifications>
    </DetectAuthorization>
  );
};
