
import Link from 'next/link';



export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
          <li>
            <Link href="/forgot-password">
              Quên mật khẩu
            </Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li></li>
        </ul>
      </main>
  );
}


