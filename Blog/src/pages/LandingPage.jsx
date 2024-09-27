import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import Markdown from 'markdown-to-jsx'
import { allBlogs } from "../queries/AllBlogs"

export const LandingPage = () => {

  const {data, isLoading, error} = useQuery(
    {
        queryKey: ["AllBlogs"],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_SPACE_ID, allBlogs)
    }
  );

  console.log(data);

  return (
    <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
        {data?.gingerBlogs?.map((item) => {
            return (
                <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.slug}</p>
                    <img src={item.images[0].url} />
                    <Markdown>{item.content}</Markdown>
                </article>
            )
        })}
    </section>
  )
}