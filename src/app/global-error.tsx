'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h2 style={{ color: "red" }}>Something went wrong!</h2>
          <pre style={{ color: "gray" }}>{error.message}</pre>
          {error.digest && <p>Digest: {error.digest}</p>}
          <button onClick={() => reset()} style={{ marginTop: "1rem" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
