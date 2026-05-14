export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Single-file deployment, zero dependencies
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Package Web Apps as<br />
          <span className="text-[#58a6ff]">Single-File Executables</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Drag, drop, and ship. Turn any web app into a portable redbean executable your users can run anywhere — no installs, no servers, no hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Packaging — $39/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="text-[#8b949e] text-xs ml-2">redbean-packager</span>
          </div>
          <div className="space-y-2 text-sm font-mono">
            <p><span className="text-[#58a6ff]">1.</span> <span className="text-[#c9d1d9]">Drop your</span> <span className="text-[#79c0ff]">dist/</span> <span className="text-[#c9d1d9]">folder here</span></p>
            <p><span className="text-[#58a6ff]">2.</span> <span className="text-[#c9d1d9]">Configure port, SSL, headers</span></p>
            <p><span className="text-[#58a6ff]">3.</span> <span className="text-[#c9d1d9]">Download</span> <span className="text-[#79c0ff]">myapp.com</span> <span className="text-[#c9d1d9]">(6 MB)</span></p>
            <p><span className="text-[#58a6ff]">4.</span> <span className="text-[#c9d1d9]">Run anywhere. Done.</span> <span className="text-[#3fb950]">✓</span></p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">PRO</div>
          <div className="text-4xl font-bold text-white mb-1">$39<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to ship fast</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited packages per month",
              "Drag-and-drop GUI builder",
              "Custom port & SSL config",
              "HTTP header management",
              "Lua scripting support",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">What is redbean?</h3>
            <p className="text-[#8b949e] text-sm">Redbean is an open-source single-file web server that runs on Linux, Mac, Windows, FreeBSD, and more — no installation required. Your entire web app lives inside one portable executable.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">What kinds of apps can I package?</h3>
            <p className="text-[#8b949e] text-sm">Any static web app — React, Vue, Svelte, plain HTML/CSS/JS. If it builds to a dist folder, you can package it. Dynamic backends are supported via Lua scripting inside redbean.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. No contracts, no lock-in. Your previously generated executables remain yours forever.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Redbean App Packager. Built for indie developers.</p>
      </footer>
    </main>
  );
}
