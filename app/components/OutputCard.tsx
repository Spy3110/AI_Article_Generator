"use client";
type OutputCardProps = {
  article: string;
};

export default function OutputCard({ article }: OutputCardProps) {
  if (!article) return null;

  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-6 mt-8 max-w-xl w-full text-black">
      <h2 className="text-xl font-bold mb-2">Generated Article</h2>
      <p className="whitespace-pre-line">{article}</p>
    </div>
  );
}