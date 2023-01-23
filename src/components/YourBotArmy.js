import React from "react";
import BotCard from "./BotCard";

//bots thatt have been selected by the user
function YourBotArmy({collection,clickHandler, deleteHandler }){
    return(
        <div className="ui segment inverted teal bot-army">
            <div className=" ui five column grid">
            {"Click on a bot to add it to your army"}
               <div className="bot-army-row">
               {collection.map((bot) => (
               <BotCard
                key={bot.id} 
                bot={bot} 
                clickHandler={clickHandler}
                deleteHandler={deleteHandler}/>
                ))}   
                </div>
            </div>
        </div>
    )
    
}

export default YourBotArmy;