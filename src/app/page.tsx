export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">MemoryForge</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        Free, open-source working memory training. Evidence-based exercises for number retention,
        mental math, and sentence comprehension.
      </p>
      <p className="mt-8 text-sm text-gray-400">
        This is a screening and training tool, not a diagnostic instrument. Always consult a
        licensed professional for clinical evaluation.
      </p>
    </main>
  );
}
