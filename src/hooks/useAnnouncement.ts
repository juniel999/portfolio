import { useState, useCallback } from "react";

export const useAnnouncement = () => {
  const [message, setMessage] = useState("");
  const [assertive, setAssertive] = useState(false);

  const announce = useCallback((newMessage: string, isAssertive = false) => {
    setMessage(newMessage);
    setAssertive(isAssertive);
  }, []);

  return {
    message,
    assertive,
    announce,
  };
};
