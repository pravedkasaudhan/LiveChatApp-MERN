import React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';

const Home = () => {
    const [chat, setChat] = useState();
    const fetchData=async()=>{
        const {data} = await axios.get('/api/chat');
        console.log(data);
        setChat(data);
    }

    useEffect(() => {
       fetchData();
    }, []);
    return (
        <div>
            Home
            {
               chat && chat.map(chat=>{
                   return <div key={chat._id}>{chat.chatName}</div>
                })
            }
        </div>
    )
}

export default Home
