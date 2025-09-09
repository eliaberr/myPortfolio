import imgFormAdmcn from "../assets/imgFormAdmcn.jpg"
import imgSb4Host from "../assets/imgSb4Host.jpg"
import imgCasamentoLaisEEliabe from "../assets/imgCasamentoLaisEEliabe.png"
import imgNlw from "../assets/imgNlw.png"

export const projects = [
  {
    id: 1,
    name: "Casamento Lais e Eliabe",
    projectCategory: "Projeto Pessoal",
    technologiesUsed: "React 18, Bootstrap, Node.js/Express e MySQL",
    libraries:
      "Bootstrap, React Bootstrap, React Router DOM, React Icons, QRCode, React QR Code, React Input Mask, jQuery, jQuery Mask Plugin, React Phone Number Input, React Currency Input Field, React Number Format, React Copy To Clipboard, Pix Utils, Buffer",
    urlButton: {
      backEnd: "https://github.com/eliaberr/prjCasamentoBackend",
      
      video: "https://youtu.be/JOvp74PbhrU",
      deploy: "",
      frontEnd: "https://github.com/eliaberr/prjCasamento",
      
    },
    ulrImg: imgCasamentoLaisEEliabe,
    resume:
      "Desenvolvi um site interativo de casamento com páginas informativas, RSVP e lista de presentes com QR Code PIX, utilizando React/Next.js no front-end e Node.js/Express no back-end, priorizando desempenho e usabilidade.",
    description: [
      "O Site de Casamento foi desenvolvido com o objetivo de centralizar todas as informações do evento em um único lugar, oferecendo aos convidados praticidade e uma experiência interativa. A aplicação conta com páginas dedicadas à apresentação da história do casal, detalhes sobre o evento, como local, data, dress code e links diretos para navegação no Google Maps ou Waze, além de seções específicas para confirmação de presença (RSVP) e lista de presentes.",
      "A funcionalidade de RSVP permite que os convidados confirmem sua participação preenchendo um formulário simples, que pode incluir acompanhantes e observações específicas, como restrições alimentares. Esses dados são armazenados no banco e ficam disponíveis para consulta pelo administrador, que pode exportar relatórios de participação em formato CSV.",
      "A lista de presentes foi planejada para facilitar ao máximo a contribuição dos convidados. Cada item conta com imagem, descrição e valor, e pode ser adquirido de duas formas: por meio de PIX com QR Code ou através de links externos de lojas virtuais. Quando a opção PIX é escolhida, o sistema gera instruções e códigos para transferência, permitindo ao casal acompanhar o status dos presentes em tempo real.",
      "Do ponto de vista técnico, o projeto foi construído em React/Next.js no front-end e Node.js/Express no back-end, integrados a um banco de dados relacional (MySQL/PostgreSQL) utilizando ORM. O design foi estruturado com CSS puro e Bootstrap, garantindo responsividade, consistência visual e uma interface amigável para qualquer dispositivo."
    ]
  },
  {
    id: 2,
    projectCategory: "Projeto Real",
    ulrImg: imgFormAdmcn,
    name: "Form ADMCN",
    technologiesUsed: "Next.js e Tailwind CSS",
    libraries: "HTML2PDF.js, React Icons, Tailwind CSS",
    urlButton: {
      backEnd: "",
      frontEnd: "https://github.com/eliaberr/formAdmcn.git",
      deploy: "https://form-admcn-qgzhgb3qv-eliabes-projects-52cc9e4c.vercel.app/",
      video: ""
    },
    resume:
      "Aplicação web desenvolvida para padronizar os formulários enviados pelas congregações na reunião ministerial. O sistema permite que o usuário preencha os dados online e gere automaticamente um PDF formatado, garantindo organização e consistência.",
    description: [
      "O Form ADMCN surgiu de uma necessidade prática na igreja: padronizar os documentos entregues pelas congregações durante as reuniões ministeriais. Antes, cada congregação levava papéis diferentes, sem um modelo definido. Com este sistema, todos os registros passaram a ser gerados de forma digital e uniforme.",
      "O usuário acessa a aplicação, preenche um formulário com os dados solicitados e, ao final, o sistema gera automaticamente um documento em PDF pronto para ser entregue na reunião. Isso garante padronização, legibilidade e praticidade.",
      "O projeto foi desenvolvido em Next.js no front-end, utilizando a biblioteca HTML-to-PDF para converter o conteúdo do formulário em PDF diretamente no navegador, sem necessidade de back-end.",
      "O design foi construído com Tailwind CSS, proporcionando responsividade, consistência visual e uma interface simples e intuitiva para os membros que utilizam a ferramenta."
    ]
  },
  {
    id: 3,
    projectCategory: "Freelancer",
    ulrImg: imgSb4Host,
    name: "Landing Page Hosting (SB4Host)",
    technologiesUsed: "Next.js 15, React 19, Tailwind CSS e Framer Motion",
    libraries:
      "Radix UI Accordion, Radix UI Navigation Menu, Radix UI Slider, Framer Motion, Lucide React, Axios, Class Variance Authority, CLSX, Tailwind Merge, TailwindCSS Animate, React Icons",
    urlButton: {
      backEnd: "",
      frontEnd: "",
      deploy: "https://www.sb4host.com.br/",
      video: ""
    },
    resume:
      "Landing page moderna e responsiva para empresa de hospedagem, construída com Next.js e Tailwind CSS, incluindo tabelas de preços dinâmicas integradas com a API do WHMCS.",
    description: [
      "A Landing Page Hosting foi desenvolvida para a empresa SB4Host com foco em captar clientes e apresentar planos de hospedagem de maneira clara e atrativa.",
      "O site é totalmente responsivo, com design limpo e seções estratégicas para apresentação de serviços, depoimentos, contato e chamadas para ação.",
      "Um diferencial foi a integração com a API do WHMCS, permitindo que as tabelas de preços fossem atualizadas dinamicamente conforme os planos do sistema de hospedagem."
    ]
  },
  {
    id: 4,
    projectCategory: "Projeto Acadêmico",
    ulrImg: imgNlw,
    name: "Projeto NLW Agents",
    technologiesUsed:
      "React + Vite, Tailwind CSS, Node.js/Fastify, PostgreSQL e Drizzle ORM",
    libraries:
      "TanStack React Query, React Hook Form, Zod, Lucide React, Radix UI Label, Radix UI Slot, Day.js, Class Variance Authority, CLSX, React Router DOM, Fastify, Fastify CORS, Fastify Multipart, Drizzle ORM, Fastify Type Provider Zod, Postgres",
    urlButton: {
      backEnd: "https://github.com/eliaberr/nlwAgentsBackEnd.git",
      frontEnd: "https://github.com/eliaberr/nlwAgentsFrontEnd.git",
      deploy: "",
      video: ""
    },
    resume:
      "Aplicação full stack desenvolvida durante o NLW (Rocketseat), utilizando React no front-end e Node.js/Fastify no back-end, com Postgres e Drizzle ORM. O projeto explora conceitos modernos de APIs, agentes inteligentes e integração com IA.",
    description: [
      "O projeto foi construído durante a imersão NLW da Rocketseat, aplicando boas práticas de desenvolvimento moderno.",
      "No front-end, a aplicação foi desenvolvida em React, utilizando React Query para gerenciamento de dados, formulários e estados.",
      "No back-end, a API foi construída com Node.js/Fastify e Drizzle ORM, integrada a um banco PostgreSQL. Também foram explorados conceitos de embeddings, validações com Zod e upload de arquivos.",
      "Esse projeto consolidou práticas de arquitetura full stack e integração com tecnologias atuais do ecossistema JavaScript."
    ]
  }
];
