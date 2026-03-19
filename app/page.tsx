export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center px-6">
      <main className="flex flex-1 flex-col items-center justify-center text-center max-w-2xl">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          daaki
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-200">
          Email toolkit for Rust
        </p>

        <p className="mt-3 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
          IMAP4rev1/rev2, SMTP/LMTP, and RFC 5322 message parsing &amp; building
          — all implemented from scratch with no external protocol libraries.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Coming Soon
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/steelbrain/daaki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://crates.io/crates/daaki-imap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            daaki-imap
          </a>
          <a
            href="https://crates.io/crates/daaki-smtp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            daaki-smtp
          </a>
          <a
            href="https://crates.io/crates/daaki-message"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            daaki-message
          </a>
        </div>
      </main>

      <footer className="mt-auto pb-8 pt-16 text-sm text-zinc-400 dark:text-zinc-500">
        Made by{" "}
        <a
          href="https://aneesiqbal.ai"
          className="text-zinc-600 dark:text-zinc-300 hover:underline"
        >
          Anees Iqbal
        </a>
        {" "}(
        <a
          href="https://github.com/steelbrain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-300 hover:underline"
        >
          @steelbrain
        </a>
        )
      </footer>
    </div>
  );
}
