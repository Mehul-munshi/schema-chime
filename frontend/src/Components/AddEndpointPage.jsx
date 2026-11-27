import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddEndpointPage() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');
  const [interval, setInterval] = useState('30s');
  const [alertEmail, setAlertEmail] = useState('');

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formState = {
      method,
      url,
      headers: headers.filter((h) => h.key || h.value),
      body,
      interval,
      alertEmail,
    };
    console.log('Save Endpoint form state:', formState);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="ml-[10px] mr-[10px] pt-6 pb-10 space-y-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Register New API Endpoint</h1>
            </div>
            <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-700 underline hover:no-underline">
              ← Back to Dashboard
            </Link>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-slate-700 mb-1">HTTP Method</label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                </div>
                <div className="md:col-span-9">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Endpoint URL</label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://api.example.com/v1/users"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <button
                    type="button"
                    onClick={addHeader}
                    className="text-xs px-2 py-1 border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition"
                  >
                    + Add Header
                  </button>
                  <span className="text-xs text-slate-500">Optional headers like Authorization or x-api-key</span>
                </div>
                <div className="space-y-2">
                  {headers.map((h, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        type="text"
                        value={h.key}
                        onChange={(e) => {
                          const next = [...headers];
                          next[i].key = e.target.value;
                          setHeaders(next);
                        }}
                        placeholder="Key"
                        className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                      />
                      <input
                        type="text"
                        value={h.value}
                        onChange={(e) => {
                          const next = [...headers];
                          next[i].value = e.target.value;
                          setHeaders(next);
                        }}
                        placeholder="Value"
                        className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                      />
                      <button
                        type="button"
                        onClick={() => removeHeader(i)}
                        className="px-2 py-2 text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                        aria-label="Remove header"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Request Body (Optional)</label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder='{"key": "value"}'
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                />
                <p className="text-xs text-slate-500 mt-1">For POST/PUT requests</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Polling Interval</label>
                  <select
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                  >
                    <option value="30s">30s</option>
                    <option value="1m">1m</option>
                    <option value="5m">5m</option>
                    <option value="15m">15m</option>
                    <option value="1h">1h</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Alert Email</label>
                  <input
                    type="email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    placeholder="dev@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200 transition"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-500/30 transition"
                >
                  Save Endpoint
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}