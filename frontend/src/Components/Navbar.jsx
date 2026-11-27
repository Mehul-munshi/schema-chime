import { Link } from 'react-router-dom';

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200/50 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="font-[family:'Plus_Jakarta_Sans',sans-serif] text-[27px] font-bold text-black tracking-tight">Schema</span>
        <span className="font-[family:'Plus_Jakarta_Sans',sans-serif] text-[27px] font-bold text-indigo-600 tracking-tight">Chime</span>
        <span className="animate-live-pulse inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] ml-2 translate-y-[4px]" aria-label="Live" />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition w-64"
          />
        </div>
        <Link
          to="/endpoints/new"
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium flex items-center gap-2 hover:bg-indigo-700 shadow-sm shadow-indigo-500/30 transition"
          aria-label="Add API Endpoint"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add API Endpoint
        </Link>
      </div>
    </header>
  );
}
