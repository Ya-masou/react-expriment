import type { NextPage } from 'next'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/samples/useeffect">
        <a>useEffect</a>
      </Link>
    </div>
  )
}

export default Home
