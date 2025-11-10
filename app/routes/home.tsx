import { LocationEditIcon, MapIcon, PhoneIcon } from "lucide-react";
import type { Route } from "./+types/home";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VIDERE - Excelência em Saúde" },
    {
      name: "description",
      content: "Clínica Multiespecialidade em Sobral - Ceará",
    },
    {
      name: "keywords",
      content:
        "VIDERE, clínica, multiespecialidade, Sobral, Ceará, consultas, saúde, atendimento médico, clínica em Sobral, " +
        "Clínico Geral, Ginecologista, Cirurgia Minimamente Invasiva, Dermatologista, Estética Clínica, Dentista, Implantodontista, " +
        "Fisioterapeuta, Acupunturista, Psicóloga, Psicólogo, ginecologia, consulta ginecológica, prevenção feminina, saúde da mulher, " +
        "dermatologia, cuidados com a pele, estética facial, estética corporal, odontologia, implantes dentários, saúde bucal, " +
        "fisioterapia, acupuntura, reabilitação, dor, psicologia, saúde emocional, terapia, bem-estar, autocuidado, agendamento, " +
        "consultas médicas Sobral, especialistas Sobral, clínica sobral centro, RQE, CRM, CREMEC, CREFITO, CRP",
    },
  ];
}

type Especialista = {
  id: string;
  nome: string;
  especialidade: string;
  conselho?: string;
  foto: string;
  artigo: string;
};

const especialistas: Especialista[] = [
  {
    id: "roque",
    nome: "Dr. Roque Linhares",
    especialidade: "Clínico Geral",
    foto: "especialistas/roque.png",
    artigo: "o",
  },
  {
    id: "iara",
    nome: "Dra. Iara Tomaz",
    especialidade: "Ginecologista e Cirurgia Minimamente Invasiva",
    conselho: "CREMEC 20975 / RQE 16148 - 18129",
    foto: "especialistas/iara.png",
    artigo: "a",
  },
  {
    id: "andyara",
    nome: "Dra. Andyara",
    especialidade: "Ginecologista",
    conselho: "CREMEC 21112 / RQE 17006",
    foto: "especialistas/andyara.png",
    artigo: "a",
  },
  {
    id: "mario",
    nome: "Dr. Mário Timbó",
    especialidade: "Dermatologista",
    foto: "especialistas/mario.png",
    artigo: "o",
  },
  {
    id: "beatriz",
    nome: "Dra. Ana Beatriz",
    especialidade: "Estética Clínica",
    conselho: "CRM-CE 24490",
    foto: "especialistas/beatriz.png",
    artigo: "a",
  },
  {
    id: "talita",
    nome: "Dra. Talita Ponte",
    especialidade: "Clínica Geral",
    conselho: "CRM-CE 27637",
    foto: "especialistas/talita.png",
    artigo: "a",
  },
  {
    id: "carloseduardo",
    nome: "Carlos Eduardo",
    especialidade: "Dentista e Implantodontista",
    foto: "especialistas/carloseduardo.png",
    artigo: "o",
  },
  {
    id: "suelena",
    nome: "Suelena Ponte",
    especialidade: "Fisioterapeuta e Acupunturista",
    conselho: "CREFITO 212484-F",
    foto: "especialistas/suelena.png",
    artigo: "a",
  },
  {
    id: "saravasconcelos",
    nome: "Sara Vasconcelos",
    especialidade: "Fisioterapeuta",
    foto: "especialistas/sara.png",
    artigo: "a",
  },
  {
    id: "clararipardo",
    nome: "Clara Ripardo",
    especialidade: "Fisioterapeuta",
    conselho: "CREFITO 298410-F",
    foto: "especialistas/videre.png",
    artigo: "a",
  },
  {
    id: "celialinhares",
    nome: "Célia Linhares",
    especialidade: "Fisioterapeuta",
    foto: "especialistas/videre.png",
    artigo: "a",
  },
  {
    id: "andersonmota",
    nome: "Anderson Mota",
    especialidade: "Psicólogo",
    conselho: "CRP 11/09704",
    foto: "especialistas/anderson.png",
    artigo: "o",
  },
  {
    id: "joseairton",
    nome: "José Airton",
    especialidade: "Psicólogo",
    conselho: "CRP 11/10803",
    foto: "especialistas/airton.png",
    artigo: "o",
  },
  {
    id: "amandamedeiros",
    nome: "Amanda Medeiros",
    especialidade: "Psicóloga",
    conselho: "CRP 11/18491",
    foto: "especialistas/videre.png",
    artigo: "a",
  },
];

