import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import { LoginForm } from "./components/LoginForm"
import { RegistrationForm } from "./components/RegistrationForm"

export const Auth = () => {
    const { path, url } = useRouteMatch();

    return(
        <Switch>
         <Route path={`${path}/login`} component={LoginForm}/>
         <Route path={`${path}/registration`} component={RegistrationForm} />
         <Redirect to={`${url}/login`}/>
        </Switch>
    )
}