import { useSearchParams } from "react-router";
import { BACKGROUND, VIDERE } from "./home";
import type { Route } from "../+types/root";
import { useEffect } from "react";

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

const frasesSaude = [
  { frase: "Andar é o melhor remédio.", autor: "Hipócrates" },
  { frase: "O corpo alcança o que a mente acredita.", autor: "Napoleon Hill" },
  {
    frase: "A saúde é o bem mais precioso e o menos compreendido.",
    autor: "Sócrates",
  },
  {
    frase: "O segredo do cuidado com o paciente é cuidar do paciente.",
    autor: "Francis W. Peabody",
  },
  {
    frase: "A medicina cura às vezes, alivia muitas vezes, consola sempre.",
    autor: "Ambroise Paré",
  },
  { frase: "A força física é a primeira felicidade.", autor: "Joseph Pilates" },
  {
    frase: "A qualidade de vida começa quando a gente se escolhe.",
    autor: "Carl Jung",
  },
  {
    frase: "A saúde é a primeira forma de liberdade.",
    autor: "Henri-Frédéric Amiel",
  },
  { frase: "A alma que sorri, cura o corpo.", autor: "William Shakespeare" },
  { frase: "A vida exige movimento.", autor: "Aristóteles" },
  {
    frase:
      "Se não encontrar tempo para a saúde, vai ter que arrumar tempo para a doença.",
    autor: "Robin Sharma",
  },
  { frase: "A cura está dentro de você.", autor: "Hipócrates" },
  {
    frase:
      "A disciplina é escolher o que você mais quer em vez do que você quer agora.",
    autor: "Abraham Lincoln",
  },
  { frase: "O homem não morre, ele se mata.", autor: "Sêneca" },
  {
    frase:
      "O médico do futuro não tratará o corpo humano com drogas, mas pela nutrição.",
    autor: "Thomas Edison",
  },
  { frase: "A mente firme manda no corpo.", autor: "Virgílio" },
  {
    frase: "Saúde não é ausência de doença, é presença de propósito.",
    autor: "Viktor Frankl",
  },
  {
    frase: "O melhor remédio é ensinar as pessoas a não precisarem de remédio.",
    autor: "Hipócrates",
  },
  {
    frase: "Faça do cuidado um hábito, não uma urgência.",
    autor: "James Clear",
  },
  { frase: "O equilíbrio é o grande segredo da longevidade.", autor: "Galeno" },
  {
    frase: "O sofrimento é opcional quando a disciplina é escolhida.",
    autor: "Marco Aurélio",
  },
  {
    frase: "A saúde é a maior posse. A alegria é o maior tesouro.",
    autor: "Lao Tsé",
  },
  {
    frase: "Mude seu corpo mudando sua rotina.",
    autor: "Dr. Rangan Chatterjee",
  },
  { frase: "Seu corpo ouve tudo que sua mente diz.", autor: "Naomi Judd" },
  {
    frase: "A recuperação começa quando você decide começar.",
    autor: "Dr. Gabor Maté",
  },
];

export default function Whatsapp() {
  const [searchParams] = useSearchParams();
  const frase = frasesSaude[Math.floor(Math.random() * frasesSaude.length)];

  useEffect(() => {
    window.location.href = `https://wa.me/558836134001?text=${searchParams.get(
      "text"
    )}`;
  }, [searchParams]);

  return (
    <div className="bg-egeu-3 p-8 min-h-screen grid place-content-center text-marmore-1 relative">
      <BACKGROUND />
      <div className="flex gap-12 flex-col relative max-w-xl mx-auto">
        <div>
          <div className="relative">
            <VIDERE_LOADING />
          </div>
        </div>

        <h1 className="text-5xl tracking-tight">
          Estamos te levando para o WhatsApp.
        </h1>
        <div className="text-2xl relative">
          <div className="absolute text-[300px]  text-egeu-2  -top-24 -left-8 z-0">
            “
          </div>
          <div className="relative">
            <div className="z-10">{frase.frase}</div>
            <div className="text-base">{frase.autor}</div>
          </div>
        </div>

        <div className="bg-egeu-2 p-4">{searchParams.get("text")}</div>

        <div className="w-40 self-end text-right">
          <VIDERE />
        </div>
      </div>
    </div>
  );
}

