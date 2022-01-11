import type { NextPage } from 'next'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/hooks/useeffect">
        <a>useEffect</a>
      </Link>
    </div>
  )
}

export default Home
