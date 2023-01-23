import React from "react";

function BotCard(bot){

    return (
        <div className=" column">
          <div
            className="card"
            onClick={() => console.log("add code to connect event listener")}
          >
            <div className="image">
              <img alt="oh no!" src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name} {/*botType*/}
              </div>
    
              <div className="text-wrap">
                <small>{bot.catchphrase}</small>
              </div>
            </div>
            {/* <div className="extra content">
              <span>
                <i className="icon heartbeat" />
                {bot.health}
              </span>
    
              <span>
                <i className="icon lightning" />
                {bot.damage}
              </span>
              <span>
                <i className="icon shield" />
                {bot.armor}
              </span>
            </div> */}
          </div>
        </div>
      );
    
    };
    
    export default BotCard;
    
