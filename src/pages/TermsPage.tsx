import SEO from "@/components/seo/SEO";
import {
  FileText,
  Shield,
  Scale,
  Copyright,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Termos de Uso"
        description="Leia os Termos de Uso do TechZeon e conheça as condições para utilização do portal."
        canonical="/termos-de-uso"
      />

      <main className="bg-zinc-950 text-white">

        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-20">

            <div className="flex items-center gap-4">
              <FileText className="h-10 w-10 text-cyan-400" />

              <div>
                <h1 className="text-5xl font-black">
                  Termos de Uso
                </h1>

                <p className="mt-3 text-zinc-400">
                  Última atualização: Julho de 2026
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg leading-8 text-zinc-300">
              Estes Termos de Uso estabelecem as regras para utilização do
              portal TechZeon. Ao acessar o site, o usuário declara estar de
              acordo com as condições descritas nesta página.
            </p>

          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">

          <TermSection
            icon={<Scale />}
            title="1. Aceitação dos termos"
          >
            <p>
              O acesso ao TechZeon implica na aceitação destes Termos de Uso.
              Caso o usuário não concorde com qualquer disposição aqui
              apresentada, recomenda-se interromper a utilização do portal.
            </p>
          </TermSection>

          <TermSection
            icon={<Shield />}
            title="2. Uso do conteúdo"
          >
            <p>
              Todo o conteúdo publicado possui finalidade informativa e
              educacional. O usuário compromete-se a utilizar as informações de
              forma ética, respeitando a legislação vigente.
            </p>
          </TermSection>

          <TermSection
            icon={<Copyright />}
            title="3. Propriedade intelectual"
          >
            <p>
              Os textos, imagens, logotipos, identidade visual e demais
              elementos do TechZeon são protegidos pela legislação aplicável.
              A reprodução total ou parcial sem autorização poderá caracterizar
              violação de direitos autorais.
            </p>
          </TermSection>

          <TermSection
            icon={<AlertTriangle />}
            title="4. Limitação de responsabilidade"
          >
            <p>
              Embora o TechZeon busque publicar conteúdos corretos e
              atualizados, não garante que todas as informações estejam livres
              de erros, omissões ou desatualizações. O uso das informações é de
              responsabilidade exclusiva do usuário.
            </p>

            <p className="mt-4">
              O TechZeon não se responsabiliza por decisões tomadas com base
              exclusivamente nos conteúdos publicados.
            </p>
          </TermSection>

          <TermSection
            title="5. Links para terceiros"
          >
            <p>
              O portal pode conter links para sites externos. O TechZeon não
              possui controle sobre esses ambientes e não se responsabiliza
              pelos conteúdos, políticas ou serviços oferecidos por terceiros.
            </p>
          </TermSection>

          <TermSection
            title="6. Disponibilidade do serviço"
          >
            <p>
              O TechZeon poderá alterar, suspender ou interromper partes do
              portal para manutenção, atualização ou melhorias, sem aviso
              prévio.
            </p>
          </TermSection>

          <TermSection
            icon={<RefreshCw />}
            title="7. Alterações destes termos"
          >
            <p>
              Estes Termos de Uso poderão ser modificados a qualquer momento.
              A versão mais recente estará sempre disponível nesta página.
            </p>
          </TermSection>

          <TermSection
            title="8. Legislação aplicável"
          >
            <p>
              Estes Termos são regidos pela legislação brasileira. Eventuais
              conflitos serão solucionados conforme as leis vigentes no Brasil.
            </p>
          </TermSection>

          <TermSection
            title="9. Contato"
          >
            <p>
              Dúvidas sobre estes Termos de Uso poderão ser encaminhadas pelos
              canais oficiais disponibilizados na página de contato do
              TechZeon.
            </p>
          </TermSection>

        </section>

      </main>
    </>
  );
}

interface TermSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function TermSection({
  title,
  children,
  icon,
}: TermSectionProps) {
  return (
    <section className="mb-16">

      <div className="mb-5 flex items-center gap-3">

        {icon && (
          <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
            {icon}
          </div>
        )}

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <div className="space-y-4 leading-8 text-zinc-400">
        {children}
      </div>

    </section>
  );
}