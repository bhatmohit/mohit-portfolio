// ✏️ Edit everything about the site here.
export const SCHEDULER_URL = 'https://calendly.com/YOUR-HANDLE/intro-call' // TODO: paste your Calendly / Cal.com link
export const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Mohit Bhat',
  headline: 'I make messy student and member data behave.',
  sub: 'CRM and data work for education organizations, nonprofits and small teams. Clean records, clear reports, workflows people actually use.',
  email: 'bhatmohit070@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhatmohit',
  location: 'Navi Mumbai, India · works with US & India time zones',
}

export const services = [
  { title: 'Higher-ed admissions & student engagement', tag: 'Strongest fit',
    text: 'Events, recruitment and engagement tracked in one place, with reports that show where students drop off.' },
  { title: 'Nonprofits & associations on spreadsheets', tag: 'Spreadsheet rescue',
    text: 'Move members, donors or volunteers out of scattered sheets into a clean system, without losing history.' },
  { title: 'Coaching, training & education businesses', tag: 'Learners to loyalty',
    text: 'Track leads, enrolments and follow-ups so no learner slips through, and see what is working.' },
  { title: 'Your part-time ops person', tag: 'A few days a month',
    text: 'Data cleanup, dashboards and CRM upkeep on a steady rhythm, so your team can stay on the mission.' },
]

export const caseStudy = {
  role: 'CRM Administrator · Mays Business School, Texas A&M University · Apr 2025 – Jun 2026',
  points: [
    ['The job', 'Run the CRM that supports events, recruitment and student engagement.'],
    ['What I did', 'Managed CRM data and workflows, and improved data quality, visibility and reporting across the student lifecycle.'],
    ['How I worked', 'Turned business requirements from staff into data-driven workflows and reporting upgrades.'],
    ['Tools', 'Slate, Salesforce, SQL, Excel.'],
  ],
}

export const projects = [
  { name: 'Study Habits App', blurb: 'A React web app for building and tracking study habits. A hands-on sample of how I turn an idea into something people can click through.',
    repo: 'https://github.com/bhatmohit/study-habits-app', live: 'https://bhatmohit.github.io/study-habits-app/', stack: ['React', 'GitHub Pages'] },
]

export const experience = [
  { role: 'CRM Administrator', org: 'Mays Business School, Texas A&M', when: 'Apr 2025 – Jun 2026',
    text: 'CRM data, workflows and reporting for events, recruitment and student engagement.' },
  { role: 'Support Analyst', org: 'Nomura Securities International, New York', when: 'Jul 2024 – Feb 2025',
    text: 'Found root causes of recurring incidents with developers and added charts to the Incidents Dashboard for management.' },
  { role: 'Software Developer', org: 'Nomura Services India, Mumbai', when: 'Jul 2020 – Jul 2022',
    text: 'Helped build a data warehouse and reporting platform. Role-based access with SQL, 40% faster reporting with Excel export and filters, 20+ production issues fixed, deploys cut from 20 to 5 minutes.' },
]

export const skills = ['Salesforce', 'Slate', 'SQL', 'Excel', 'Python (Pandas)', 'Dashboards', 'Data quality', 'Exploratory analysis', 'React', 'FastAPI']

export const education = 'M.S. Management Information Systems, Texas A&M University (2024) · B.E. Computer Engineering, SPIT Mumbai (2020)'

// 📚 Replace with books you actually love. color = spine, h = height.
export const shelf = [
  { t: 'Novels', c: '#8E1B35', h: 150 }, { t: 'Essays', c: '#3D4F8C', h: 128 }, { t: 'Poetry', c: '#F2B632', h: 140, d: true },
  { t: 'Ethics', c: '#2F7D4F', h: 158 }, { t: 'Myths', c: '#5B4B8A', h: 122 }, { t: 'Letters', c: '#C95B2F', h: 146 }, { t: 'Stoics', c: '#3D4F8C', h: 134 },
]
export const interests = {
  football: 'Weekend football keeps me honest about teamwork: show up, read the game, pass early.',
  literature: 'I read to learn how people think and what they leave out. It shapes how I write, and how I listen to what a client is really asking.',
  philosophy: 'Philosophy is my habit of asking "what is this actually for?" before building anything.',
}
