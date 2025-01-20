```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data is fetched on the client side.
  const data = fetchData();
  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

function fetchData() {
  // Simulate fetching data from an API
  return fetch('/api/data').then(res => res.json());
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Data from API' });
}
```