import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

export default function RootLayout({
children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body className='flex'>
            {children}
            </body>
        </html>
    )
}