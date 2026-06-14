type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <main className="min-h-screen bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-cyan-300 md:text-5xl">
          Payment Successful
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Thank you for your purchase. Your template is now available for
          secure download.
        </p>

        <div className="mt-10">
          {sessionId ? (
            <a
              href={`/api/download?session_id=${sessionId}`}
              className="inline-block rounded-lg bg-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Download Template
            </a>
          ) : (
            <p className="text-sm text-red-300">
              Missing payment session. Please contact support.
            </p>
          )}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <a
            href="/"
            className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
          >
            ← Return to Homepage
          </a>
        </div>
      </div>
    </main>
  );
}