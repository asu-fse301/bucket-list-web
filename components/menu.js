function Menu({ onChange, value }) {
  return (
    <section className="Menu">
      <ul>
        {['Campaign', 'FAQ'].map(each => (
          <li
            className={value === each ? 'MenuItemSelected' : 'MenuItem'}
            key={each}
          >
            <button children={each} onClick={() => onChange(each)} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
