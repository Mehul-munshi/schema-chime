import PropTypes from 'prop-types';

export default function Dashboard({ endpoints }) {
  return (
    <main className="ml-[10px] mr-[10px] pt-6 pb-10 space-y-6">
      <div className="flex gap-4 items-stretch">
        <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Monitored Endpoints</h3>
          <p className="text-2xl font-bold text-indigo-600">12</p>
        </div>
        <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Schema Healthy</h3>
          <p className="text-2xl font-bold text-green-600">10</p>
        </div>
        <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Drift Detected</h3>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            Monitored Endpoints Table
            <span className="ml-auto text-xs font-medium text-slate-500">
              {endpoints.length} endpoint{endpoints.length !== 1 ? 's' : ''}
            </span>
          </h2>
        </div>
        <div className="overflow-x-auto p-4">
          {endpoints.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No endpoints found matching your search.
            </div>
          ) : (
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-slate-600">Method</th>
                  <th className="px-4 py-3 font-medium text-slate-600">Endpoint URL</th>
                  <th className="px-4 py-3 font-medium text-slate-600">Schema Status</th>
                  <th className="px-4 py-3 font-medium text-slate-600">Interval</th>
                  <th className="px-4 py-3 font-medium text-slate-600">Last Checked</th>
                  <th className="px-4 py-3 font-medium text-slate-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {endpoints.map((ep) => (
                  <tr key={ep.id} className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-medium text-slate-900">{ep.method}</td>
                    <td className="px-4 py-3 text-slate-700">{ep.url}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${ep.status === 'Healthy' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {ep.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{ep.interval}</td>
                    <td className="px-4 py-3 text-slate-700">{ep.lastChecked}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition">Inspect Diff</button>
                        <button className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition">Run Now</button>
                        <button className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-red-50 text-red-600 hover:text-red-700 transition">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}

Dashboard.propTypes = {
  endpoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['Healthy', 'Drift Detected']).isRequired,
      interval: PropTypes.string.isRequired,
      lastChecked: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Dashboard.defaultProps = {
  endpoints: [],
};
