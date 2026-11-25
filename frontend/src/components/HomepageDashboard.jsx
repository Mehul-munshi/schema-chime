import { useState } from 'react';

const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const LayoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002-2h2a2 2 0 002 2m-6 0V7a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.349C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LogOutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const NAV = [
  { icon: LayoutIcon, label: 'Dashboard', href: '#' },
  { icon: UsersIcon, label: 'Team', href: '#' },
  { icon: BarChartIcon, label: 'Analytics', href: '#' },
  { icon: SettingsIcon, label: 'Settings', href: '#' },
];

const STATS = [
  { label: 'Total Users', value: '12,340', change: '+12%', trend: 'up', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { label: 'Revenue', value: '$45,230', change: '+8.4%', trend: 'up', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { label: 'Active Sessions', value: '890', change: '-2.1%', trend: 'down', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { label: 'Conversion Rate', value: '3.4%', change: '+0.4%', trend: 'up', color: 'bg-orange-50 text-orange-600 border-orange-100' },
];

const QUICK_ACTIONS = [
  { label: 'Create Project', icon: BarChartIcon },
  { label: 'Invite Team', icon: UsersIcon },
  { label: 'View Reports', icon: LayoutIcon },
  { label: 'Account Settings', icon: SettingsIcon },
];

const RECENT = [
  { user: 'Sarah Chen', action: 'created a new project', time: '2m ago', avatar: 'SC' },
  { user: 'Marcus Bell', action: 'updated dashboard settings', time: '15m ago', avatar: 'MB' },
  { user: 'Elena Ruiz', action: 'shared analytics report', time: '1h ago', avatar: 'ER' },
  { user: 'David Park', action: 'joined the workspace', time: '3h ago', avatar: 'DP' },
];

const UPCOMING = [
  { title: 'Team meeting', time: 'Today 3:00 PM', color: 'bg-indigo-100 text-indigo-700' },
  { title: 'Design review', time: 'Tomorrow 10:00 AM', color: 'bg-emerald-100 text-emerald-700' },
  { title: 'Client call', time: 'Friday 2:00 PM', color: 'bg-orange-100 text-orange-700' },
];

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
};

export default function HomepageDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200/50 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className="p-2 rounded-md text-slate-500 hover:bg-slate-100 md:hidden"
            aria-label="Toggle sidebar"
          >
            <MenuIcon />
          </button>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Schema<span className="text-indigo-600">Chime</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="relative p-2 rounded-md text-slate-500 hover:bg-slate-100" aria-label="Notifications">
            <BellIcon />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 border-2 border-white" />
          </button>
          <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-slate-900">Alex Rivera</p>
              <p className="text-xs text-slate-500">Product Designer</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-semibold">
              AR
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col">
            <div className="p-6 border-b border-slate-200">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Navigation</span>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
              {NAV.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </a>
              ))}
            </nav>
            <div className="px-3 py-4 border-t border-slate-200">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-rose-600 hover:bg-rose-50 transition"
              >
                <LogOutIcon />
                Sign out
              </a>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <main className="flex-1 min-h-[calc(100vh-4rem)] overflow-y-auto p-6 md:ml-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{getGreeting()}, Alex</h1>
                <p className="text-sm text-slate-500">
                  {new Date().toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow-sm shadow-indigo-500/30 transition">
                  New Project
                </button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition">
                  Export
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                      {stat.trend === 'up' ? <TrendingUpIcon /> : <ArrowRightIcon />}
                    </div>
                  </div>
                  <p className={`text-xs font-medium mt-2 ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {stat.change} vs last month
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
              <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    See all
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {QUICK_ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href="#"
                      className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-indigo-200 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <action.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{action.label}</span>
                      </div>
                      <ChevronRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-6">Upcoming</h2>
                <div className="space-y-4">
                  {UPCOMING.map((item) => (
                    <div key={item.title} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <p className="text-xs font-medium text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.time}</p>
                      <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold ${item.color}`}>
                        Scheduled
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-700">
                  View all
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        User
                      </th>
                      <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {RECENT.map((item) => (
                      <tr key={item.user + item.time} className="hover:bg-slate-50 transition">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
                              {item.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">{item.user}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-sm text-slate-600">{item.action}</td>
                        <td className="py-4 text-sm text-slate-500">{item.time}</td>
                        <td className="py-4 text-right">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
      </main>
        </div>
    </div>
  );
}


