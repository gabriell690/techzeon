import SEO from "@/components/seo/SEO";
import { ShieldCheck, Cookie, Lock, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Conheça como o TechZeon coleta, utiliza e protege as informações dos usuários."
        canonical="/politica-de-privacidade"
      />

      <main className="bg-zinc-950 text-white">

        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-20">

            <div className="flex items-center gap-4">
              <ShieldCheck className="h-10 w-10 text-cyan-400" />
              <div>
                <h1 className="text-5xl font-black">
                  Política de Privacidade
                </h1>

                <p className="mt-3 text-zinc-400">
                  Última atualização: Julho de 2026
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg leading-8 text-zinc-300">
              O TechZeon respeita a privacidade dos seus visitantes e está
              comprometido em proteger as informações coletadas durante a
              navegação em nosso portal.
            </p>

          </div>
        </section>

        {/* Conteúdo */}

        <section className="mx-auto max-w-4xl px-6 py-20">

          <PolicySection
            icon={<Globe />}
            title="1. Informações coletadas"
          >
            <p>
              Durante a navegação, informações técnicas podem ser coletadas
              automaticamente, como endereço IP, navegador utilizado,
              dispositivo, páginas acessadas e tempo de permanência no site.
            </p>

            <p className="mt-4">
              Caso o usuário entre em contato voluntariamente por meio dos
              canais disponibilizados pelo TechZeon, poderão ser coletadas
              apenas as informações necessárias para responder à solicitação.
            </p>
          </PolicySection>

          <PolicySection
            icon={<Cookie />}
            title="2. Cookies"
          >
            <p>
              Utilizamos cookies para melhorar a experiência de navegação,
              lembrar preferências, compreender o comportamento dos visitantes
              e oferecer conteúdos mais relevantes.
            </p>

            <p className="mt-4">
              O usuário pode desabilitar os cookies diretamente nas
              configurações do navegador, embora algumas funcionalidades do
              site possam ser afetadas.
            </p>
          </PolicySection>

          <PolicySection
            icon={<ShieldCheck />}
            title="3. Publicidade"
          >
            <p>
              O TechZeon poderá utilizar serviços de publicidade, incluindo o
              Google AdSense. Esses serviços podem utilizar cookies para exibir
              anúncios relevantes com base nas visitas anteriores do usuário a
              este e a outros sites.
            </p>

            <p className="mt-4">
              Para mais informações sobre publicidade personalizada, consulte
              as políticas oficiais do Google.
            </p>
          </PolicySection>

          <PolicySection
            icon={<Lock />}
            title="4. Segurança"
          >
            <p>
              Empregamos medidas técnicas e organizacionais para proteger as
              informações processadas pelo portal contra acessos não autorizados
              e uso indevido.
            </p>
          </PolicySection>

          <PolicySection title="5. Links externos">
            <p>
              Nosso conteúdo pode conter links para sites de terceiros. O
              TechZeon não é responsável pelas políticas de privacidade ou
              práticas adotadas por esses sites.
            </p>
          </PolicySection>

          <PolicySection title="6. Direitos do usuário">
            <p>
              Sempre que aplicável, o usuário poderá solicitar informações
              sobre os dados eventualmente tratados pelo TechZeon, bem como
              solicitar atualização ou exclusão quando permitido pela
              legislação vigente.
            </p>
          </PolicySection>

          <PolicySection title="7. Alterações nesta política">
            <p>
              Esta Política de Privacidade poderá ser atualizada
              periodicamente para refletir mudanças legais, tecnológicas ou
              operacionais. A data da última atualização será sempre indicada
              nesta página.
            </p>
          </PolicySection>

          <PolicySection title="8. Contato">
            <p>
              Em caso de dúvidas relacionadas a esta Política de Privacidade,
              utilize os canais oficiais disponibilizados na página de contato
              do TechZeon.
            </p>
          </PolicySection>

        </section>

      </main>
    </>
  );
}

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function PolicySection({
  title,
  children,
  icon,
}: PolicySectionProps) {
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