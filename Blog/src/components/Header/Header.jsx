import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.headerStyling}>
        <h1>Ginger News</h1>
        <p>Welcome to the ginger world</p>
    </header>
  )
}