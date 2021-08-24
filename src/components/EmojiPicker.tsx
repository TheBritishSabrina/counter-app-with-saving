import { useState } from "react";

const emojis = [":)", ":(", ":|"];

export default function EmojiPicker(): JSX.Element {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [storedEmoji, setStoredEmoji] = useState<string[]>([]);

  const handleEmojiSelect = (emoji: string) => {
    setChosenEmoji(emoji);
    setStoredEmoji((prev) => [...prev.slice(-1), emoji]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your picked emojis: {storedEmoji}</p>
      <p>Most recent emoji: {chosenEmoji}</p>
      {emojis.map((emoji, index) => (
        <button onClick={() => handleEmojiSelect(emoji)} key={index}>
          {emoji}
        </button>
      ))}
    </>
  );
}
