import { useEffect } from "react"
import { createFunction } from "../utils/Chat"

export default function ChatRoom() {
    useEffect(() => {
        const connection = createFunction();
        connection.connect();

        return ()=>{
            connection.disconnect()
        }
        
    },[])
    return <h3>Welcome to the chat room</h3>
}