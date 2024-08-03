import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        S<span className="text-target">V</span>
      </p>
    </Link>
  )
}
