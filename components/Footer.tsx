import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-16 border-t">
      <div className="container h-full flex items-center justify-center">
        <small>
          Copyright &copy; 2025{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Tamipublicapi
          </Link>
        </small>
      </div>
    </footer>
  );
}
