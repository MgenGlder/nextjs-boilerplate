export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>P2 Solar Mini-Grid: Design Optimization</h1>

        {/* Brief Project Description */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold">Description:</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </section>

        {/* Team Members and Roles */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold">Team Members and Roles:</h2>
          <ul className="list-inside list-disc mb-4">
            <li>Jessica - Lorem ipsum dolor sit amet</li>
            <li>Earth - Full Stack Engineer</li>
            <li>Pranav - Lorem ipsum dolor sit amet</li>
            <li>Joseph - Lorem ipsum dolor sit amet</li>
            <li>Tyler - Lorem ipsum dolor sit amet</li>
          </ul>
        </section>

        {/* Project Goal */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold">Project Goal:</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi
          </p>
        </section>

        {/* Lighthouse Scores */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold">Lighthouse Scores Desktop:</h2>
            <ul className="list-inside list-decimal">
              <li>Performance: 94</li>
              <li>Accessibility: 100</li>
              <li>Best Practices: 96</li>
              <li>SEO: 100</li>
            </ul>
          <h2 className="font-bold">Lighthouse Scores Mobile:</h2>
          <ul className="list-inside list-decimal">
            <li>Performance: 77</li>
            <li>Accessibility: 100</li>
            <li>Best Practices: 96</li>
            <li>SEO: 100</li>
          </ul>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Find the repo
          </a>
        </div>
      </main>
    </div>
  );
}
