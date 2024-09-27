export const BlogFilter = ({setBlogFilter}) => {

    const handleUserFilter = (e) => {
        setBlogFilter(e.target.value);
    }

  return (
    <select onChange={(e) =>handleUserFilter(e)}>
        <option defaultValue>Sorter Blogs</option>
        <option value="navn">Navn</option>
        <option value="dato">Dato</option>
    </select>
  )
}