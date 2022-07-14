import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { PropsWithChildren, useEffect, useState } from "react";

interface IProps {}

type TProps = PropsWithChildren<IProps>;

export const Notifications = ({children} : TProps) =>{
    console.log("hui")
    const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:7103/notifications')
    .build();

    async function start() {
      console.log("run");
        try {
            await connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    };

    connection.onclose(async () => {
      console.log("run1");
        await start();
    });

    start();

    return(
    <>
      {children}
    </>);
}