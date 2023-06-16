import { useRouter } from 'next/router'
import Link from "next/link"

const Comment = () => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []
  const slug2 = Array.from(slug)
  console.log(`test: ${slug2}`)

  return (
    <>
      <h1>Slug test me: {slug.join('/')}</h1>
      <h3>{slug.includes('2020') ? <span>You win!</span> : null}</h3>
    </>
  )
}

export default Comment
