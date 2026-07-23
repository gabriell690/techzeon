import SEO from "@/components/seo/SEO";
import {
  Mail,
  MessageSquare,
  Clock3,
  HelpCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO:
    // Integrar futuramente com Supabase / API / Resend

    console.log(form);

    alert(
      "Mensagem enviada com sucesso! Em breve entraremos em contato."
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a equipe do TechZeon."
        canonical="/contato"
      />

      <main className="bg-zinc-950 text-white">

        {/* Hero */}

        <section className="border-b border-zinc-800">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-400">
              FALE CONOSCO
            </span>

            <h1 className="mt-6 text-5xl font-black">
              Entre em contato com o TechZeon
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Tem alguma dúvida, sugestão, encontrou algum erro ou deseja
              entrar em contato com nossa equipe? Utilize o formulário abaixo.
            </p>

          </div>

        </section>

        {/* Conteúdo */}

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[340px_1fr]">

          {/* Cards */}

          <aside className="space-y-6">

            <InfoCard
              icon={<Mail />}
              title="E-mail"
              text="contato@techzeon.com"
            />

            <InfoCard
              icon={<Clock3 />}
              title="Atendimento"
              text="Segunda a Sexta • 09h às 18h"
            />

            <InfoCard
              icon={<MessageSquare />}
              title="Resposta"
              text="Normalmente em até 48 horas."
            />

          </aside>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <Input
                label="Nome"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                label="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />

            </div>

            <Input
              label="Assunto"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />

            <div>

              <label className="mb-2 block font-medium">
                Mensagem
              </label>

              <textarea
                rows={8}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-cyan-400"
              />

            </div>

            <button
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              <Send size={18} />
              Enviar mensagem
            </button>

          </form>

        </section>

        {/* FAQ */}

        <section className="border-t border-zinc-800">

          <div className="mx-auto max-w-5xl px-6 py-20">

            <div className="mb-12 flex items-center gap-3">

              <HelpCircle className="text-cyan-400" />

              <h2 className="text-4xl font-black">
                Perguntas Frequentes
              </h2>

            </div>

            <div className="space-y-8">

              <Faq
                question="Posso sugerir uma pauta?"
                answer="Sim. Estamos sempre abertos a sugestões de conteúdos e notícias relevantes para nossos leitores."
              />

              <Faq
                question="Como reportar um erro em um artigo?"
                answer="Utilize o formulário desta página informando o link do conteúdo e uma breve descrição da correção."
              />

              <Faq
                question="Vocês aceitam parcerias?"
                answer="Analisamos propostas de parceria relacionadas ao universo da tecnologia e inovação."
              />

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div>

      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-cyan-400"
      />

    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">

      <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {text}
      </p>

    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">

      <h3 className="text-xl font-semibold">
        {question}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {answer}
      </p>

    </div>
  );
}