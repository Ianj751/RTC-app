import { auth } from "./Auth";

function Bubble({photourl, text, timestamp, uid, username}) {
    let side;
    uid === auth.currentUser.uid ? side = "chat-end" : side = "chat-start";
    
    return(
        <div className={`chat ${side}`}>
            <div className="chat-image avatar p-0">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={photourl} />
                </div>
            </div>
        <div className="chat-header">
            {username}
        </div>
        <div className="chat-bubble max-w-72" style={{overflowWrap: 'break-word', wordBreak: 'break-all'}}>{text}</div>
            {/*<div className="chat-footer opacity-50">
                <time className="text-xs opacity-50">{JSON.stringify(new Date(timestamp.seconds * 1000))}</time>
            </div>*/}
        </div>
    )
};


export default Bubble;