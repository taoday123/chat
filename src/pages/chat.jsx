"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';


function Chat(){
return(
    <FacebookProvider appId="841642247623204" chatSupport>
        <CustomChat pageId="125478187317781" minimized={true}/>
      </FacebookProvider>   
);
};
export default Chat