const cta = [
  `Olá, gostaria de conversar sobre o atendimento com __artigo__ __especialista__. Podem me orientar nos próximos passos?`,
  `Oi, queria entender como funciona o agendamento com __artigo__ __especialista__. Podem me ajudar?`,
  `Olá, estou buscando atendimento com __artigo__ __especialista__. Me contam como iniciar o processo?`,
  `Oi, podem me orientar sobre disponibilidade de agenda com __artigo__ __especialista__?`,
  `Olá, gostaria de marcar uma consulta com __artigo__ __especialista__. Qual o melhor caminho por aqui?`,
  `Oi, podem me ajudar a encontrar um bom horário para consultar com __artigo__ __especialista__?`,
  "Olá, queria conversar sobre atendimento com __artigo__ __especialista__. Como funciona o agendamento?",
  "Oi, estou em busca de uma consulta com __artigo__ __especialista__. Podem me guiar no processo?",
  "Olá, gostaria de saber mais sobre como agendar com __artigo__ __especialista__. Me ajudam com os próximos passos?",
  "Oi, podem me orientar com calma sobre a agenda do(a) __artigo__ __especialista__? Quero agendar uma consulta.",
];

export default function Home() {
  return (
    <div className="bg-egeu-3 min-h-screen relative text-marmore-1">
      <BACKGROUND />

      <div className="relative max-w-3xl mx-auto">
        <div className="p-8 w-96 mx-auto">
          <VIDERE />
        </div>
        <div className="px-8">
          <div className="text-center leading-tight font-medium tracking-tighter text-xl border p-4">
            Agende uma consulta ou procedimento <br /> com um dos nossos
            especialistas
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] p-8 gap-4 ">
          {especialistas.map((especialista) => (
            <Link
              to={`/whatsapp?text=${cta[Math.floor(Math.random() * cta.length)]
                .replace("__artigo__", especialista.artigo)
                .replace("__especialista__", especialista.nome)}`}
              key={especialista.id}
              className="flex text-center flex-col gap-2"
            >
              <div className="rounded-br-3xl relative overflow-hidden">
                <div className="absolute top-1/3 left-0 w-full h-full bg-egeu-2 rounded-tl-3xl"></div>
                <img
                  src={especialista.foto}
                  alt={especialista.nome}
                  className="w-full relative"
                />
              </div>

              <div className="text-xl leading-none font-medium tracking-tighter">
                {especialista.nome}
              </div>
              <div className="text-sm leading-tight">
                {especialista.especialidade}
              </div>
              {especialista.conselho && (
                <div className="uppercase text-[10px] tracking-wider">
                  {especialista.conselho}
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="px-8 flex gap-2 flex-col">
          <div className="font-bold text-xl flex gap-2 items-center">
            <FaWhatsapp className="size-6" /> 3613-4001
          </div>
          <div className="flex gap-2 font-bold items-center">
            <FaInstagram className="size-6" />
            @videresaude
          </div>
          <div className="flex gap-2">
            <MapIcon />
            <div className="leading-tight">
              <div>Rua Dr. Figueiredo Rodrigues, 573</div>
              <div>Centro, Sobral - CE</div>
            </div>
          </div>
        </div>
        <div className="border-b pb-8 mx-8"></div>

        <div className="p-8 text-sm">
          <h1 className="font-bold">
            A VIDERE é uma clínica multiespecialidades em Sobral que escolheu
            cuidar de um jeito diferente.
          </h1>
          <p>
            Nossas especialidades: Ginecologia e Cirurgia Minimamente Invasiva •
            Dermatologia • Clínica Geral • Odontologia e Implantodontia •
            Fisioterapia e Acupuntura • Psicologia.
          </p>
          <p>
            Na VIDERE, você não é apenas um caso clínico. Sua história e sua
            individualidade fazem parte do tratamento.
          </p>
        </div>
      </div>
    </div>
  );
}

export const VIDERE = () => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      version="1.1"
      viewBox="0 0 1946 582"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g transform="translate(-1334.7 1725)">
        <g transform="matrix(1.3061 0 0 1.3061 425 -3642.4)">
          <g transform="matrix(5.4149 0 0 5.4149 -23328 -3820.5)">
            <path
              d="m4564.8 999.01h1.5l-16.3 37.25h-1.1l-16.3-37.25h2.242c1.523 0 2.902 0.902 3.512 2.297 3.16 7.232 12.696 29.053 12.696 29.053l13.75-31.35z"
              fillRule="nonzero"
            />
          </g>
          <g transform="matrix(5.4149 0 0 -5.4149 -23328 7200.3)">
            <path
              d="m4571.3 999.01h1.078c0.934 0 1.83 0.371 2.49 1.032 0.661 0.66 1.032 1.556 1.032 2.49v33.728h-4.6v-37.25z"
              fillRule="nonzero"
            />
          </g>
          <g transform="matrix(5.4149 0 0 5.4149 -23328 -3820.5)">
            <path d="m4581.7 1000.4v-1.447h11.35c3 0 5.666 0.5 8 1.5 2.333 1 4.3 2.342 5.9 4.025s2.825 3.658 3.675 5.925 1.275 4.683 1.275 7.25-0.434 4.983-1.3 7.25c-0.867 2.267-2.109 4.242-3.725 5.925-1.617 1.683-3.592 3.008-5.925 3.975-2.334 0.967-5 1.45-8 1.45l-6.75-0.05h-4.6v-1.45l0.095-32.953h1.079c0.933 0 1.827 0.371 2.486 1.032s1.028 1.556 1.025 2.49c-0.024 8.498-0.085 29.431-0.085 29.431h4.8c2.9 0 5.383-0.408 7.45-1.225 2.066-0.817 3.75-1.983 5.05-3.5s2.258-3.325 2.875-5.425c0.616-2.1 0.925-4.417 0.925-6.95s-0.3-4.858-0.9-6.975-1.55-3.933-2.85-5.45-2.975-2.692-5.025-3.525-4.525-1.25-7.425-1.25l-9.4-0.053z" />
          </g>
          <g transform="translate(-14203 1504.9)">
            <path d="m16245 285.9v-104.78h121.84v7.851h-96.926v89.075h119.13v7.851h-144.04zm24.909-112.63c-6.606 0-12.942-2.624-17.613-7.295s-7.296-11.007-7.296-17.613v-64.169h144.04v7.852h-119.13v81.225z" />
          </g>
          <g transform="translate(-14568 1504.9)">
            <path d="m16245 285.9v-104.78h121.84v7.851h-96.926v89.075h119.13v7.851h-144.04zm24.909-112.63c-6.606 0-12.942-2.624-17.613-7.295s-7.296-11.007-7.296-17.613v-64.169h144.04v7.852h-119.13v81.225z" />
          </g>
          <g transform="matrix(5.4149 0 0 5.4149 -23328 -3820.5)">
            <path d="m4649.7 1018.4v-19.353h15.8c1.866 0 3.466 0.258 4.8 0.775 1.333 0.517 2.425 1.208 3.275 2.075s1.475 1.883 1.875 3.05 0.6 2.417 0.6 3.75c0 1.2-0.167 2.342-0.5 3.425-0.334 1.083-0.842 2.05-1.525 2.9-0.684 0.85-1.567 1.558-2.65 2.125-1.084 0.567-2.375 0.933-3.875 1.1l12.25 18.05h-5.55l-12.2-17.9-12.3 3e-3zm1.078 1.45c0.934 0 1.83 0.371 2.49 1.032 0.661 0.66 1.032 1.556 1.032 2.49v12.925h-4.6v-16.447h1.078zm13.722-2.953c1.466 0 2.65-0.217 3.55-0.65s1.6-1.017 2.1-1.75 0.841-1.6 1.025-2.6c0.183-1 0.275-2.067 0.275-3.2s-0.092-2.192-0.275-3.175c-0.184-0.983-0.525-1.85-1.025-2.6s-1.2-1.342-2.1-1.775-2.084-0.65-3.55-0.65h-10.2v16.4h10.2z" />
          </g>

          <g transform="matrix(1.0563 0 0 1.0563 -2546.8 -4516.1)">
            <path d="m3264.4 5958c0.12-0.593 0.128-1.221 0.359-1.78 0.105-0.254 0.715-1.729 2.429-2.429 0.38-0.155 2.952-0.481 3.21-0.514 22.83-2.894 36.75-15.484 38.296-16.811 15.453-13.271 20.368-29.339 20.667-30.212 2.975-8.678 4.52-17.555 3.432-29.309-0.465-5.035-1.657-12.361-6.055-21.908-0.353-0.767-3.415-7.429-8.432-13.781-1.801-2.279-5.984-8.037-14.123-13.858-1.75-1.252-8.903-7.041-21.988-10.744-7e-3 -1e-3 -11.169-3.619-25.653-2.033-18.626 2.04-31.437 11.753-32.481 12.502-2.296 1.648-25.82 17.816-29.44 50.88-0.251 2.299-0.362 2.569-0.447 2.777-0.703 1.714-2.175 2.323-2.429 2.429-0.375 0.155-2.833 1.173-4.986-0.98-1.48-1.479-1.238-1.674-1.405-3.759-0.631-7.883-1.954-36.165 20.741-62.323 15.501-17.868 33.147-24.012 37.161-25.434 8.977-3.18 22.125-6.33 38.821-4.764 5.273 0.495 16.187 1.824 29.668 8.108 9.064 4.225 14.823 8.539 18.916 11.915 7.034 5.802 11.607 11.272 13.697 13.855 2.348 2.902 4.88 6.932 5.273 7.556 7.692 12.245 10.368 23.316 11.442 28.482 3.645 17.529 1.221 30.808 0.696 33.851-3.31 19.208-11.542 31.561-15.012 36.472-5.26 7.443-14.055 17.655-28.576 25.819-20.128 11.318-37.972 11.063-43.293 10.927-2.914-0.074-5.449-0.32-5.922-0.366-1.812-0.176-1.938-0.073-3.227-1.362-0.197-0.197-1.653-1.653-1.339-3.206zm45.699-214.81c-0.458 1.721-0.557 1.765-2.1 2.653-1.991 1.146-2.13 0.838-4.383 0.396-7.634-1.497-52.38-10.757-97.674 17.309-11.702 7.251-30.248 20.989-44.764 45.498-3.805 6.424-11.494 20.427-15.683 41.541-1.745 8.793-3.992 24.287-0.855 44.881 2.768 18.172 9.107 31.948 9.983 33.981 5.051 11.717 12.086 23.307 22.729 35.272 3.876 4.358 15.24 16.82 34.865 27.486 32.857 17.857 64.131 15.795 69.011 15.528 48.411-2.654 85.392-30.093 105.72-62.067 10.531-16.568 14.401-30.872 14.62-31.14 0.74-0.909 1.206-2.14 2.222-2.725 0.015-8e-3 3.365-0.483 3.372-0.477 2.96 2.331 3.909 2.361 3.106 6.041-2.274 10.415-13.469 59.657-64.675 92.556-33.244 21.359-64.535 23.379-73.308 23.866-14.154 0.786-37.082 0.17-63.75-10.09-9.588-3.689-25.724-10.844-43.252-25.556-13.612-11.425-21.476-21.848-25.3-27.134-9.36-12.936-14.59-24.294-16.951-29.673-2.481-5.651-4.611-12.328-4.959-13.418-7.078-22.185-7.348-40.767-6.918-51.367 1.157-28.504 9.772-48.75 12.496-55.022 12.543-28.885 30.199-45.839 38.206-52.975 11.404-10.166 30.065-23.85 57.139-31.946 37.252-11.14 67.05-4.55 76.991-2.113 5.858 1.435 10.195 2.892 10.858 3.111 1.759 0.581 1.823 0.635 2.756 2.234 0.899 1.54 0.961 1.628 0.502 3.35zm-97.467 328.42c0.269-0.543 0.44-1.147 0.808-1.627 0.167-0.218 1.138-1.484 2.975-1.717 0.193-0.025 0.76-0.097 2.417 0.266 12.584 2.759 71.745 15.61 134.84-18.778 39.685-21.629 59.944-50.426 65.457-58.222 10.878-15.382 23.809-38.49 30.582-70.902 2.65-12.681 6.298-36.049 1.772-66.35-3.876-25.956-12.566-45.263-14.856-50.447-6.726-15.228-16.774-32.581-33.128-50.689-6.023-6.668-23.511-25.439-52.99-40.698-46.076-23.849-88.852-21.316-97.682-20.8-56.392 3.29-104.05 30.429-136 68.217-23.155 27.381-32.967 54.533-37.252 68.403-0.27 0.872-0.238 0.894-0.789 1.618-1.122 1.473-2.702 1.681-2.974 1.717-0.404 0.053-3.045 0.401-4.569-2.238-1.079-1.869-0.815-2.003-0.324-4.106 11.496-49.165 41.578-95.866 90.117-126.87 46.379-29.624 90.112-32.33 103.34-32.94 18.868-0.87 49.847 0.147 85.777 13.889 15.104 5.777 36.676 15.859 59.572 34.92 19.236 16.014 30.541 30.996 35.686 38.094 2.244 3.094 14.463 19.949 23.651 41.511 8.091 18.988 11.58 35.849 12.244 39.055 3.5 16.916 5.596 36.754 3.622 60.216-2.809 33.388-12.635 57.393-17.06 67.488-16.872 38.498-40.434 61.783-52.779 72.769-14.12 12.566-39.548 31.964-77.305 43.685-50.692 15.736-91.807 7.639-106.65 4.245-8.061-1.843-14.002-3.722-15.271-4.116-1.748-0.543-1.848-0.559-2.763-2.144-0.139-0.241-1.17-2.026-0.462-3.449z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const BACKGROUND = () => {
  return (
    <div className="w-full h-full absolute z-0 overflow-hidden">
      <div className="grid grid-cols-6">
        {Array(120)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border opacity-5 aspect-square"></div>
          ))}
      </div>
    </div>
  );
};
