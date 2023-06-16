import Link from 'next/link'
import {  Nav } from "../../styles-js"

type Links = {
  asLink?: string
  pathName: string,
  title: string
}
type InitValue = {
  links: Links[],
  isMain?: boolean,
  ariaLabel?: string
}

export const Navigation = ({links, isMain = true, ariaLabel}: InitValue) => {
  return (
    <ul>
      {links?.map((init: Links, idx: number) => {
        return (
          <li key={idx}>
            <Link
              href={init.pathName}
              as={init.asLink}
              aria-label={init.title}
            >
              {init.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

