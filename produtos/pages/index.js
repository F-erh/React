import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/produtos/produto">
          <a>PRODUTOS</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home