import React from "react";
const Channels = React.lazy(
  () => import("@social-pages/Chat/components/Channels")
);
const ChatSidebarSearch = React.lazy(
  () => import("@social-pages/Chat/components/ChatSidebarSearch")
);
const Conversations = React.lazy(
  () => import("@social-pages/Chat/components/Conversations")
);

const ChatSidebar = () => {
  return (
    <div className="border-r p-4 min-h-screen sticky top-28">
      {/* Search */}
      <ChatSidebarSearch />
      <hr />
      <div className="grid grid-rows-2">
        {/* Conversations */}
        <Conversations />
        {/* <hr /> */}
        {/* Channels */}
        <Channels />
      </div>
    </div>
  );
};

export default ChatSidebar;
