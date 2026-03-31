'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Navegação */}
            <nav className="fixed w-full z-50 bg-black/95 border-b border-white/5 py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="font-heading text-3xl font-bold text-light tracking-wider uppercase hover:text-gold hover:shadow-[0_0_15px_rgba(233,195,73,0.5)] transition-all duration-300">
                        DOM<span className="text-red">VITOM</span>
                    </a>
                    <a href="https://wa.me/5521974705558?text=Fala%20Dom%20Vitom!%20Quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noreferrer" className="hidden md:inline-block border-2 border-red text-light font-heading uppercase tracking-widest px-6 py-2 hover:bg-red hover:shadow-[0_0_20px_rgba(190,30,45,0.5)] transition-all duration-300">
                        AGENDAR AGORA 📱
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://picsum.photos/seed/barber/1920/1080" 
                        alt="Barbeiro cortando cabelo" 
                        fill
                        className="object-cover grayscale opacity-30"
                        referrerPolicy="no-referrer"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <p className="text-gold font-heading text-xl md:text-2xl tracking-[0.3em] mb-6 reveal-left">PACIÊNCIA • RIO DE JANEIRO</p>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-light uppercase leading-[0.85] mb-8 reveal-left delay-100">
                            O SEU CORTE <br />
                            <span className="text-red">DE RESPEITO</span> <br />
                            COMEÇA AQUI.
                        </h1>
                        <p className="text-xl md:text-2xl text-light/80 font-body mb-12 max-w-2xl reveal-left delay-200 border-l-4 border-gold pl-6">
                            Esqueça as barbearias monótonas. Na Dom Vitom, você garante o melhor estilo da região com resenha de primeira e clima de lazer absoluto.
                        </p>
                        <a href="https://wa.me/5521974705558?text=Fala%20Dom%20Vitom!%20Quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noreferrer" className="inline-block bg-red text-light font-heading text-2xl md:text-3xl uppercase tracking-wider px-12 py-6 shadow-[0_0_40px_rgba(190,30,45,0.4)] hover:bg-gold hover:text-black hover:shadow-[0_0_40px_rgba(233,195,73,0.5)] transition-all duration-300 reveal-left delay-300 mb-16 md:mb-24">
                            AGENDAR MEU HORÁRIO 📱
                        </a>
                    </div>
                </div>
            </header>

            {/* Faixa de Prova Social */}
            <div className="bg-gold py-5 overflow-hidden border-y border-gold/50">
                <div className="container mx-auto px-6">
                    <p className="text-black font-heading text-2xl md:text-3xl uppercase text-center tracking-widest font-bold">
                        ⭐ A MELHOR BARBEARIA DA REGIÃO SEGUNDO NOSSOS CLIENTES ⭐
                    </p>
                </div>
            </div>

            {/* Estrutura / Diferenciais */}
            <section className="py-32 bg-dark relative">
                <div className="container mx-auto px-6">
                    <div className="mb-20 reveal">
                        <h2 className="text-5xl md:text-7xl font-heading text-light uppercase leading-none">
                            MUITO ALÉM <br />
                            <span className="text-red">DA NAVALHA</span>
                        </h2>
                        <div className="w-32 h-1 bg-gold mt-8"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                        <div className="md:col-span-7 bg-black p-10 md:p-16 border-l-8 border-red reveal hover:bg-[#111] hover:shadow-[0_0_40px_rgba(190,30,45,0.2)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="text-6xl md:text-7xl mb-8">☕</div>
                            <h3 className="text-3xl md:text-4xl font-heading text-light uppercase mb-4">CAFÉ & RESENHA</h3>
                            <p className="text-light/70 font-body text-xl leading-relaxed">Sua resenha acompanhada daquele café fresco. O momento de relaxar começa na cadeira do barbeiro. Aqui você é sempre bem-vindo.</p>
                        </div>
                        
                        <div className="md:col-span-5 bg-black p-10 md:p-16 border-l-8 border-gold reveal delay-100 hover:bg-[#111] hover:shadow-[0_0_40px_rgba(233,195,73,0.2)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="text-6xl md:text-7xl mb-8">❄️</div>
                            <h3 className="text-3xl md:text-4xl font-heading text-light uppercase mb-4">CLIMATIZADO</h3>
                            <p className="text-light/70 font-body text-xl leading-relaxed">Ar condicionado no talo. Fuja do calor do Rio de Janeiro com conforto total enquanto renova o visual.</p>
                        </div>

                        <div className="md:col-span-12 bg-black p-10 md:p-16 border-l-8 border-red reveal hover:bg-[#111] hover:shadow-[0_0_40px_rgba(190,30,45,0.2)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="text-6xl md:text-7xl mb-8">📺</div>
                            <h3 className="text-3xl md:text-4xl font-heading text-light uppercase mb-4">TV & ENTRETENIMENTO</h3>
                            <p className="text-light/70 font-body text-xl leading-relaxed">Futebol rolando solto, lutas e programação de primeira. Aqui você não vê o tempo passar, você aproveita cada minuto.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section className="py-32 bg-black border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal">
                        <h2 className="text-5xl md:text-7xl font-heading text-light uppercase leading-none">
                            NOSSO <br />
                            <span className="text-gold">ARSENAL</span>
                        </h2>
                        <p className="text-red font-heading tracking-[0.2em] text-xl mt-6 md:mt-0">TABELA DE SERVIÇOS</p>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 py-8 px-4 -mx-4 reveal group hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(190,30,45,0.15)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-3xl font-heading text-light uppercase group-hover:text-red transition-colors duration-300">CORTE DOM VITOM</h3>
                                <p className="text-light/50 font-body text-lg mt-2 max-w-xl">Máquina, tesoura, fade impecável e finalização de alto nível com pomada premium.</p>
                            </div>
                            <div className="text-4xl font-heading text-gold">✂️</div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 py-8 px-4 -mx-4 reveal group delay-100 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(233,195,73,0.15)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-3xl font-heading text-light uppercase group-hover:text-red transition-colors duration-300">BARBA DE RESPEITO</h3>
                                <p className="text-light/50 font-body text-lg mt-2 max-w-xl">Alinhamento perfeito, toalha quente, massagem facial e óleos essenciais.</p>
                            </div>
                            <div className="text-4xl font-heading text-gold">🧔🏻‍♂️</div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 py-8 px-4 -mx-4 reveal group hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(190,30,45,0.15)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-3xl font-heading text-light uppercase group-hover:text-red transition-colors duration-300">COMBO PATRÃO (CORTE + BARBA)</h3>
                                <p className="text-light/50 font-body text-lg mt-2 max-w-xl">O pacote completo para sair daqui pronto para qualquer batalha do dia a dia.</p>
                            </div>
                            <div className="text-4xl font-heading text-gold">🔥</div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 py-8 px-4 -mx-4 reveal group delay-100 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(233,195,73,0.15)] transition-all duration-500 relative z-10 hover:z-20">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-3xl font-heading text-light uppercase group-hover:text-red transition-colors duration-300">ACABAMENTO / PEZINHO</h3>
                                <p className="text-light/50 font-body text-lg mt-2 max-w-xl">Aquele talento rápido na régua para manter o visual alinhado durante a semana.</p>
                            </div>
                            <div className="text-4xl font-heading text-gold">📐</div>
                        </div>
                    </div>

                    <div className="mt-16 text-center reveal">
                        <a href="https://wa.me/5521974705558?text=Fala%20Dom%20Vitom!%20Quero%20saber%20os%20valores%20e%20agendar." target="_blank" rel="noreferrer" className="inline-block border-2 border-gold text-gold font-heading text-xl uppercase tracking-widest px-10 py-5 hover:bg-gold hover:text-black hover:shadow-[0_0_40px_rgba(233,195,73,0.4)] transition-all duration-300">
                            CONSULTAR VALORES NO WHATSAPP 📱
                        </a>
                    </div>
                </div>
            </section>

            {/* Horários e Informações */}
            <section className="py-32 bg-dark relative overflow-hidden">
                <div className="absolute -right-40 top-0 text-[30rem] opacity-5 font-heading leading-none select-none">DOM</div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="reveal-left">
                            <h2 className="text-4xl md:text-5xl font-heading text-light uppercase mb-12 border-l-8 border-red pl-6">HORÁRIOS DE BATALHA</h2>
                            <ul className="space-y-6 font-body text-xl text-light/80">
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-bold tracking-wider">SEGUNDA A SEXTA</span> 
                                    <span className="text-gold font-heading text-2xl">09:00 - 20:00</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-bold tracking-wider">SÁBADO</span> 
                                    <span className="text-gold font-heading text-2xl">08:00 - 19:00</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-bold tracking-wider">DOMINGO</span> 
                                    <span className="text-gold font-heading text-2xl">09:00 - 14:00</span>
                                </li>
                            </ul>
                            <div className="mt-10 inline-block bg-red/10 border border-red px-6 py-3 hover:bg-red/20 hover:shadow-[0_0_20px_rgba(190,30,45,0.3)] transition-all duration-300 cursor-default">
                                <p className="text-red font-heading tracking-[0.2em] text-xl uppercase">ABRIMOS TODOS OS DIAS!</p>
                            </div>
                        </div>
                        
                        <div className="reveal-right delay-100">
                            <h2 className="text-4xl md:text-5xl font-heading text-light uppercase mb-8 border-l-8 border-gold pl-6">PAGAMENTO SEM ESTRESSE</h2>
                            <p className="font-body text-xl text-light/70 mb-8 leading-relaxed">
                                Aceitamos todas as principais bandeiras de cartão e PIX. Facilidade total para você focar apenas no seu estilo.
                            </p>
                            <div className="flex gap-8 text-6xl mb-16">
                                <span title="Cartão de Crédito/Débito">💳</span> 
                                <span title="PIX">💠</span> 
                                <span title="Transferência">📱</span>
                            </div>
                            
                            <div>
                                <h3 className="text-3xl font-heading text-light uppercase mb-4">ONDE ESTAMOS</h3>
                                <p className="font-body text-xl text-gold font-bold mb-2">Paciência, Rio de Janeiro - RJ</p>
                                <p className="font-body text-light/60 text-lg">A melhor estrutura da Zona Oeste esperando por você.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black pt-20 pb-10 border-t border-white/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-heading text-5xl md:text-7xl text-light uppercase tracking-widest mb-8">
                        DOM<span className="text-red">VITOM</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
                    
                    <a href="https://wa.me/5521974705558?text=Fala%20Dom%20Vitom!%20Quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noreferrer" className="inline-block bg-red text-light font-heading text-2xl uppercase tracking-widest px-12 py-6 mb-20 shadow-[0_0_40px_rgba(190,30,45,0.4)] hover:bg-gold hover:text-black hover:shadow-[0_0_40px_rgba(233,195,73,0.5)] hover:scale-105 transition-all duration-300">
                        GARANTIR MEU HORÁRIO AGORA 📱
                    </a>

                    <p className="font-body text-light/40 text-sm tracking-wider uppercase">
                        © 2026 Barbearia Dom Vitom. Todos os direitos reservados. <br />
                        Paciência - Rio de Janeiro, RJ.
                    </p>
                </div>
            </footer>

            {/* Botão Flutuante WhatsApp */}
            <a href="https://wa.me/5521974705558?text=Fala%20Dom%20Vitom!%20Quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-5 shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all duration-300 z-[100] flex items-center justify-center text-4xl group">
                📱
                <span className="absolute right-full mr-4 bg-black text-white text-sm font-heading tracking-widest uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10">
                    Agende Aqui
                </span>
            </a>
        </main>
    );
}
