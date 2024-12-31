import React from 'react';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ThriveForce Robotics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-accent text-gray-800 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 bg-secondary text-white shadow-md z-50">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-2xl font-bold hover:text-primary transition duration-300 cursor-pointer">
              ThriveForce Robotics
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-primary transition">Home</a></li>
                <li><a href="/about" className="hover:text-primary transition">Resources</a></li>
                <li><a href="/team" className="hover:text-primary transition">Team</a></li>
                <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-secondary text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} ThriveForce Robotics. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
