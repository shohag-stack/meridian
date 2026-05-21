export function SplitWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden leading-[1.15] mr-[0.25em]"
        >
          <span className="word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}