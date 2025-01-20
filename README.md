# Next.js 15 Hydration Mismatch Error

This repository demonstrates a common hydration mismatch error in Next.js 15 applications and provides a solution.

The error occurs when data is fetched on the client side in a page component.  Next.js renders the page on the server with placeholder data, and then hydrates the client-side JavaScript. If the client-side data differs from the server-side data, a hydration mismatch occurs. 

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the hydration mismatch error in the browser's console.

## Solution

The solution is to fetch the data on the server-side using `getServerSideProps` or `getStaticProps`.