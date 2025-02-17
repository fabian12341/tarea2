import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center h-[10vh] border-b border-white">
        <img src="logo.png" className="m-5 h-8" />
        <p className="m-5">Home</p>
        <Link href="/page1" className="m-5">
          Page1
        </Link>
        <Link href="/page2" className="m-5">
          Page2
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <p className="m-5 text-2xl">Texto</p>
        <p className="m-5">Subtexto</p>
        <button className="m-5 p-2 bg-blue-500 text-white rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}

