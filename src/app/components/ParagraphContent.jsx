function ParagraphContent({ children }) {
  const paragraphs = children.split("\n").filter((p) => p.trim() !== "");
  return (
    <div className="text-justify">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="py-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default ParagraphContent;
