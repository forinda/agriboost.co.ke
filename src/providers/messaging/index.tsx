import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";
import { wsURL } from "../../api/axios";
import useAuth from "../../shared/hooks/useAuth";
import messageReducer from "./reducers/messageReducer";
import { MessageActionTypes, MessageStateType } from "./types";

const MessageContext = createContext<{
  state: MessageStateType;
  dispatch: React.Dispatch<MessageActionTypes>;
}>({
  state: {} as MessageStateType,
  dispatch: () => null,
});

type MessageProviderProps = {
  children: React.ReactNode;
};

const MessageProvider = ({ children }: MessageProviderProps) => {
  const socketRef = React.useRef<Socket | null>(null);
  const renderRef = React.useRef<boolean>(false);
  const userId = new Date().getTime().toString().slice(-5);
  //
  const [state, dispatch] = React.useReducer(
    messageReducer,
    {} as MessageStateType
  );
  const {
    auth: { isAuthenticated },
  } = useAuth();

  React.useEffect(() => {
    // Setup socket connection then return a cleanup function
    if (!renderRef.current && isAuthenticated) {
      socketRef.current = io(wsURL);
      renderRef.current = true;
      console.log("socket created");
    }
    return () => {
      renderRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      socketRef.current!.on("connect", () => {
        console.log("connected");
        socketRef.current!.emit("addUser", userId);
      });
      socketRef.current!.on("disconnect", () => {
        console.log("disconnected");
      });
      socketRef.current!.on("onlineUsers", (data: any) => {
        console.log(JSON.stringify(data));
      });
      console.log(socketRef.current);
    }
  }, []);
  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
