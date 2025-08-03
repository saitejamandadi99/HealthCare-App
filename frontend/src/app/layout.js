import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export const metadata = {
  title: 'HealthCare App',
  description: 'A simple healthcare appointment booking application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
