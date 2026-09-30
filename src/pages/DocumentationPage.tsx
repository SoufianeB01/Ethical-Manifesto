import { Link } from 'react-router-dom'

function DocumentationPage() {
  return (
    <div className="documentation-page">

      <header className="documentation-header">
        <Link to="/" className="back-link">
          ← Manifest
        </Link>

        <span>Ethisch Design Manifest</span>
      </header>

      <main className="documentation-content">

        <div className="documentation-intro">
          <span className="section-label">Documentatie</span>

          <h1>
            Achter het <span>manifest.</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <section className="documentation-section">
          <span className="section-number">01</span>

          <div>
            <h2>Versterk, vervang niet.</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>

            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla.
            </p>
          </div>
        </section>

      </main>

    </div>
  )
}

export default DocumentationPage