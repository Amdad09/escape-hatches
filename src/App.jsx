
import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={()=>setIsShow(pre=>!pre)}>{ isShow ? 'Hide':'Show'}</button>
      {isShow && <ChatRoom />}
    </div>
  )
}

export default App
