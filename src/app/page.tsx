import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-stone-200 text-stone-900">
      <h1>A great tool for freelancers is coming soon..</h1>
      <p>
        The landing page content will be here. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tenetur assumenda facilis animi quidem hic
        iste possimus officia, sapiente fugit alias voluptas voluptatum veniam
        numquam unde, aut minus, recusandae temporibus rerum.
      </p>
      <Link
        href="/dashboard"
        className="p-4 mt-4 mr-auto bg-purple-400 hover:bg-purple-700 text-white rounded-md"
      >
        Login
      </Link>
    </main>
  );
}
