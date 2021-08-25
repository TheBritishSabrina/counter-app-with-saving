import { useState } from "react";

const emojis = [":)", ":(", ":|"];

export default function EmojiPickerSingleUseState(): JSX.Element {
  const [storedEmojis, setStoredEmojis] = useState<string[]>([]);

  const handleEmojiSelect = (emoji: string) => {
    setStoredEmojis((prev) => [...prev, emoji]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your picked emojis: {storedEmojis}</p>
      <p>Most recent emoji: {storedEmojis.slice(-1)}</p>
      {emojis.map((emoji, index) => (
        <button onClick={() => handleEmojiSelect(emoji)} key={index}>
          {emoji}
        </button>
      ))}
    </>
  );
}
