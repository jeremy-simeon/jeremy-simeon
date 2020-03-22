const experiences = [
  {
    name: 'Développeur Full-Stack PHP (Laravel / Vue.js)',
    company: 'HeyTeam',
    url: 'https://heyteam.com/fr',
    start: '2019-10-01',
    end: null,
    technologies: [
      { name: 'PHP', badge: 'badge-primary' },
      { name: 'HTML', badge: 'badge-primary' },
      { name: 'SCSS', badge: 'badge-primary' },
      { name: 'JS', badge: 'badge-primary' },
      { name: 'Laravel', badge: 'badge-secondary' },
      { name: 'Vue.js', badge: 'badge-secondary' },
      { name: 'MySQL', badge: 'badge-success' },
      { name: 'AWS', badge: 'badge-warning' },
      { name: 'Linux', badge: 'badge-warning' },
      { name: 'VS Code', badge: 'badge-info' },
      { name: 'Trello', badge: 'badge-info' },
      { name: 'Notion', badge: 'badge-info' }
    ]
  },
  {
    name: 'Développeur Full-Stack JS (Express.js / Vue.js)',
    company: 'SNCF',
    url: 'https://www.sncf.com/fr',
    start: '2018-05-01',
    end: '2019-09-30',
    technologies: [
      { name: 'HTML', badge: 'badge-primary' },
      { name: 'SCSS', badge: 'badge-primary' },
      { name: 'JS', badge: 'badge-primary' },
      { name: 'Node.js', badge: 'badge-primary' },
      { name: 'Express.js', badge: 'badge-secondary' },
      { name: 'Nuxt.js', badge: 'badge-secondary' },
      { name: 'Vue.js', badge: 'badge-secondary' },
      { name: 'MySQL', badge: 'badge-success' },
      { name: 'MongoDB', badge: 'badge-success' },
      { name: 'Linux', badge: 'badge-warning' },
      { name: 'Gitlab', badge: 'badge-info' },
      { name: 'Atom', badge: 'badge-info' }
    ]
  },
  {
    name: 'Développeur Full-Stack PHP (Laravel / Vue.js)',
    company: 'SNCF',
    url: 'https://www.sncf.com/fr',
    start: '2017-05-01',
    end: '2018-04-30',
    technologies: [
      { name: 'PHP', badge: 'badge-primary' },
      { name: 'HTML', badge: 'badge-primary' },
      { name: 'SCSS', badge: 'badge-primary' },
      { name: 'JS', badge: 'badge-primary' },
      { name: 'Laravel', badge: 'badge-secondary' },
      { name: 'Vue.js', badge: 'badge-secondary' },
      { name: 'MySQL', badge: 'badge-success' },
      { name: 'Linux', badge: 'badge-warning' },
      { name: 'Gitlab', badge: 'badge-info' },
      { name: 'PhpStorm', badge: 'badge-info' }
    ]
  },
  {
    name: 'Chef de projet IT',
    company: 'La Fabrik',
    url: 'https://www.la-fabrik.nc',
    start: '2016-05-01',
    end: '2016-10-31',
    technologies: [
      { name: 'PHP', badge: 'badge-primary' },
      { name: 'HTML', badge: 'badge-primary' },
      { name: 'CSS', badge: 'badge-primary' },
      { name: 'JS', badge: 'badge-primary' },
      { name: 'MySQL', badge: 'badge-success' },
      { name: 'Linux', badge: 'badge-warning' },
      { name: 'ActiveCollab', badge: 'badge-info' },
      { name: 'Atom', badge: 'badge-info' }
    ]
  },
  {
    name: 'Développeur PHP',
    company: 'BNP Paribas',
    url: 'https://mabanque.bnpparibas',
    start: '2013-11-01',
    end: '2016-04-30',
    technologies: [
      { name: 'PHP', badge: 'badge-primary' },
      { name: 'HTML', badge: 'badge-primary' },
      { name: 'CSS', badge: 'badge-primary' },
      { name: 'JS', badge: 'badge-primary' },
      { name: 'MySQL', badge: 'badge-success' },
      { name: 'Linux', badge: 'badge-warning' },
      { name: 'Jira', badge: 'badge-info' },
      { name: 'PhpStorm', badge: 'badge-info' }
    ]
  }
]

const diplomas = [
  {
    name: 'Diplôme d\'ingénieur généraliste',
    school: 'ESIGELEC',
    url: 'http://www.esigelec.fr',
    start: '2011-09-01',
    end: '2016-04-01'
  }
]

const langages = [
  'Node.js', 'PHP', 'JS', 'CSS', 'SCSS', 'HTML', 'SQL', 'NoSQL'
]

const frameworks = [
  'Laravel', 'Sails.js', 'Express.js', 'Vue.js', 'Nuxt.js', 'Bootstrap'
]

const databases = [
  'MySQL', 'MongoDB'
]

const systems = [
  'AWS', 'Linux'
]

const softwares = [
  'Gitlab', 'Jira', 'ActiveCollab', 'Atom', 'PhpStorm', 'VS Code', 'Trello', 'Notion'
]

const skills = [
  'Gestion de projet', 'Documentation'
]

export const state = () => ({
  experiences, diplomas, langages, frameworks, databases, systems,
  softwares, skills
})
