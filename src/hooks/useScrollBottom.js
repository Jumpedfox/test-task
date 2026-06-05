import { useState, useCallback } from "react";

export const useScrollBottom = (ref) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
    setIsScrolledToBottom(atBottom);
  }, [ref]);

  return { isScrolledToBottom, handleScroll };
};
