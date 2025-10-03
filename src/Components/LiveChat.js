import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);


    useEffect(() => {
        const i = setInterval(() => {
            //api polling
            // console.log("api polling"); //for storing the data , we are using redux store. because we dont have to bloat up our state variables. 
            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomMessage(30) + "🚀",
            }))
        }, 1000);
        return () => clearInterval(i);

    }, [])

    return <div >
        {/* //Dont use index as keys because of performance.  */}
        <div className='live-chat-container'>
            {chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}
        </div>
        <form className="add-input-box" onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage(
                {
                    name: "Jyothi sai Priya",
                    message: liveMessage, //no need of the {} braces because it is already jsx. 
                }
            ))
            setLiveMessage("")
        }}>
            <input placeholder='Enter your message' type="text"
                value={liveMessage}
                onChange={((e) => setLiveMessage(e.target.value))}
            />
            <button>Send</button>
        </form>
    </div>

}

export default LiveChat;