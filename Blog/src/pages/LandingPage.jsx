import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { allBlogs } from "../queries/AllBlogs"
import { Post } from "../components/Post/Post"
import { BlogFilter } from "../components/BlogFilter/BlogFilter"
import { useState } from "react"

export const LandingPage = () => {
    const [blogFilter, setBlogFilter] = useState("");
    const [filteredData, setFilteredData] = useState([]);

  const {data, isLoading, error} = useQuery(
    {
        queryKey: ["AllBlogs"],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_SPACE_ID, allBlogs)
    }
  );

  console.log(data);

  if (isLoading) {
    return (<h2>Fetching Data</h2>);
  }

  return (
    <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
        <BlogFilter setBlogFilter={setBlogFilter}/>
        <Post data={data}/>
    </section>
  )
}