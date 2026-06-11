
// import { useState } from "react";
import Dialogue from "./components/Dialogue";
// import ChatRoom from "./components/ChatRoom";
function App() {
  // const [isShow, setIsShow] = useState(true);
  return (
    <div>
      {/* <button onClick={()=>setIsShow(pre=>!pre)}>{ isShow ? 'Hide':'Show'}</button>
      {isShow && <ChatRoom />} */}
      <Dialogue/>
    </div>
  )
}

export default App
