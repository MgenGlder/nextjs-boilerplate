export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1><a href="https://github.com/MgenGlder/P2-Solar-Mini-Grid-Design-Optimization">P2 Solar Mini-Grid: Design Optimization</a></h1>

        {/* Brief Project Description */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] border-thick w-full">
          <h2 className="font-bold">Description:</h2>
          <p className="mb-4">
          The state-of-the-art in mini-grid design is poor. Most of it runs on rules of thumb, and the few software tools that exist are notoriously oversimplified and return useless results. This leads to over- and under-sized mini-grids that are unprofitable and/or don&apos;t provide reliable power to communities. Renewvia, like many companies, has begun developing small, Excel-based software tools to simulate mini-grid performance. A talented software developer with an interest in machine learning could build on the simulation work already done to test different convex optimization tools to create an automatic mini-grid design tool. Users would input the location of the mini-grid, as well as information about potential customers and financing. The model would, ideally, output a mini-grid design optimized for 20-year IRR, including a shopping list and financial model. We built a proof-of-concept last year that used a genetic algorithm to optimize design that produced promising results. Refining and expanding that tool could finally bring engineering maturity to the mini-grid industry.
          </p>
        </section>

        {/* Team Members and Roles */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] border-thick">
          <h2 className="font-bold">Team Members and Roles:</h2>
          <ul className="list-inside list-disc mb-4">
            <li>Jessica - Data Engineer - Data analytics and data engineering</li>
            <li>Earth - Back-End Engineer - 3 years FT Engineer.</li>
            <li>Pranav - Front-End Engineer - Angular, React, JavaScript, Java, Python, C++, HTML; AWS </li>
            <li>Joseph - Back-End Engineer - JavaScript, Java, Python, C++, AWS, MySQL</li>
            <li>Kunle - Front-End Engineer - Python, Go, Java, Javascript, React</li>
          </ul>
        </section>

        {/* Project Goal */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] border-thick">
          <h2 className="font-bold">Project Goal:</h2>
          <p className="mb-4">
            Improve the design optimization of mini-grids by creating an automatic mini-grid design tool that outputs a mini-grid design optimized for 20-year IRR, including a shopping list and financial model.
          </p>
        </section>

        {/* Lighthouse Scores */}
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] border-thick">
          <h2 className="font-bold">Lighthouse Scores Desktop:</h2>
          <ul className="list-inside list-decimal">
            <li>Performance: 94</li>
            <li>Accessibility: 100</li>
            <li>Best Practices: 96</li>
            <li>SEO: 100</li>
          </ul>
        </section>
        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] border-thick">
          <h2 className="font-bold">Lighthouse Scores Mobile:</h2>
          <ul className="list-inside list-decimal">
            <li>Performance: 77</li>
            <li>Accessibility: 100</li>
            <li>Best Practices: 96</li>
            <li>SEO: 100</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
