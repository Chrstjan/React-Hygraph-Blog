import Markdown from 'markdown-to-jsx'
import style from "./Post.module.scss";

export const Post = ({data}) => {
  return (
    <>
        {data?.gingerBlogs?.map((item) => {
            return (
                <article className={style.postStyling} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.slug}</p>
                    <p>{item.releaseDate}</p>
                    <img src={item.images[0].url} />
                    <Markdown>{item.content}</Markdown>
                </article>
            )
        })}
    </>
  )
}