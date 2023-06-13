import Link from 'next/link'
import { linksHeader } from "../../configuration/common"

type InitValue = {
  asLink?: string
  pathName: string,
  title: string,
}
const links: InitValue[] = linksHeader

export const Navigation = () => (
  <nav>
    <ul>
      {links.map((init: InitValue, idx: number) => {
        return (
          <li key={idx}>
            <Link
              href={init.pathName}
              as={init.asLink}
              aria-label={init.pathName}
            >
              {init.title}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

