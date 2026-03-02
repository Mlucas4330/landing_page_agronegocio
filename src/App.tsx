import { ChevronDown, LucideX, FileSearch, BookOpen, MousePointerClick, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import { ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import TryLegnet from './components/TryLegnet';
import isos from './assets/isos.png';
import criativo_vertical from './assets/criativo_vertical.mp4';
import Marquee from "react-fast-marquee"
import abengoa from "./assets/abengoa.png"
import cocacola from "./assets/cocacola.png"
import raizen from "./assets/raizen.png"
import tigre from "./assets/tigre.png"
import volvo from "./assets/volvo.png"
import { emptyForm, formatPhone, formatCNPJ, submitToHubSpot } from "./utils/hubspotService"

function App() {
  const formRef = useRef<HTMLElement>(null);
  const [showFloatingVideo, setShowFloatingVideo] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'telefone') {
      setFormData(prev => ({ ...prev, [id]: formatPhone(value) }));
    } else if (id === 'cnpj') {
      setFormData(prev => ({ ...prev, [id]: formatCNPJ(value) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitToHubSpot(formData);
    setLoading(false);
    if (success) setFormData(emptyForm);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingVideo(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-[#f5f5f5] text-black">

        {/* HEADER */}
        <header className="sticky top-0 z-50">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 rounded-full backdrop-blur-xs shadow-lg">
                <img
                  src="icone_legnet.png"
                  alt="Legnet"
                  className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_#c5ff00]"
                />
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 shadow-lg text-base md:text-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-xs rounded-full">
                Agile & LegNet
              </button>
            </div>
            <button
              onClick={scrollToForm}
              className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
            >
              Peça uma Demonstração Rápida
            </button>
          </div>
        </header>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8 py-12 md:py-16">
          <section className="space-y-8 md:space-y-12">
            <div className="text-8xl lg:text-9xl font-bold leading-none">
              Agile<br />
              <span className="relative inline-block">
                Insig
                <span className="relative inline-block">
                  <button className="absolute -top-10 sm:-top-12 md:-top-14 left-0 shadow-lg rounded-full backdrop-blur-xs p-3 md:p-4 transition-all duration-300 hover:scale-110">
                    <img
                      src="icone_legnet.png"
                      alt="Legnet"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_10px_#c5ff00]"
                    />
                  </button>
                  ht
                </span>
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-light">
              Embargo não avisa. Licença vencida não espera a colheita.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-light">
              Sua produção, sua venda e seu crédito estão seguros contra os riscos que podem paralisar sua fazenda da noite para o dia? Com Agile e LegNet, a resposta é um SIM direto e reto.
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                'Todas as suas licenças e obrigações em um só lugar, com alertas automáticos',
                'Evidências organizadas para vender sua safra com poder de negociação',
                'Gestão ambiental profissional para acessar crédito com facilidade',
                'Chega de papelada: deixe a burocracia com a gente',
                'Foco no que você faz de melhor: produzir',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c5ff00] font-normal text-sm md:text-base">{i + 1}.</span>
                  <p className="font-light text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
              >
                Peça uma Demonstração Rápida
              </button>
              <p className="text-sm font-light text-gray-500 mt-3">
                Sem complicação. Veja em minutos como produzir com total segurança.
              </p>
            </div>
          </section>

          <section ref={formRef} className="bg-white space-y-6 md:space-y-8 shadow-lg rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-center">Solicite uma Proposta</h2>


            <a href="https://wa.me/5521997279076"
              target="_blank"
              rel="noopener noreferrer"
              className="block shadow-md bg-white rounded-full w-full py-3 text-center text-black text-sm md:text-base"
            >
              WhatsApp
            </a>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              {[
                { id: 'nome', label: 'Nome*', type: 'text', placeholder: 'Nome', required: true },
                { id: 'email', label: 'E-mail*', type: 'email', placeholder: 'email@exemplo.com', required: true },
                { id: 'telefone', label: 'Telefone*', type: 'text', placeholder: '(00) 00000-0000', required: true },
                { id: 'cnpj', label: 'CNPJ*', type: 'text', placeholder: 'CNPJ da Empresa', required: true },
                { id: 'motivosite', label: 'Motivo', type: 'text', placeholder: 'Como podemos ajudar?', required: false },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs md:text-sm font-normal mb-1">{label}</label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-6 shadow-md bg-white transition-all duration-300 hover:scale-105 cursor-pointer rounded-full text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                    placeholder={placeholder}
                    required={required}
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </section>
        </div>

        {/* SEÇÃO 2: O PROBLEMA */}
        <section className="px-4 md:px-8 gap-14 py-10 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Seu maior risco não é a praga. É a caneta.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Você trabalha de sol a sol para garantir a produtividade da sua terra. Mas enquanto você se preocupa com a colheita, a fiscalização, os compradores e os bancos se preocupam com outra coisa: conformidade. Você reconhece estes problemas?
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Risco de Embargo</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Uma única licença vencida ou uma condicionante não atendida pode resultar em um embargo que paralisa sua operação no momento mais crítico, colocando a safra inteira a perder.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Venda Bloqueada</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Cada vez mais, compradores e tradings exigem comprovação de conformidade ambiental. Sem evidências organizadas, você perde vendas, ou pior, vende por um preço menor.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Crédito Negado</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                A falta de uma gestão ambiental profissional e organizada é uma bandeira vermelha para os bancos. A dificuldade de comprovar sua conformidade pode fechar as portas para o crédito que você precisa para crescer.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6 sm:col-span-2 lg:col-span-3">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Gestão em Papel e Planilha</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Controlar dezenas de licenças, outorgas e prazos em planilhas ou na memória é a receita para o desastre. A chance de algo se perder é enorme.
              </p>
            </div>
          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* CLIENTES */}
        <section className="px-4 md:px-8 py-8 md:py-12 my-10 md:my-16 bg-[#c2c0c0]">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Quem produz com força, produz com segurança.
          </h2>

          <Marquee speed={50}>
            {[abengoa, cocacola, raizen, tigre, volvo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Logo Cliente"
                className="mx-8 md:mx-12 h-16 sm:h-20 md:h-28 w-auto"
              />
            ))}
          </Marquee>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* SEÇÃO 3: A SOLUÇÃO */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-white rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Produza, venda e cresça sem medo da burocracia.
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            A plataforma <strong>Agile</strong>, com a inteligência <strong>LegNet</strong>, foi criada para o produtor rural. É direta, prática e sem "juridiquês". Nós traduzimos a complexidade da legislação em um painel de controle que garante a sua tranquilidade.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Controle Total, Sem Complicação</h3>
              <p className="font-light text-sm md:text-base">
                Tenha todas as suas licenças e obrigações em um só lugar, com alertas automáticos para não perder nenhum prazo. Chega de papelada e preocupação.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Venda sua Safra com Segurança</h3>
              <p className="font-light text-sm md:text-base">
                Tenha em mãos, de forma organizada, todas as evidências que os compradores mais exigentes pedem. Prove sua conformidade e fortaleça seu poder de negociação.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Acesso Facilitado ao Crédito</h3>
              <p className="font-light text-sm md:text-base">
                Demonstre uma gestão ambiental profissional e organizada. Use os relatórios do Agile para ganhar credibilidade com os bancos e agilizar a liberação de recursos.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Foco no que Realmente Importa</h3>
              <p className="font-light text-sm md:text-base">
                Deixe a burocracia com a gente. Nossa solução garante que você esteja sempre em dia, liberando seu tempo para o que você faz de melhor: produzir.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
            >
              Quero produzir com mais segurança
            </button>
          </div>
        </section>

        {/* SEÇÃO 4: O QUE VOCÊ REALMENTE GANHA */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Nós falamos a língua do campo e da lei.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Dois pilares que trabalham juntos para garantir que você produza, venda e cresça sem medo da burocracia.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {/* 1 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <FileSearch size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">O tradutor da legislação para o agro.</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                LegNet — especialistas que entendem do seu negócio e da lei.
              </p>
              <ul className="space-y-2">
                {[
                  'Traduz CAR, licenças, outorgas e mais em obrigações claras',
                  'Específico para agricultura e pecuária',
                  'Sem "juridiquês" — direto ao ponto',
                  'Sempre atualizado com a legislação vigente',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">O seu gerente de conformidade digital.</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                Agile — a ferramenta mais simples e poderosa para gerenciar sua conformidade.
              </p>
              <ul className="space-y-2">
                {[
                  'Organiza todos os seus documentos e licenças',
                  'Lembra seus prazos com alertas automáticos',
                  'Prepara seus relatórios de forma visual e intuitiva',
                  'É como ter um especialista 24/7 na sua fazenda',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <MousePointerClick size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Venda sua safra sem perder negociação</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Compradores e tradings cada vez mais exigem conformidade. Esteja sempre preparado.
              </p>
              <p className="font-light text-sm md:text-base">
                Com as evidências organizadas no Agile, você prova conformidade ambiental na hora que o comprador pedir — e negocia de igual para igual.
              </p>
            </div>

            {/* 4 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Sparkles size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Crédito aprovado com mais facilidade</h3>
              <ul className="space-y-2">
                {[
                  'Relatórios de gestão ambiental prontos para os bancos',
                  'Demonstre profissionalismo e organização',
                  'Elimine a bandeira vermelha da falta de conformidade',
                  'Agilize a liberação do crédito que você precisa para crescer',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <Cpu size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">A máquina trabalha para o usuário (não o contrário)</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                Enquanto outros sistemas pedem trabalho, o Agile entrega decisão.
              </p>
              <p className="font-light text-sm md:text-base mb-2">O usuário não alimenta o sistema. O sistema:</p>
              <ul className="space-y-2">
                {['Alerta', 'Sugere', 'Organiza', 'Valida', 'Direciona'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* COMPARATIVO */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-white rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Comparativo
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Não oferecemos um serviço de validação porque conformidade não pode depender de agenda humana. O Agile + LegNet é um gerente de conformidade digital que trabalha todos os dias, em todas as obrigações, sem custo variável.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-500">Concorrente</h3>
              <ul className="space-y-3">
                {[
                  'Validação manual',
                  'Serviço pontual',
                  'Dependente de pessoas',
                  'Olha o passado',
                  'Risco de subjetividade',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base text-gray-500">
                    <span className="shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl border-2 border-[#c5ff00]">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Agile + LegNet</h3>
              <ul className="space-y-3">
                {[
                  'Avaliação e validação automatizada',
                  'Conformidade contínua',
                  'Independente de escala',
                  'Atua preventivamente',
                  'Padrão técnico e replicável',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* O QUE MUDA NA PRÁTICA */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            O que muda na prática para a empresa
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md bg-white p-5 md:p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-500">Concorrente</h3>
              <ul className="space-y-3">
                {[
                  'O usuário preenche evidências',
                  'Alguém valida depois',
                  'O risco aparece tarde',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base text-gray-500">
                    <span className="shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-md bg-white p-5 md:p-6 rounded-xl border-2 border-[#c5ff00]">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Agile + LegNet</h3>
              <ul className="space-y-3">
                {[
                  'O sistema orienta o que fazer',
                  'Sugere evidências, documentos e planos de ação',
                  'A não conformidade é evitada, não apenas identificada',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS EXCLUSIVOS */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-[#333] rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
            Diferencial exclusivo do Agile + LegNet
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              'Legislação ambiental do agro traduzida em obrigações claras e diretas',
              'Alertas automáticos para nenhuma licença ou prazo ser perdido',
              'Relatórios prontos para compradores, tradings e bancos',
              'O sistema trabalha para o produtor, não o contrário',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle2 size={20} className="text-[#c5ff00] shrink-0 mt-0.5" />
                <p className="text-white font-light text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* ISO */}
        <section className="mx-4 md:mx-8 my-10 md:my-16 p-6 md:p-8 bg-[#c2c0c0] rounded-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mx-auto max-w-3xl leading-relaxed">
            Atuamos com padrões reconhecidos mundialmente, garantindo qualidade, segurança e eficácia em todos os processos.
          </p>
          <img
            src={isos}
            alt="Certificações ISO e ONU"
            className="w-full max-w-2xl h-auto object-contain mx-auto"
          />
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* FAQ */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Qual a diferença entre o Agile + LegNet e um serviço humano de validação?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Serviços humanos validam o que já aconteceu — olham o passado. O Agile + LegNet atua preventivamente, alertando sobre prazos, sugerindo evidências e orientando o produtor antes, durante e depois do cumprimento de cada obrigação. Tudo isso sem depender de agenda humana ou custo variável.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como a plataforma me protege de um embargo?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  O Agile centraliza todas as suas licenças, outorgas e condicionantes com alertas automáticos de vencimento. Você é avisado antes do prazo, com tempo suficiente para regularizar qualquer pendência — evitando que uma licença vencida seja o gatilho para um embargo que pode paralisar sua operação no momento mais crítico.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como o sistema me ajuda a vender minha safra e acessar crédito?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  O Agile organiza todas as suas evidências de conformidade ambiental de forma estruturada e pronta para apresentação. Quando um comprador ou trading exigir comprovação, você entrega na hora — fortalecendo seu poder de negociação. Para os bancos, os relatórios do Agile demonstram uma gestão profissional e organizada, agilizando a aprovação de crédito.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Preciso ser especialista em legislação ambiental para usar o sistema?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Não. A LegNet traduz toda a complexidade da legislação ambiental — CAR, licenças, outorgas e mais — em obrigações claras, diretas e específicas para a sua atividade, seja agricultura ou pecuária. O produtor não precisa saber a lei: o sistema já sabe, e entrega o que fazer de forma simples e visual.
                </div>
              </details>
            </div>

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-14 md:py-20 bg-[#111] rounded-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
            Sua fazenda está 100% protegida ou você está contando com a sorte?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-4">
            Não deixe que a burocracia coloque em risco o trabalho de uma vida inteira. Tenha o controle e a segurança que você precisa para continuar crescendo, com a única solução que entende do campo e da lei.
          </p>
          <blockquote className="text-white/60 italic text-sm md:text-base max-w-xl mx-auto mb-10">
            "Depois do Agile, eu durmo tranquilo. Sei que nenhuma licença vai vencer sem que eu seja avisado. O controle que eu ganhei sobre a documentação da fazenda é total."
            <span className="block mt-2 not-italic">— Produtor Rural</span>
          </blockquote>
          <button
            onClick={scrollToForm}
            className="px-10 py-5 text-lg md:text-xl transition-all duration-300 font-bold cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_20px_#c5ff00] hover:scale-105"
          >
            PEDIR DEMONSTRAÇÃO E BLINDAR MINHA PRODUÇÃO
          </button>
          <p className="text-white/50 text-sm mt-6">É rápido, é fácil e vai mudar a forma como você gerencia sua fazenda.</p>
        </section>

        {/* Vídeo flutuante */}
        {showFloatingVideo && (
          <div className="fixed bottom-24 right-4 z-50">
            <div className="relative">
              <video
                className="object-cover rounded-lg shadow-lg w-36 h-56 sm:w-44 sm:h-64 md:w-[180px] md:h-[280px]"
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={criativo_vertical} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <button
                className="absolute -top-2 -right-2 bg-gray-800 cursor-pointer duration-300 transition-all hover:scale-105 text-white rounded-full w-6 h-6 p-1 flex items-center justify-center"
                onClick={() => setShowFloatingVideo(false)}
              >
                <LucideX size={14} />
              </button>
            </div>
          </div>
        )}

        <footer className="px-4 pb-8">
          <p className="text-gray-600 text-center font-light mb-4 text-sm md:text-base">
            © 2025 Agile & LegNet. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;