import Image from 'next/image'
import { useQuery } from '@apollo/client'
import  HELLO_QUERY  from "@/graphql/queries/hello.gql"

export default async function Home() {
  console.log(HELLO_QUERY, "HELLO_QUERY")
  console.log("hello :)")
  const { data, loading, error } = useQuery(HELLO_QUERY)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello :)</p>
    </main>
  )
}
