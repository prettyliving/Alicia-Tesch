import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    category: 'Digital product · Live',
    title: 'Unfinished, After Hours',
    description: 'A quieter kind of digital space for people navigating burnout. Built around reflection, small resets, and progress without pressure.',
    tags: ['Product thinking', 'UX', 'Entrepreneurship'],
    href: 'https://unfinishedafter.com',
    featured: true,
  },
  {
    number: '02',
    category: 'Business intelligence · In development',
    title: 'Publishing Intelligence',
    description: 'Exploring the business of books through data, from genre movement and publishing trends to the questions behind reader behaviour.',
    tags: ['SQL', 'Data analysis', 'Visualisation'],
    href: '#contact',
  },
  {
    number: '03',
    category: 'Sports technology · Exploring',
    title: 'Motorsport & Hockey Analytics',
    description: 'An exploration of how data products can help smaller teams make clearer decisions, understand performance, and find an edge.',
    tags: ['Analytics', 'Strategy', 'Product'],
    href: '#contact',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alicia Tesch home" onClick={closeMenu}>
          <span className="brand-mark">AT.</span>
          <span className="brand-name">ALICIA TESCH</span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={21} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:hello@aliciatesch.com">Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-kicker"><span className="status-dot" /> INDEPENDENTLY CURIOUS. INTENTIONALLY BUILDING.</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">HELLO, I'M ALICIA</p>
              <h1>Business-minded.<br /><em>Curious by design.</em><br />Building what’s next.</h1>
              <p className="hero-intro">I’m an Management Information Systems student interested in the space where technology, business, and creative thinking meet. I turn questions into ideas, and ideas into things people can use.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16} /></a>
                <a className="text-link" href="#about">A little about me <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Studio in Progress visual identity">
              <div className="art-topline"><span>STUDIO IN PROGRESS</span><span>EST. 2026</span></div>
              <div className="art-monogram">S<span>.</span></div>
              <div className="art-caption"><span>IDEAS, IN MOTION.</span><span>01 / 04</span></div>
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
            </div>
          </div>
          <div className="hero-bottom"><span>ROCHESTER, NEW YORK · OPEN TO WHAT'S NEXT</span><a href="#work">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a></div>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <p className="eyebrow">01 / A QUICK INTRODUCTION</p>
            <div>
              <h2>I like understanding how things work, then finding ways to make them <em>work better.</em></h2>
              <p className="intro-text">My interests sit across systems, strategy, data, and digital experiences. I’m drawn to the practical side of technology: understanding a problem, connecting the dots, and creating a thoughtful solution.</p>
              <a className="text-link" href="mailto:hello@aliciatesch.com">More about me <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">02 / SELECTED WORK</p><h2>Ideas becoming <em>real things.</em></h2></div>
            <p className="section-aside">A selection of products, experiments, and projects across technology and creative industries.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={project.featured ? 'project-card project-featured' : 'project-card'} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a className="project-link" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`Explore ${project.title}`}>
                  <ArrowUpRight size={21} />
                </a>
                {project.featured && <div className="featured-note">FEATURED PROJECT</div>}
              </article>
            ))}
          </div>
          <div className="work-footnote"><span>MORE PROJECTS ARE TAKING SHAPE.</span><span>THE WORK IS NEVER REALLY FINISHED.</span></div>
        </section>

        <section className="studio-section" id="studio">
          <div className="section-wrap studio-grid">
            <div><p className="eyebrow">03 / STUDIO IN PROGRESS</p><h2>A space for the<br /><em>work behind the work.</em></h2></div>
            <div className="studio-copy">
              <p>Studio in Progress is my creative workspace and ongoing record of building. It brings together the projects I develop, the ideas I explore, and the lessons gathered along the way.</p>
              <p>Some things become products. Others become experiments, useful skills, or simply better questions. All of it is part of the process.</p>
              <a className="text-link text-link-light" href="#contact">Have something in mind? <ArrowUpRight size={15} /></a>
            </div>
            <div className="studio-index"><span>AN OPEN ENDED PRACTICE</span><strong>MAKE<br />THINGS<br /><em>MATTER.</em></strong><span>IDEAS ARE A STARTING POINT.</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">04 / THE NEXT CONVERSATION</p>
          <div className="contact-grid">
            <h2>Good ideas start<br />with a <em>conversation.</em></h2>
            <div><p>I’m always interested in thoughtful projects, new perspectives, and opportunities to learn, contribute, and build.</p><a className="button button-dark" href="mailto:hello@aliciatesch.com">Say hello <ArrowUpRight size={16} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a className="footer-brand" href="#top">ALICIA TESCH<span>®</span></a><span>STUDIO IN PROGRESS · 2026</span><a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a></div>
        <div className="footer-bottom"><span>BUILT WITH CURIOSITY AND INTENTION.</span><div><a href="https://github.com/prettyliving/Alicia-Tesch" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:hello@aliciatesch.com">EMAIL</a></div></div>
      </footer>
    </div>
  )
}

export default App