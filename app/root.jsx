const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useCatch,
} = require("@remix-run/react");
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Guitar LA",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const error = useCatch();

  console.log(error);
  return (
    <Document>
      <LiveReload />
      <p className="error">
        {error.status} {error.statusText}
      </p>

      <Link className="error-enlace" to="/">
        Tal vez quieras volver a la página principal
      </Link>
      <LiveReload />
    </Document>
  );
}

export function ErorBoundary({ error }) {
  return (
    <Document>
      <LiveReload />
      <p className="error">
        {error.status} {error.statusText}
      </p>

      <Link className="error-enlace" to="/">
        Tal vez quieras volver a la página principal
      </Link>
    </Document>
  );
}
