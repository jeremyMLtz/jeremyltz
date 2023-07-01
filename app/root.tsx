import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/styles.css";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Jeremy Lentz" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Mono&family=Roboto+Condensed:wght@300;400;700&display=swap",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className='page-container'>{children}</div>
);
export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          src='https://kit.fontawesome.com/785f704845.js'
          crossOrigin='anonymous'></script>
      </body>
    </html>
  );
}
