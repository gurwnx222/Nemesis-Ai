/* eslint-disable camelcase */
import { Albert_Sans } from 'next/font/google';

import './globals.css';


const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nemesis',
  description: 'AI Powered Resource Sharing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='m-0 p-0'>

      
      <body className={`${albertSans.variable} antialiased bg-black`} >
       
      {children}</body>
    </html>
  );
}
