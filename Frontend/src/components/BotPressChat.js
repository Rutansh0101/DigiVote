import { useEffect, useState } from "react";

const BotPressChat = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English

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
          });
          setIsScriptLoaded(true);
        } else {
          console.error("BotPress webchat is not defined.");
        }
      };
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.botpressWebChat) {
      // Send language selection event
      window.botpressWebChat.sendEvent({
        type: "set-language",
        language: language === "hi" ? "hi" : "en"
      });
    }
  }, [language, isScriptLoaded]);

  const openChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    } else {
      console.error("BotPress webchat is not initialized.");
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <div className="fixed bottom-20 right-4">
        <button
          onClick={() => handleLanguageChange("hi")}
          className={`bg-gray-200 text-black p-2 rounded-full hidden shadow-lg m-1 ${language === "en" ? "bg-blue-600 text-white" : ""}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`bg-gray-200 text-black p-2 rounded-full hidden shadow-lg m-1 ${language === "hi" ? "bg-blue-600 text-white" : ""}`}
        >
          हिंदी
        </button>
      </div>
    </>
  );
};

export default BotPressChat;