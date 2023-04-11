import "./globals.css";
import { Itim } from '@next/font/google';

const itim = Itim({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-itim'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${itim.className} mx-32`}>
        {/* <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
