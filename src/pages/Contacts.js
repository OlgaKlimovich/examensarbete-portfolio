const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Karlskrona, Sweden</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">WhatsApp/Telegram/Viber</h2>
            <p>
              <a href="tel:+46728878684">+46 72 887 86 84</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:oklimovich37@gmail.com">oklimovich37@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
