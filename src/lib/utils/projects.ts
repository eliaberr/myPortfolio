import imgFormAdmcn from "../../assets/imgFormAdmcn.jpg"
import imgSb4Host from "../../assets/imgSb4Host.jpg"
import imgCasamentoLaisEEliabe from "../../assets/imgCasamentoLaisEEliabe.png"
import imgNlw from "../../assets/imgNlw.png"
import imgCasamentoIsabellyEMatheus from "../../assets/imgCasamentoIsabellyEMatheus.png"

export const projects = [
  {
    id: 1,
    name: "Casamento Isabelly e Matheus",
    projectCategory: "Freelancer",
    technologiesUsed: "Next.js, Tailwind CSS, motion, Node.js/Express e MySQL",
    libraries:
      "Next.js 15, React 19, React DOM, Tailwind CSS, Motion, React Flip Clock Countdown, React Icons, QRCode React, Pix Utils, Cleave.js",
    urlButton: {
      backEnd: "https://github.com/eliaberr/weddingIsaAndMateus",
      frontEnd: "https://github.com/eliaberr/prjCasamento",
      deploy: "https://www.izabellyematheus.com.br/",
      video: "https://youtu.be/D3FQR7q6WAw",

    },
    ulrImg: imgCasamentoIsabellyEMatheus,
    resume:
      "Desenvolvi um site interativo de casamento com informações do evento, história do casal, contador regressivo e lista de presentes com opções de PIX via QR Code e compra online, utilizando Next.js e animações com Framer Motion, priorizando desempenho e experiência do usuário.",
    description: [
      "O projeto consiste em um site de casamento desenvolvido com o objetivo de apresentar, de forma simples e elegante, todas as informações relacionadas ao evento. A aplicação foi construída utilizando Next.js, com foco em performance, organização do código e boa experiência do usuário. O layout foi pensado para ser leve, intuitivo e acessível em diferentes dispositivos.",
      "No front-end, o site reúne informações essenciais sobre o casamento, como a história do casal, fotos, data, horário e local da cerimônia e da recepção. Também foi implementado um contador regressivo que realiza a contagem até o grande dia, criando um elemento visual dinâmico e interativo para os convidados acompanharem a proximidade do evento.",
      "Para enriquecer a experiência visual, foram utilizadas animações com Framer Motion e Twindie Animation, aplicadas de forma sutil para dar fluidez às transições e destacar elementos importantes da página. Essas animações contribuem para tornar a navegação mais agradável sem comprometer o desempenho do site.",
      "Outro ponto central do projeto é a lista de presentes, organizada em cards que exibem os itens disponíveis de forma clara e visual. Os convidados podem escolher diferentes formas de presentear, como levar o presente no dia do casamento, realizar o pagamento via PIX ou comprar o presente online e levá-lo no evento.",
      "Na opção de pagamento via PIX, o sistema disponibiliza todas as informações necessárias, incluindo QR Code e código copia e cola, facilitando a transferência. Já na opção de compra online, o convidado é redirecionado diretamente para o site do produto escolhido, oferecendo praticidade, flexibilidade e uma experiência completa para o casal e os convidados."
    ]
  },
  {
    id: 2,
    name: "Casamento Lais e Eliabe",
    projectCategory: "Projeto Pessoal",
    technologiesUsed: "React 18, Bootstrap, Node.js/Express e MySQL",
    libraries:
      "Bootstrap, React Bootstrap, React Router DOM, React Icons, QRCode, React QR Code, React Input Mask, jQuery, jQuery Mask Plugin, React Phone Number Input, React Currency Input Field, React Number Format, React Copy To Clipboard, Pix Utils, Buffer",
    urlButton: {
      backEnd: "https://github.com/eliaberr/prjCasamentoBackend",
      frontEnd: "https://github.com/eliaberr/prjCasamento",
      deploy: "",
      video: "https://youtu.be/JOvp74PbhrU",

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
    id: 3,
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
      "A empresa SB4Host nos procurou com a necessidade de desenvolver um novo site. Inicialmente, a ideia era criar apenas uma Landing Page padrão, mas após algumas conversas com o dono, identificamos um problema recorrente: sempre que ele alterava os valores dos planos na plataforma WHMCS, também precisava atualizar manualmente os preços no site. Esse processo gerava retrabalho e, muitas vezes, inconsistências entre as informações apresentadas.",
      "Diante dessa situação, eu e alguns amigos nos unimos para desenvolver o projeto como freelancers. Decidimos reformular completamente o site, criando não apenas uma nova identidade visual mais moderna e alinhada ao público-alvo, mas também implementando funcionalidades inteligentes que solucionassem os problemas enfrentados.",
      "Durante a pesquisa, descobrimos que o WHMCS possuía uma API que permitia integração direta com o front-end. Aproveitamos essa oportunidade para implementar a solução: agora, sempre que os valores são alterados na plataforma de gerenciamento, a atualização acontece automaticamente no site, sem a necessidade de intervenção manual.",
      "Além da parte de preços, também integramos o menu de categorias, tornando possível adicionar ou remover serviços de forma dinâmica. Essa melhoria foi essencial, pois antes aconteciam situações em que o cliente visualizava no site um serviço aparentemente disponível, mas que na prática não estava mais ativo, causando frustração e transtornos. Com a integração, os serviços são sincronizados em tempo real: se um produto não estiver disponível, ele é automaticamente desativado no site.",
      "O resultado foi um site totalmente responsivo, com design limpo e estratégico, organizado em seções para apresentação de serviços, planos de hospedagem, depoimentos, contato e chamadas para ação. Essa nova abordagem não só facilitou a gestão do cliente, mas também trouxe uma experiência mais clara, confiável e atrativa para os usuários finais.",
      "Em resumo, a Landing Page Hosting da SB4Host se tornou muito mais do que uma simples página de apresentação: passou a ser uma ferramenta prática, integrada e eficiente para a captação de clientes e gerenciamento de serviços de hospedagem."
    ]
  },
  {
    id: 4,
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
    id: 5,
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
  },
];
