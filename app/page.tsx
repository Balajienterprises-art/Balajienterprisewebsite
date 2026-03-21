import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Coming Soon Background"
          fill
          className="object-cover opacity-60 blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Main Content Card */}
      <main className="relative z-10 w-full max-w-2xl px-6 py-12">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl space-y-10 text-center animate-zoom-in">
          
          {/* Brand/Logo */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-[0.4em] text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              Balaji Electrical
            </h2>
            <div className="h-0.5 w-12 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Powerful</span> is Coming.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
              We&apos;re currently working hard to power your tomorrow. Our new website is currently under construction and will be live soon.
            </p>
          </div>

          {/* Call to Action - Simple placeholder */}
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Notify Me
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <footer className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Under Construction
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </footer>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      </main>
    </div>
  );
}
