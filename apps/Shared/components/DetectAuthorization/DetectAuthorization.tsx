import { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../reducers/user/actions';
import { getUserAccessInfo } from '../../utils/user/storageUserData';

interface IProps {}

type TProps = PropsWithChildren<IProps>;

export const DetectAuthorization = ({ children }: TProps) => {
  const accessInfo = getUserAccessInfo();
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessInfo?.accessToken && accessInfo.refreshToken) {
      dispatch(setUserData());
    }
  }, [accessInfo?.accessToken, accessInfo?.refreshToken]);
  return <div>{children}</div>;
};
