import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { PropsWithChildren, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getUserAccessInfo } from "../../utils/user/storageUserData";
import 'react-toastify/dist/ReactToastify.css';

interface IProps {}

type TProps = PropsWithChildren<IProps>;

export const Notifications = ({children} : TProps) =>{
    const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7119/notifications",{
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        accessTokenFactory: () => getUserAccessInfo()?.accessToken || ''
    })
    .withAutomaticReconnect()
    .build();

    async function start() {
        try {
            await connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    };  

    start();

    return(
    <>
      {children}
      <ToastContainer />
    </>);
}