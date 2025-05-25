import { useState, useEffect, useRef } from 'react';

export function useTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex];
    const shouldType = !isDeleting && displayText.length < currentText.length;
    const shouldDelete = isDeleting && displayText.length > 0;
    const shouldPause = !isDeleting && displayText.length === currentText.length;
    const shouldSwitchText = isDeleting && displayText.length === 0;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (shouldType) {
      // Type the next character
      timerRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (shouldDelete) {
      // Delete a character
      timerRef.current = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (shouldPause) {
      // Pause before deleting
      timerRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (shouldSwitchText) {
      // Switch to the next text
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [texts, typingSpeed, deletingSpeed, delayBetween, displayText, isDeleting, textIndex]);

  return displayText;
}