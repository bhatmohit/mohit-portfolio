import { useState } from 'react'
import { SCHEDULER_URL, base, profile, services, caseStudy, projects, experience, skills, education, shelf, interests } from './data.js'

const Section = ({ id, title, intro, children }) => (
  <section id={id} className="sec"><div className="wrap">
    <h2>{title}</h2>{intro && <p className="intro">{intro}</p>}{children}
  </div></section>
)

export default function App() {
  const [open, setOpen] = useState(0)
  return (<>
    <header className="nav"><div className="wrap navin">
      <a href="#top" className="logo">Mohit Bhat</a>
      <nav>{[['work','Work'],['services','Services'],['about','About'],['book','Book a call']].map(([h,l]) => <a key={h} href={'#'+h}>{l}</a>)}</nav>
    </div></header>

    <main id="top">
      <section className="hero"><div className="wrap herogrid">
        <div>
          <p className="hello">Hi, I'm Mohit 👋</p>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.sub}</p>
          <div className="cta">
            <a className="btn" href="#book">Book a free intro call</a>
            <a className="btn ghost" href="#work">See my work</a>
          </div>
          <p className="small">{profile.location}</p>
        </div>
        <figure className="arch"><img src={base + 'images/headshot.jpg'} alt="Mohit Bhat smiling in a maroon velvet blazer" /></figure>
      </div></section>

      <Section id="services" title="How I can help" intro="Four kinds of teams I enjoy working with. If yours is a bit different, tell me. I'm open to other projects too.">
        <div className="cards">{services.map(s => (
          <article className="card" key={s.title}><span className="chip">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p></article>))}
        </div>
      </Section>

      <Section id="work" title="Case study: student engagement at Mays Business School" intro={caseStudy.role}>
        <div className="acc">{caseStudy.points.map(([h, t], i) => (
          <div key={h} className={'accitem' + (open === i ? ' on' : '')}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{h}<span aria-hidden>{open === i ? '–' : '+'}</span></button>
            {open === i && <p>{t}</p>}
          </div>))}
        </div>
        <h3 className="subh">Something I built</h3>
        {projects.map(p => (
          <article className="proj" key={p.name}>
            <div><h3>{p.name}</h3><p>{p.blurb}</p>
              <p className="stack">{p.stack.join(', ')}</p></div>
            <div className="projlinks">
              <a className="btn" href={p.live} target="_blank" rel="noreferrer">Open live site</a>
              <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">View code</a>
            </div>
          </article>))}
      </Section>

      <Section id="about" title="A bit about me" intro="Before the spreadsheets: a software developer with a master's in information systems. Off the clock: a ball, a book, and a big question.">
        <div className="tl">{experience.map(e => (
          <div className="tli" key={e.role}><b>{e.role}</b> <span>{e.org} · {e.when}</span><p>{e.text}</p></div>))}</div>
        <p className="small">{education}</p>
        <ul className="skills">{skills.map(s => <li key={s}>{s}</li>)}</ul>

        <div className="hobbies">
          <figure className="pitch"><img src={base + 'images/football.jpg'} alt="Mohit in a yellow bib challenging for the ball during a football match" />
            <figcaption><b>Football.</b> {interests.football}</figcaption></figure>
          <div className="lit">
            <svg viewBox="0 0 360 190" role="img" aria-label="A shelf of books by theme">
              {shelf.reduce((acc, b, i) => { const x = acc.x; acc.els.push(
                <g key={b.t} className="spine" style={{ '--i': i }}>
                  <rect x={x} y={170 - b.h} width="42" height={b.h} rx="3" fill={b.c} />
                  <text transform={`translate(${x + 26},${170 - b.h + 12}) rotate(90)`} fontSize="12" fill={b.d ? '#17203A' : '#fff'} fontFamily="Bricolage Grotesque">{b.t}</text>
                </g>); acc.x += 48; return acc }, { x: 8, els: [] }).els}
              <rect x="0" y="170" width="360" height="8" rx="3" fill="#9AA6CC" />
            </svg>
            <p><b>Literature.</b> {interests.literature}</p>
            <p><b>Philosophy.</b> {interests.philosophy}</p>
          </div>
        </div>
      </Section>

      <Section id="book" title="Let's talk" intro="A 20-minute intro call is free. Bring your messiest spreadsheet.">
        <div className="book">
          <a className="btn big" href={SCHEDULER_URL} target="_blank" rel="noreferrer">Pick a time</a>
          <p>Or write to <a href={'mailto:' + profile.email}>{profile.email}</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
      </Section>
    </main>
    <footer><div className="wrap">© {new Date().getFullYear()} Mohit Bhat</div></footer>
  </>)
}
