export function BarraBusca() {
  return (
    <form className="caixaBuscaContainer" role="search">
      <div className="caixaBusca">
        <input className="caixaBusca_input" type="search" placeholder="Search" />
        <button className="caixaBusca_button" type="submit">Search</button>
      </div>
    </form>
  );
}
