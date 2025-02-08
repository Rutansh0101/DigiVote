import { useEffect, useState } from "react";

const BotPressChat = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the BotPress webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    script1.onload = () => {
      console.log("BotPress webchat script loaded.");
    };
    script1.onerror = () => {
      console.error("Failed to load BotPress webchat script.");
    };
    document.body.appendChild(script1);

    // Load the BotPress configuration script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/02/07/04/20250207041500-NVN4U64F.js";
    script2.async = true;
    script2.onload = () => {
      console.log("BotPress configuration script loaded.");
    };
    script2.onerror = () => {
      console.error("Failed to load BotPress configuration script.");
    };
    document.body.appendChild(script2);

    script1.onload = () => {
      script2.onload = () => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            host: "https://files.bpcontent.cloud/2025/02/07/04/20250207041500-NVN4U64F.js",
            botId: "90464fde-4726-4836-a270-b466ed92e377", // Replace with your actual bot ID
            Language: 'hi'
          });
          setIsScriptLoaded(true);
        } else {
          console.error("BotPress webchat is not defined.");
        }
      };
    };
  }, []);

  const openChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    } else {
      console.error("BotPress webchat is not initialized.");
    }
  };

  return (
    <></>
  );
};

export default BotPressChat;