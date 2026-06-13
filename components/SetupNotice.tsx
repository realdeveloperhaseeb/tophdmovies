export function SetupNotice() {
  return (
    <div className="mx-auto max-w-site px-4 py-16">
      <div className="rounded-card border border-accent/40 bg-surface p-8">
        <h1 className="text-2xl font-extrabold text-accent">Almost there — connect your database</h1>
        <p className="mt-3 text-white/70">
          The site is running, but it cannot reach your MySQL database yet (or there is no data).
          To finish setup:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-white/70">
          <li>
            Copy <code className="text-accent">.env.example</code> to{' '}
            <code className="text-accent">.env.local</code> and fill in your Hostinger MySQL
            credentials.
          </li>
          <li>
            Run <code className="text-accent">npm run db:setup</code> to create the tables and load
            sample movies.
          </li>
          <li>Refresh this page.</li>
        </ol>
        <p className="mt-4 text-sm text-white/50">
          You can manage everything from the admin dashboard at{' '}
          <a href="/admin/login" className="text-accent hover:underline">
            /admin/login
          </a>
          .
        </p>
      </div>
    </div>
  );
}
