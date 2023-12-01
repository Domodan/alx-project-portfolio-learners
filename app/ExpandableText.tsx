"use client";
import { useState } from "react";
interface Props {
  children: string;
  max: number;
}

const ExpandableText = ({ children, max = 10 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= max) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, max);

  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpanded(!isExpanded)}>
        <span className="text-blue-500">{isExpanded ? "Less" : "More"}</span>
      </button>
    </p>
  );
};

export default ExpandableText;
