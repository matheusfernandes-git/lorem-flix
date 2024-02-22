import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="/imagens/fb.png" alt="facebook"></img>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="/imagens/tw.png" alt="twitter"></img>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="/imagens/ig.png" alt="instagram"></img>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>LOREMFLIX</h2>
      </section>

      <section>
        <p>© Matheus Fernandes</p>
      </section>
    </footer>
  );
}
