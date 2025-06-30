"use client";

import { useEffect, useState } from "react";

function SpringAnimateText({ children, delay = 0, speed = 50 }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText("");

    const timeout = setTimeout(() => {
      let index = 0;
      let currentText = "";

      const interval = setInterval(() => {
        currentText += children[index];
        setText(currentText);
        index++;

        if (index >= children.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [children, delay, speed]);

  return (
    <>
      {text !== children ? <span>{text}</span> : <></>}
      <span className={text !== children ? "sr-only" : ""}>{children}</span>
    </>
  );
}

export default SpringAnimateText;
