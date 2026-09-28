export const profile = {
  name: 'Jean-Guillaume Brasier',
  shortName: 'JG Brasier',
  role: 'Data scientist',
  location: 'Boston, MA',
  github: 'https://github.com/jgbrasier',
  linkedin: 'https://www.linkedin.com/in/jean-guillaume-brasier',
  medium: 'https://medium.com/@jgbrasier',
};

export const experience = [
  {
    company: 'Vertex Pharmaceuticals',
    role: 'Senior Data Scientist II, Manager Level',
    dates: '2025—now',
    location: 'Boston',
    description:
      'Built a really complex probabilistic dosing digital twin for cell and gene therapy that probably no one is going to use. Also got AI agents to query graph databases in real time for context-aware retrieval.',
  },
  {
    company: 'Moderna',
    role: 'Data Scientist, Tech Lead',
    dates: '2023—2025',
    location: 'Cambridge',
    description:
      'Built a bunch of AI algorithms for CMC teams that totalled eight figures in ROI.',
  },
  {
    company: 'Harvard Medical School',
    role: 'Research Fellow, Zitnik Lab',
    dates: '2022—2023',
    location: 'Boston',
    description:
      'Built geometric deep learning models to predict immune-system binding from molecular surfaces.',
  },
  {
    company: 'Inria, DYOGENE Lab',
    role: 'Research Engineer',
    dates: '2021',
    location: 'Paris',
    description:
      'Built differentiable state-space models and taught Kalman filters to tune themselves.',
  },
  {
    company: 'EOS Imaging',
    role: 'Artificial Intelligence Engineer',
    dates: '2020',
    location: 'Paris',
    description:
      'Made automated 3D spine reconstruction five times faster with computer vision.',
  },
];

export const appearances = [
  {
    slug: 'built-by-endurance-podcast',
    kind: 'Podcast',
    title: 'From a Career-Ending Rugby Injury to Ironman Worlds',
    host: 'Built By Endurance · Episode 10',
    date: 'June 3, 2026',
    year: '2026',
    description:
      'Thirty minutes on leaving rugby, finding triathlon, qualifying for Ironman Worlds, and fitting 18–20 training hours around a job in AI.',
    primaryUrl: 'https://www.youtube.com/watch?v=vaOUjNc8X4w',
    primaryLabel: 'Watch on YouTube',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=vaOUjNc8X4w' },
      { label: 'Spotify', url: 'https://open.spotify.com/episode/5RIRTrl5wpXaKkmERMUNzV' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7467989343887077376/',
      },
    ],
  },
  {
    slug: 'lab-of-the-future-2026',
    kind: 'Conference talk',
    title: 'Unlocking Predictive Manufacturing: The Data Science Revolution in Pharma',
    host: 'Lab of the Future Congress USA',
    date: 'March 2, 2026',
    year: '2026',
    description:
      'A practical look at the data foundations CMC teams need before predictive manufacturing can become more than a slide-deck ambition.',
    primaryUrl: 'https://www.lab-of-the-future.com/USA/agenda/',
    primaryLabel: 'View the agenda',
    links: [
      { label: 'Conference agenda', url: 'https://www.lab-of-the-future.com/USA/agenda/' },
      {
        label: 'Lab of the Future',
        url: 'https://www.linkedin.com/company/lab-of-the-future-congress/',
      },
    ],
  },
  {
    slug: 'inria-thesis',
    kind: 'Seminar',
    title: 'Gradient-Based Parameter Estimation in State-Space Models',
    host: 'Inria · DYOGENE Team',
    date: 'July 21, 2021',
    year: '2021',
    description:
      'Differentiating through linear and nonlinear state-space models to estimate their parameters after the fact.',
    primaryUrl: '',
    primaryLabel: '',
    links: [],
  },
];

export const education = [
  ['Harvard University', 'M.S. Data Science, Research Track'],
  ['ESPCI Paris — PSL University', 'M.Eng. Physics · B.S. Physics and Chemistry'],
];

export const stack = [
  ['Languages', 'Python, Julia, SQL, GraphQL, Gremlin, Cypher, SPARQL'],
  ['AI / ML', 'Agents, RAG, probabilistic modeling, geometric deep learning, PyTorch, TensorFlow'],
  ['Platforms', 'AWS, Azure, Snowflake, Docker, FastAPI, GitHub Actions, Terraform'],
];
