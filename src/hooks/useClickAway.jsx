import { useEffect, useRef, useState } from "react";

const useClickAway = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const onBodyClick = () => {
    setIsOpen(false);
  };

  const handleClick = (e) => {
    const refWrapper = ref.current;
    if (refWrapper && !refWrapper.contains(e.target)) {
      onBodyClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);

    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  });

  return { ref, isOpen, setIsOpen };
};

export default useClickAway;
