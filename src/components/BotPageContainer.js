import React, {useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const url = "https://vercel-json-server-two.vercel.app/bots"

function BotPageContainer(){
    const [bots, setBots]= useState([])
    const [army, setArmy]= useState([])

    function enlist(bot) {
        if (army.includes(bot)) 
        return;setArmy((army) => [...army, bot]);
      }
      function retire(bot) {
        setArmy((army) => army.filter((it) => it.id !== bot.id));
      }
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setBots(data));
      }, []);
    
      function handleDelete(bot) {
        fetch(`url${bot.id}`, {
          method: "DELETE",
        }).then(() => {
          setBots((bots) => bots.filter((it) => it.id !== bot.id));
          setArmy((army) => army.filter((it) => it.id !== bot.id));
        });
      } 
    
      
    return (
        <div>
          <YourBotArmy collection={army} clickHandler={retire} handleDelete={handleDelete} />
          <BotCollection collection={bots} clickHandler={enlist} handleDelete={handleDelete} />
        </div>
        );
     }
      
      
    
    

export default BotPageContainer;