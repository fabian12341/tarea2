import Link from 'next/link';

export default function Page() {
    return(
    <div>
        <div className="flex flex-row items-center justify-center h-[10vh] border-b border-white">
            <Link href="/">
            <img src="logo.png" className="m-5 h-8" />
            </Link>
            <Link href="/" className="m-5">
            Home
            </Link>
            <Link href="/page1" className="m-5">
            Page1
            </Link>
            <Link href="/page2" className="m-5">
            Page2
            </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p>En proceso...</p>
        </div>
    </div>
    )
  }
  