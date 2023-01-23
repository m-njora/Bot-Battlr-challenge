import React from "react";
import BotCard from "./BotCard";
//where bots are displayed
function BotCollection({ collection, clickHandler, handleDelete }) {

        return(
            <div className="bot profiles">
                {"click on a bot to add it to your army."}
                <div className="row">
                     {collection.map((bot) => (
                    <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
                     ))}
                </div>
            </div>
        );
    
    
};

export default BotCollection;