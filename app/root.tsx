import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'

export const meta: MetaFunction = () => {
  return [
    { title: 'カルキチブログ' },
    {
      name: 'description',
      content:
        'カルキチ副島が運営するウェブ系の技術について執筆しているブログです',
    },
  ]
}

import type { MetaFunction } from '@remix-run/node'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