const VIDERE_LOADING = () => {
  return (
    <div className="relative w-1/3">
      <svg
        className="absolute top-0 left-0 animate-spin"
        fill="currentColor"
        viewBox="0 0 700 800"
        style={{ animationDuration: "10s" }}
      >
        <path
          d="M3212.7 6071.6c.2-.5.4-1.1.8-1.6.1-.2 1.1-1.5 3-1.7a7 7 0 0 1 2.4.2 194.7 194.7 0 0 0 134.8-18.8c39.7-21.6 60-50.4 65.5-58.2a187.6 187.6 0 0 0 30.6-70.9c2.6-12.7 6.3-36 1.7-66.3-3.9-26-12.5-45.3-14.8-50.5a188 188 0 0 0-86.1-91.4c-46.1-23.8-88.9-21.3-97.7-20.8a192.3 192.3 0 0 0-136 68.3 194 194 0 0 0-37.3 68.4c-.3.8-.2.9-.8 1.6-1.1 1.4-2.7 1.7-3 1.7-.4 0-3 .4-4.5-2.2-1.1-2-.8-2-.3-4.2a205.7 205.7 0 0 1 90-126.8 209.5 209.5 0 0 1 189.2-19 208.3 208.3 0 0 1 95.2 73c2.3 3 14.5 19.9 23.7 41.5a207 207 0 0 1 15.9 99.3 210.9 210.9 0 0 1-147.2 183.9 204.3 204.3 0 0 1-106.6 4.2c-8-1.8-14-3.7-15.3-4.1-1.7-.5-1.8-.6-2.8-2.1-.1-.3-1.1-2-.4-3.5Z"
          transform="matrix(1.4 0 0 1.4 -4236.2 -7815.8)"
        />
      </svg>
      <svg
        className="absolute top-0 right-0 animate-spin"
        fill="currentColor"
        viewBox="0 0 700 800"
        style={{ animationDuration: "12s" }}
      >
        <path
          d="M3310.1 5743.2c-.4 1.7-.5 1.7-2 2.6-2 1.2-2.2.9-4.4.4-7.7-1.5-52.4-10.7-97.7 17.3a132.7 132.7 0 0 0-60.5 87c-1.7 8.9-4 24.4-.8 45 2.8 18.1 9 31.9 10 34a129 129 0 0 0 57.6 62.7c32.8 17.9 64 15.8 69 15.5 48.4-2.6 85.4-30 105.7-62 10.5-16.6 14.4-31 14.6-31.2.7-.9 1.2-2.1 2.2-2.7l3.4-.5c3 2.3 4 2.4 3.1 6a147.3 147.3 0 0 1-64.7 92.6 150.7 150.7 0 0 1-137 13.8 150.1 150.1 0 0 1-68.6-52.7c-9.3-13-14.6-24.3-17-29.7-2.4-5.6-4.5-12.3-4.9-13.4-7-22.2-7.3-40.8-7-51.4a152.7 152.7 0 0 1 50.8-108 149.8 149.8 0 0 1 134.1-34c5.9 1.4 10.2 2.9 10.9 3 1.7.7 1.8.7 2.7 2.3 1 1.6 1 1.7.5 3.4Z"
          transform="matrix(1.4 0 0 1.4 -4236.2 -7815.8)"
        />
      </svg>
      <svg
        className="animate-spin"
        fill="currentColor"
        viewBox="0 0 700 800"
        style={{ animationDuration: "14s" }}
      >
        <path
          d="m3264.4 5958 .4-1.8c.1-.2.7-1.7 2.4-2.4.4-.2 3-.5 3.2-.5 22.9-3 36.8-15.5 38.3-16.8 15.5-13.3 20.4-29.4 20.7-30.3a66.6 66.6 0 0 0-2.6-51.2c-.4-.7-3.4-7.4-8.5-13.8-1.8-2.2-6-8-14-13.8-1.8-1.3-9-7-22-10.8 0 0-11.2-3.6-25.7-2-18.6 2-31.5 11.8-32.5 12.5-2.3 1.7-25.8 17.8-29.4 50.9-.3 2.3-.4 2.6-.5 2.8-.7 1.7-2.2 2.3-2.4 2.4-.4.2-2.8 1.2-5-1-1.5-1.5-1.2-1.7-1.4-3.7-.6-8-2-36.2 20.7-62.4a89.7 89.7 0 0 1 124.6-10.2c7 5.9 11.6 11.3 13.7 14a86 86 0 0 1 16.7 36c3.7 17.5 1.2 30.8.7 33.8a88.1 88.1 0 0 1-43.6 62.3 83 83 0 0 1-49.2 10.6c-1.8-.2-2-.1-3.2-1.4-.2-.2-1.7-1.7-1.4-3.2Z"
          transform="matrix(1.4 0 0 1.4 -4236.2 -7815.8)"
        />
      </svg>
    </div>
  );
};
