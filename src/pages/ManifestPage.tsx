import '../App.css'
import { Link } from 'react-router-dom'

import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'

const principles = [
  {
    number: '01',
    title: 'Versterk, vervang niet.',
    description:
      'Een Digital Human moet naast de mens staan en versterken wat iemand zelf kan, niet diens plek overnemen.',
    position: 'principle-1',
    icon: PersonAddAltOutlinedIcon,
  },
  {
    number: '02',
    title: 'Begrijp wat je doet.',
    description:
      'Een Digital Human moet niet alleen een resultaat geven, maar ook duidelijk maken hoe je daar bent gekomen.',
    position: 'principle-2',
    icon: MenuBookOutlinedIcon,
  },
  {
    number: '03',
    title: 'Laat iets achter.',
    description:
      'Een Digital Human moet iets meegeven zoals kennis, vaardigheden, ervaring of zelfvertrouwen.',
    position: 'principle-3',
    icon: SpaOutlinedIcon,
  },
  {
    number: '04',
    title: 'Behoud de regie.',
    description:
      'Een Digital Human mag ondersteunen en adviseren, maar de mens houdt de controle en maakt de keuzes.',
    position: 'principle-4',
    icon: ExploreOutlinedIcon,
  },
  {
    number: '05',
    title: 'Geef iedereen een eerlijke kans.',
    description:
      'Een Digital Human moet toegankelijk zijn, zodat nieuwe kansen niet alleen bereikbaar zijn voor digitaal vaardige mensen.',
    position: 'principle-5',
    icon: GroupsOutlinedIcon,
  },
]

function ManifestPage() {
  return (
    <div className="manifest-page">

      <header className="site-header">
        <div className="hero">
          <h1>
            Zet de <span>mens</span> centraal door AI kansen te laten <span>vergroten</span> in plaats van te   <span>verkleinen</span>.
          </h1>

          <p>
            Digital humans moeten mensen versterken en verder brengen,
            zonder hen buitenspel te zetten.
          </p>
        </div>

        <Link
          className="documentation-link"
          to="/documentation"
        >
          Documentatie ↗
        </Link>
      </header>


      <main className="main-content">

        <section className="principles-grid">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.number}
                className={`principle ${principle.position}`}
              >
                <div className="principle-icon">
                  <Icon />
                </div>

                <div className="principle-content">
                  <span className="principle-number">
                    {principle.number}
                  </span>

                  <h2>{principle.title}</h2>

                  <div className="principle-line" />

                  <p>{principle.description}</p>
                </div>
              </article>
            )
          })}
        </section>

      </main>


      <footer className="site-footer">
        <span>Ethisch Design Manifest</span>
        <span>2026</span>
      </footer>

    </div>
  )
}

export default ManifestPage