import { useEffect, useState } from "react";

interface AnnouncementProps {
  message: string;
  assertive?: boolean;
}

const Announcement = ({ message, assertive = false }: AnnouncementProps) => {
  const [previousMessage, setPreviousMessage] = useState(message);

  useEffect(() => {
    if (message !== previousMessage) {
      setPreviousMessage(message);
    }
  }, [message, previousMessage]);

  return (
    <div
      role="status"
      aria-live={assertive ? "assertive" : "polite"}
      aria-atomic="true"
      className="sr-only"
    >
      {previousMessage}
    </div>
  );
};

export default Announcement;
