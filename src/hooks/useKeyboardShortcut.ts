import { useEffect, useCallback } from "react";

type KeyboardShortcut = {
  key: string;
  callback: () => void;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
};

export const useKeyboardShortcut = ({
  key,
  callback,
  ctrlKey = false,
  altKey = false,
  shiftKey = false,
}: KeyboardShortcut) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrlKey &&
        event.altKey === altKey &&
        event.shiftKey === shiftKey
      ) {
        event.preventDefault();
        callback();
      }
    },
    [key, callback, ctrlKey, altKey, shiftKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};
