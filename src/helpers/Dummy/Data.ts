

export type IDataRS = {
  name: string;
  link: string;
  icons: string;
}[]


export type IDataExperiencie = {
  role: string;
  company: string;
  duraction: string;
  address: string;
  aptitudes: string;
}[]

export type IProject = {
  id: number;
  title: string;
  img?: string
  description: string
  url: string
  active: boolean | number
}[]

export const dataRS: IDataRS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/yosmarhinestrozadev/",
    icons: "LinkedIn",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@yosmarcode",
    icons: "Youtube",
  },
  {
    name: "Github",
    link: "https://github.com/yosmarcode",
    icons: "Github",
  },
];



export const dataExperiencie: IDataExperiencie = [
  {
  role: "Senior Software DeveloperSenior Software Developer",
  company: "Reuse · Jornada completaReuse · Jornada completa",
  duraction: "jul. 2022 - actualidad · 1 año 6 mesesjul. 2022 - actualidad · 1 año 6 meses",
  address: "Las Condes, Región Metropolitana de Santiago, ChileLas Condes, Región Metropolitana de Santiago, Chile",
  aptitudes: "Desarrollo de base de datos · Hojas de estilos en cascada (CSS) · Confluence · Lenguaje SASS · Aplicaciones web · Redux.js · Creatividad",
},
{
  role: "Software Developer",
  company: "Expansiona SpA · Jornada completa",
  duraction: "abr. 2022 - jul. 2022 · 4 meses",
  address: "Región Metropolitana de Santiago, Chile",
  aptitudes: "Desarrollo de base de datos · Hojas de estilos en cascada (CSS) · Lenguaje SASS · Aplicaciones web · Redux.js · Creatividad",
},
  {
  role: "Desarrollador de front-end",
  company: "Portal cheque s.a. · Jornada completa",
  duraction: "ene. 2021 - abr. 2022 · 1 año 4 meses",
  address: "Región Metropolitana de Santiago, Chile",
  aptitudes: "Desarrollo de base de datos · Hojas de estilos en cascada (CSS) · Lenguaje SASS · Aplicaciones web · Redux.js · Creatividad",
},
  
]


export const dataProjects: IProject = [
  {
    id: 1,
    title: 'Control diario Ventas',
    img: 'https://frontend-eboleta.vercel.app/static/media/logo-2021061521352290100.7c414e79dce761480972.jpeg',
    description: 'Sistema Control de ventas',
    url: 'https://frontend-eboleta.vercel.app/login',
    active: 1
  },
  {
    id: 2,
    title: 'Data Gridjs',
    img: 'https://frontend-eboleta.vercel.app/static/media/logo-2021061521352290100.7c414e79dce761480972.jpeg',
    description: 'Ejemplo Gridjs',
    url: 'https://demo-app-gridjs-ts.vercel.app/',
    active: 1
  },
  {
    id: 3,
    title: 'App Documentos Acciona',
    img: 'https://cnegocios.cl/wp-content/uploads/2021/07/cropped-logofinal-260x93.png',
    description: 'Sistema de Adminstracion documentos Personal Upload',
    url: 'https://app-repository-document.vercel.app/login',
    active: 1
  },
  {
    id: 4,
    title: 'The Rick and Morty App',
    img: 'blob:https://vercel.com/76f87211-4e2f-4bee-b697-35a19ec7541b',
    description: 'The Rick and Morty App',
    url: 'https://app-rickmorty.vercel.app/',
    active: 1
  },
  {
    id: 5,
    title: 'app-yosmarweb-spotify',
    img: 'blob:https://vercel.com/c6b557dd-cd5f-4863-a6d0-d2101791f839',
    description: 'Spotify Yosmarcode',
    url: 'https://app-yosmarweb-spotify.vercel.app/login',
    active: 1
  }
]