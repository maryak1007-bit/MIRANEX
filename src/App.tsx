import { useState, useEffect, useRef } from 'react';

// ============ SCROLL REVEAL HOOK ============
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return ref;
}

// ============ LOGO COMPONENT ============
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="12" height="12" rx="2" fill="#263541" />
        <rect x="22" y="2" width="12" height="12" rx="2" fill="#35C9B2" />
        <rect x="2" y="22" width="12" height="12" rx="2" fill="#35C9B2" />
        <rect x="22" y="22" width="12" height="12" rx="2" fill="#263541" />
        <circle cx="18" cy="18" r="4" fill="#E56B52" />
        <line x1="8" y1="18" x2="14" y2="18" stroke="#35C9B2" strokeWidth="1.5" />
        <line x1="22" y1="18" x2="28" y2="18" stroke="#35C9B2" strokeWidth="1.5" />
        <line x1="18" y1="8" x2="18" y2="14" stroke="#35C9B2" strokeWidth="1.5" />
        <line x1="18" y1="22" x2="18" y2="28" stroke="#35C9B2" strokeWidth="1.5" />
      </svg>
      <span className="font-heading font-extrabold text-xl tracking-tight text-deep-graphite">MIRANEX</span>
    </div>
  );
}

// ============ HEADER ============
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-soft-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <a href="#form" className="font-mono text-sm font-medium px-5 py-2.5 bg-turquoise text-white rounded-lg hover:opacity-90 transition-opacity">
          УЗНАТЬ СТОИМОСТЬ
        </a>
      </div>
    </header>
  );
}

// ============ BLOCK 1: HERO ============
function HeroBlock() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img 
          src="https://image.qwenlm.ai/generated-images/b35a1f6f-defc-4e29-887a-2e2413451a28/_result.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[01] ЭКСПЕРТИЗА ДЛЯ ВАШЕГО ДОМА</span>
          
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-deep-graphite mt-4 leading-tight">
            Кухни, шкаф под задачу. Без наценки за вывеску салона и ограничений одной фабрики.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-deep-graphite/80 leading-relaxed max-w-3xl">
            <strong>Качество крупного бренда. Без переплаты за вывеску.</strong><br/>
            Ставьте задачу — или мы поможем ее сформулировать. Подберем подходящие фабрики, наглядно покажем и объясним разницу в деталях. Весь процесс — от замера до гарантии — в одном окне. За результат отвечаем мы.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <a href="#form" className="font-mono text-sm font-medium px-8 py-4 bg-turquoise text-white rounded-lg hover:opacity-90 transition-opacity">
              УЗНАТЬ СТОИМОСТЬ
            </a>
            <span className="font-mono text-sm text-deep-graphite/60 self-center">
              Москва и МО. Замер платный: 1 000 ₽ (возврат при заказе).
            </span>
          </div>
        </div>
        
        {/* Bento cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-warm-stone rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <rect x="4" y="20" width="40" height="4" rx="1" fill="#263541"/>
                <rect x="8" y="8" width="4" height="32" rx="1" fill="#263541"/>
                <rect x="36" y="8" width="4" height="32" rx="1" fill="#263541"/>
                <circle cx="24" cy="22" r="3" fill="#35C9B2"/>
                <line x1="12" y1="22" x2="21" y2="22" stroke="#35C9B2" strokeWidth="1.5" strokeDasharray="2 2"/>
                <line x1="27" y1="22" x2="36" y2="22" stroke="#35C9B2" strokeWidth="1.5" strokeDasharray="2 2"/>
              </svg>
            </div>
            <span className="font-mono text-xs text-deep-graphite/60 tracking-wider">КАТЕГОРИЯ A</span>
            <h3 className="font-heading font-bold text-xl mt-1 text-deep-graphite">Скорость</h3>
            <p className="font-mono text-sm text-deep-graphite/70 mt-2">Стандарт. 14–21 день.</p>
          </div>
          
          <div className="bg-warm-stone rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <path d="M8 36 L24 8 L40 36" stroke="#263541" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="24" cy="28" r="4" fill="#35C9B2"/>
                <line x1="24" y1="32" x2="24" y2="40" stroke="#263541" strokeWidth="1.5"/>
                <rect x="20" y="40" width="8" height="3" rx="1" fill="#263541"/>
              </svg>
            </div>
            <span className="font-mono text-xs text-deep-graphite/60 tracking-wider">КАТЕГОРИЯ B1</span>
            <h3 className="font-heading font-bold text-xl mt-1 text-deep-graphite">Гибкость</h3>
            <p className="font-mono text-sm text-deep-graphite/70 mt-2">Нестандарт. 45–55 дней.</p>
          </div>
          
          <div className="bg-warm-stone rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#263541" strokeWidth="2" fill="none"/>
                <rect x="14" y="18" width="8" height="12" rx="1" fill="#35C9B2" opacity="0.6"/>
                <rect x="26" y="18" width="8" height="12" rx="1" fill="#35C9B2" opacity="0.6"/>
                <line x1="22" y1="18" x2="22" y2="30" stroke="#263541" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
            </div>
            <span className="font-mono text-xs text-deep-graphite/60 tracking-wider">КАТЕГОРИЯ B2</span>
            <h3 className="font-heading font-bold text-xl mt-1 text-deep-graphite">Точность</h3>
            <p className="font-mono text-sm text-deep-graphite/70 mt-2">Модуль. 14–35 дней.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 2: PROCESS ============
function ProcessBlock() {
  const ref = useScrollReveal();
  const steps = [
    { num: '01', title: 'Замер', desc: 'Фиксируем размеры, коммуникации, особенности.' },
    { num: '02', title: 'Планирование', desc: 'Эксперт продумывает эргономику, узловые решения, эксплуатационные факторы, баланс элементов.' },
    { num: '03', title: 'Подбор', desc: 'Показываем варианты одного и того же визуального концепта от разных фабрик с разницей в цене, материалах и методах изготовления деталей. Сравнение качественных и количественных характеристик.' },
    { num: '04', title: 'Производство', desc: 'Принимаем комплект деталей на склад. Проверяем каждую деталь и комплектность до сборки.' },
    { num: '05', title: 'Монтаж', desc: 'Сборка, сдача по чек-листу и гарантия.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img 
          src="https://image.qwenlm.ai/generated-images/8330e177-f77d-4e04-99d1-a932e3ce0d18/_result.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[02] ПРОТОКОЛ РАБОТЫ</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          От задачи до готового продукта.
        </h2>
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-deep-graphite/20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-soft-white border-2 border-deep-graphite flex items-center justify-center mx-auto md:mx-0 mb-4 relative z-10">
                  <span className="font-mono text-lg font-bold text-deep-graphite">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-deep-graphite">{step.title}</h3>
                <p className="text-sm text-deep-graphite/70 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 3: FACTORY CATEGORIES ============
function CategoriesBlock() {
  const ref = useScrollReveal();
  const categories = [
    {
      letter: 'A',
      title: 'Массовые гиганты',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
          <rect x="8" y="20" width="48" height="28" rx="3" stroke="#263541" strokeWidth="2" fill="none"/>
          <line x1="8" y1="34" x2="56" y2="34" stroke="#263541" strokeWidth="1.5"/>
          <circle cx="20" cy="27" r="3" fill="#35C9B2"/>
          <circle cx="32" cy="27" r="3" fill="#35C9B2"/>
          <circle cx="44" cy="27" r="3" fill="#35C9B2"/>
          <rect x="14" y="38" width="8" height="6" rx="1" fill="#263541" opacity="0.3"/>
          <rect x="28" y="38" width="8" height="6" rx="1" fill="#263541" opacity="0.3"/>
          <rect x="42" y="38" width="8" height="6" rx="1" fill="#263541" opacity="0.3"/>
        </svg>
      ),
      desc: 'Крупные заводы, максимальная автоматизация для снижения производственных расходов. Быстро, бюджетно, типовые размеры, не встраиваемая мебель.',
      forWhom: 'Если нужен стандарт и скорость, массово доступны на маркетплейсах. Самые бюджетные корпусные, фасадные и отделочные элементы. Механизмы, фурнитура и функциональность максимально упрощены.',
      features: 'Первая цена, максимальная оптимизация во всем.'
    },
    {
      letter: 'B1',
      title: 'Индивидуальные',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
          <path d="M12 48 L32 12 L52 48" stroke="#263541" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="36" r="6" stroke="#35C9B2" strokeWidth="2" fill="none"/>
          <line x1="32" y1="30" x2="32" y2="42" stroke="#35C9B2" strokeWidth="1.5"/>
          <line x1="26" y1="36" x2="38" y2="36" stroke="#35C9B2" strokeWidth="1.5"/>
          <rect x="22" y="48" width="20" height="4" rx="1" fill="#263541"/>
        </svg>
      ),
      desc: 'Средние фабрики. Не стандартные размеры, гнутые и радиусные формы, качественные материалы, разнообразная отделка, функциональность и узлы. Неизбежная наценка за вывеску, бренд, салон и аренду.',
      forWhom: 'Если нужна нестандартная форма в эмали, ЛДСП, Шпон, качественная кромка, сложные узлы, функциональность, оснащение и механизмы.',
      features: 'Нестандартные решения индустриальными методами.'
    },
    {
      letter: 'B2',
      title: 'Серийные',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
          <rect x="8" y="16" width="16" height="32" rx="2" stroke="#263541" strokeWidth="2" fill="none"/>
          <rect x="24" y="16" width="16" height="32" rx="2" stroke="#263541" strokeWidth="2" fill="none"/>
          <rect x="40" y="16" width="16" height="32" rx="2" stroke="#263541" strokeWidth="2" fill="none"/>
          <rect x="12" y="22" width="8" height="8" rx="1" fill="#35C9B2" opacity="0.5"/>
          <rect x="28" y="22" width="8" height="8" rx="1" fill="#35C9B2" opacity="0.5"/>
          <rect x="44" y="22" width="8" height="8" rx="1" fill="#35C9B2" opacity="0.5"/>
        </svg>
      ),
      desc: 'Средние фабрики. Модульная мебель. Хорошая эмаль, ЛДСП, качественное наполнение, но привязаны к каталогу и производственным возможностям. Вывеска, брендированные салоны — неизбежная наценка.',
      forWhom: 'Если нужна качественная мебель, но не по индивидуальным размерам. Щели и стыки закрываются доборами. Понятные сроки, потому что каталог и фиксированные размеры.',
      features: 'Стандартизированные решения индустриальными методами.'
    },
    {
      letter: 'C1',
      title: 'Ремесленники',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
          <path d="M16 48 C16 28 32 16 32 16 C32 16 48 28 48 48" stroke="#263541" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="36" r="4" fill="#E56B52" opacity="0.7"/>
          <line x1="24" y1="44" x2="40" y2="44" stroke="#263541" strokeWidth="1.5"/>
          <line x1="20" y1="48" x2="44" y2="48" stroke="#263541" strokeWidth="2"/>
        </svg>
      ),
      desc: 'Мастерские. Массив, редкие породы дерева, металл, натуральный камень, сложные узлы и механизмы. Основа производства — высоко квалифицированный ручной труд, долго и по самой высокой цене.',
      forWhom: 'Если важны уникальность, узловая и функциональная сложность, ценные породы древесины, уникальные формы и текстуры. Лимитированный характер изделий.',
      features: 'Кастомные решения, где квалифицированный ручной труд и цена определяющие факторы.'
    },
    {
      letter: 'C2',
      title: 'Кустари',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
          <rect x="12" y="16" width="40" height="32" rx="2" stroke="#263541" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
          <text x="32" y="38" textAnchor="middle" fill="#263541" fontSize="14" fontFamily="JetBrains Mono">?</text>
          <line x1="16" y1="52" x2="48" y2="52" stroke="#E56B52" strokeWidth="2"/>
        </svg>
      ),
      desc: 'Микро-мастерские, столярные организации. В подавляющей массе позиционируют себя средними фабриками B1, но ими не являются. Сильно экономят на качестве.',
      forWhom: 'Вводят потребителя в заблуждение, обещая мерседес по цене жигули.',
      features: 'Мы не работаем с организациями этой категории.',
      isGray: true
    }
  ];

  return (
    <section className="py-24 bg-warm-stone/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <img 
          src="https://image.qwenlm.ai/generated-images/1ac4f750-abc7-41e7-b45a-d20fe38d45af/_result.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[03] АРХИТЕКТУРА ПРОИЗВОДСТВА</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Нет фабрики, которая умеет всё. Все фабрики изготавливают — детали.
        </h2>
        <p className="mt-4 text-lg text-deep-graphite/70 max-w-3xl">
          На рынке есть разные производства. Мы знаем их особенности и подбираем ту, которая подходит именно вашей задаче.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.letter} className={`rounded-2xl p-6 border transition-shadow hover:shadow-lg ${cat.isGray ? 'bg-gray-100 border-gray-300 opacity-70' : 'bg-soft-white border-warm-stone'}`}>
              <div className="flex items-center gap-3 mb-4">
                {cat.icon}
                <div>
                  <span className="font-mono text-xs text-deep-graphite/60 tracking-wider">КАТЕГОРИЯ {cat.letter}</span>
                  <h3 className="font-heading font-bold text-lg text-deep-graphite">{cat.title}</h3>
                </div>
              </div>
              <p className="text-sm text-deep-graphite/75 leading-relaxed">{cat.desc}</p>
              <div className="mt-4 pt-4 border-t border-deep-graphite/10">
                <p className="text-sm text-deep-graphite/60"><strong className="text-deep-graphite">Для кого:</strong> {cat.forWhom}</p>
              </div>
              <p className={`mt-3 font-mono text-xs ${cat.isGray ? 'text-coral' : 'text-turquoise'}`}>{cat.features}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-soft-white rounded-2xl p-8 border border-warm-stone">
          <p className="text-deep-graphite leading-relaxed text-lg">
            Если для проекта нужны компетенции нескольких производств — мы связываем их в единый процесс. Вы получаете <strong>одно окно, один договор и одну гарантию</strong>. Такой метод комплектования обеспечивает наиболее рациональное соотношение: специфики фабрик, условия задачи и общая стоимость комплекта.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 4: OUR STANDARD ============
function StandardBlock() {
  const ref = useScrollReveal();
  const standards = [
    { title: 'Стандарт замера', desc: 'Проверяем геометрию, коммуникации, а не просто «ширину».', icon: '📐' },
    { title: 'Стандарт материалов', desc: 'Смотрим на плотность и кромку, а не только на бренд плиты.', icon: '🔬' },
    { title: 'Стандарт сборки', desc: 'Сборка по технологии. Приемка каждой детали на складе.', icon: '🔧' },
    { title: 'Стандарт экспертизы', desc: 'Оцениваем функциональность (как открывается ящик).', icon: '✅' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img 
          src="https://image.qwenlm.ai/generated-images/ddc530e2-dd48-4931-8657-e98318e54ca7/_result.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[04] СТАНДАРТ MIRANEX</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Качество крупных брендов. Без наценки за бренд.
        </h2>
        <p className="mt-4 text-lg text-deep-graphite/70 max-w-3xl">
          Крупные сети дают сервис, но закладывают в цену шоурумы и рекламу. Прямые фабрики экономят на качестве и контроле. Мы забираем лучший стандарт и делаем его рациональным. Мы объясняем разницу в деталях, представляя прежде всего интересы клиента.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((s, i) => (
            <div key={i} className="bg-warm-stone/50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-heading font-bold text-lg text-deep-graphite">{s.title}</h3>
              <p className="text-sm text-deep-graphite/70 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-deep-graphite rounded-2xl p-8">
          <p className="text-soft-white leading-relaxed text-lg">
            Крупные игроки закладывают в стоимость имя бренда и аренду. Частные мастера экономят на контроле и технологиях качества. <strong className="text-turquoise">Мы верим в рациональное качество. Вы платите только за качество и точность.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 5: MANIFESTO ============
function ManifestoBlock() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 bg-warm-stone/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img 
          src="https://image.qwenlm.ai/generated-images/6450c022-6768-4ef5-9b7e-bd794a91f817/_result.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[05] МАНИФЕСТ</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Мы — новый стандарт обустройства дома.
        </h2>
        <p className="mt-4 text-lg text-deep-graphite/70 max-w-3xl">
          MIRANEX — это не мебельный магазин и не производство. Мы — экспертный слой, который связывает вашу задачу с лучшими изготовителями деталей.
        </p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-soft-white rounded-2xl p-8 border border-warm-stone">
            <h3 className="font-heading font-bold text-xl text-deep-graphite mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-coral"></span>
              Салон — это готовый сервис, но с наценкой.
            </h3>
            <p className="text-deep-graphite/75 leading-relaxed">
              Вы платите не только за мебель, но и за аренду шоурума, рекламу и имя бренда. Вы ходите по салонам, видите похожие образцы, читаете отзывы и пытаетесь понять, почему цены так отличаются. Вам непонятны термины, а модные названия деталей ни о чем не говорят. Вы переживаете, ведь платите за то, что еще предстоит изготовить, привезти и установить. Вы тратите время на поиски, выбор и все равно остаетесь с внутренними переживаниями, что результат может быть не таким, каким вы его ждете.
            </p>
          </div>
          
          <div className="bg-soft-white rounded-2xl p-8 border border-warm-stone">
            <h3 className="font-heading font-bold text-xl text-deep-graphite mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-coral"></span>
              Фабрика напрямую — это «кот в мешке».
            </h3>
            <p className="text-deep-graphite/75 leading-relaxed">
              Цена ниже, но вы остаетесь один на один с непрозрачными сроками и размытыми условиями. Вы не знаете, как поведет себя плита через полгода, насколько точны присадки, какая на самом деле используется фурнитура и кто будет отвечать, если мебель начнет расслаиваться. Часто за привлекательной ценой скрывается экономия на технологиях, которую вы заметите только при эксплуатации, а гарантия окажется просто красивой бумажкой.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-soft-white rounded-2xl p-8 border-l-4 border-coral">
          <p className="text-deep-graphite/80 leading-relaxed text-lg italic">
            Самое сложное: один и тот же дизайн может быть изготовлен в 30 разных вариантах. Внешне они будут казаться абсолютно одинаковыми, но по качеству материалов, методам обработки и сроку службы — это совершенно разные вещи.
          </p>
        </div>
        
        <div className="mt-12 bg-deep-graphite rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-soft-white mb-6">
            Мы создали MIRANEX, чтобы забрать эту неопределенность себе.
          </h3>
          <div className="space-y-4 text-soft-white/85 leading-relaxed">
            <p>
              Мы крайне тщательно и беспристрастно оцениваем каждую фабрику — от точности оборудования до истории рекламаций. Для нас интересы клиента всегда стоят на первом месте, поэтому мы не работаем с производствами, которые не можем гарантировать.
            </p>
            <p>
              Вместо десятков непонятных предложений мы даем вам выбор из 1–3 конкретных вариантов от проверенных фабрик. Мы детально объясняем разницу: где-то это будет цена, где-то срок, где-то методы обработки или уровень фурнитуры. Вы видите полную картину и принимаете решение осознанно, а не на ощупь.
            </p>
            <p>
              Мы не продаем «красивые картинки» и не навязываем бренды. Мы даем вам прозрачную стоимость, фиксируем условия и сроки, а затем шаг за шагом контролируем процесс: от первого замера до финальной сборки. Вы платите за реальное качество, а не за маркетинговые вывески.
            </p>
            <p className="text-turquoise font-semibold text-xl mt-6">
              Мы не производим мебель. Мы производим уверенность в том, что результат будет служить вам долгие годы.
            </p>
          </div>
        </div>
        
        <p className="mt-8 font-mono text-sm text-deep-graphite/60 text-center">
          Наша цель — сделать сложное простым и удобным. Мы начали с кухонь и шкафов.
        </p>
      </div>
    </section>
  );
}

// ============ BLOCK 6: CASES ============
function CasesBlock() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[06] ПЕРВЫЙ РЕЗУЛЬТАТ</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Уже работает.
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case 1 */}
          <div className="bg-warm-stone/30 rounded-2xl overflow-hidden border border-warm-stone">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://image.qwenlm.ai/generated-images/dccb2369-08df-465f-b526-df8b0f289e97/_result.png" 
                alt="Кухня ЖК Лайм Варшавская"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs bg-turquoise/10 text-turquoise px-2 py-1 rounded">B1</span>
                <span className="font-mono text-xs text-deep-graphite/60">ЖК «Лайм Варшавская»</span>
              </div>
              <p className="text-deep-graphite/80 leading-relaxed text-sm">
                Была необходима встраиваемая кухня по индивидуальным размерам. В эмали, фигурные фасады, столешница камень, качественные узлы, механизмы и функциональность. После проведения диагностики дизайн-проекта и подготовленных ниш под кухню, мы согласовали с клиентом узловые требования и функционал без потери визуального кода. Клиента не интересовал компромисс по качеству (С2), он рассмотрел 2 предложения из категорий изготовителей деталей B1, B2. Клиент выбрал технологический формат изготовления деталей фабрики из категории B1 и без наценки салона получил качественно оснащенную и собранную кухню через 46 дней за <strong>880 220 рублей</strong>. Механизмы BLUM, плита Egger и акриловая столешница с вклеенной раковиной из нержавеющей стали. Клиент не тратил свое время, получил решение и <strong className="text-coral">сэкономил 310 000 рублей</strong>.
              </p>
            </div>
          </div>
          
          {/* Case 2 */}
          <div className="bg-warm-stone/30 rounded-2xl overflow-hidden border border-warm-stone">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://image.qwenlm.ai/generated-images/ed6613b8-88ea-4ab0-b640-0b9544f7d0c2/_result.png" 
                alt="Кухня ЖК в Котельниках"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs bg-turquoise/10 text-turquoise px-2 py-1 rounded">B2</span>
                <span className="font-mono text-xs text-deep-graphite/60">ЖК в Котельниках</span>
              </div>
              <p className="text-deep-graphite/80 leading-relaxed text-sm">
                У клиента ранее был негативный опыт взаимодействия с категорией С2. Внес деньги, получил продукт, не соответствующий ожиданиям, не смог вернуть все средства и потерянное время. Мы решили задачу клиента, подобрали проверенных изготовителей деталей из категории B2 в сегменте стандарт, где ключевым являлась надежность и износостойкость поверхностей. Наш специалист осуществил сборку и установку деталей из плит ЛДСП Egger бежевый песок. Клиент получил крепко оснащенную и собранную кухню с гарантией, через 17 дней. Стоимость кухни составила <strong>218 000 рублей</strong>, включая сборку. Клиент <strong className="text-coral">сэкономил 89 000 руб.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 7: CONDITIONS ============
function ConditionsBlock() {
  const ref = useScrollReveal();
  const conditions = [
    { icon: '📏', title: 'Замер', desc: '1 000 ₽. Возврат при заказе (мы не берем денег за чужие замеры).' },
    { icon: '💳', title: 'Оплата', desc: '50% после эскиза, 50% после приёмки. Всё в договоре.' },
    { icon: '🛡️', title: 'Гарантия', desc: '2 года в рамках законодательства РФ.' },
  ];

  return (
    <section className="py-24 bg-warm-stone/30">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[07] УСЛОВИЯ</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Прозрачные правила.
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {conditions.map((c, i) => (
            <div key={i} className="bg-soft-white rounded-2xl p-8 text-center border border-warm-stone hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3 className="font-heading font-bold text-xl text-deep-graphite">{c.title}</h3>
              <p className="text-deep-graphite/70 mt-3 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 8: FORM ============
function FormBlock() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    budget: '',
    honeypot: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam bot
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="form" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-turquoise/10 rounded-2xl p-12">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="font-heading font-extrabold text-2xl text-deep-graphite">Заявка отправлена!</h2>
            <p className="text-deep-graphite/70 mt-4">Мы свяжемся с вами в течение 2 часов для уточнения деталей.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-24">
      <div ref={ref} className="reveal max-w-2xl mx-auto px-6">
        <span className="font-mono text-sm text-deep-graphite/70 tracking-wider">[08] ЗАПРОС</span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite mt-3">
          Оставьте заявку — подберём фабрику под вашу задачу.
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Honeypot */}
          <input 
            type="text" 
            name="website" 
            className="ohnohoney" 
            tabIndex={-1} 
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
          />
          
          <div>
            <label className="font-mono text-sm text-deep-graphite/70 block mb-2">Имя</label>
            <input 
              type="text" 
              required
              placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-lg border border-warm-stone bg-soft-white text-deep-graphite focus:outline-none focus:border-turquoise transition-colors font-mono text-sm"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="font-mono text-sm text-deep-graphite/70 block mb-2">Телефон</label>
            <input 
              type="tel" 
              required
              placeholder="+7 (___) ___-__-__"
              className="w-full px-4 py-3 rounded-lg border border-warm-stone bg-soft-white text-deep-graphite focus:outline-none focus:border-turquoise transition-colors font-mono text-sm"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <label className="font-mono text-sm text-deep-graphite/70 block mb-3">Что нужно?</label>
            <div className="flex flex-wrap gap-3">
              {['Кухня', 'Шкаф', 'И то, и другое'].map((opt) => (
                <label key={opt} className={`cursor-pointer px-4 py-2.5 rounded-lg border font-mono text-sm transition-all ${formData.type === opt ? 'bg-turquoise text-white border-turquoise' : 'border-warm-stone text-deep-graphite/70 hover:border-turquoise'}`}>
                  <input 
                    type="radio" 
                    name="type" 
                    value={opt} 
                    className="sr-only"
                    checked={formData.type === opt}
                    onChange={() => setFormData({...formData, type: opt})}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="font-mono text-sm text-deep-graphite/70 block mb-3">Бюджет?</label>
            <div className="flex flex-wrap gap-3">
              {['до 150 тыс.', '150–300 тыс.', '300–500 тыс.', '>500 тыс.'].map((opt) => (
                <label key={opt} className={`cursor-pointer px-4 py-2.5 rounded-lg border font-mono text-sm transition-all ${formData.budget === opt ? 'bg-turquoise text-white border-turquoise' : 'border-warm-stone text-deep-graphite/70 hover:border-turquoise'}`}>
                  <input 
                    type="radio" 
                    name="budget" 
                    value={opt} 
                    className="sr-only"
                    checked={formData.budget === opt}
                    onChange={() => setFormData({...formData, budget: opt})}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <input 
              type="checkbox" 
              id="agreement"
              className="mt-1 w-4 h-4 accent-turquoise"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agreement" className="text-sm text-deep-graphite/70 cursor-pointer">
              Согласие на обработку персональных данных
            </label>
          </div>
          
          <button 
            type="submit" 
            disabled={!agreed}
            className="w-full font-mono text-sm font-medium px-8 py-4 bg-turquoise text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            УЗНАТЬ СТОИМОСТЬ
          </button>
        </form>
      </div>
    </section>
  );
}

// ============ BLOCK 9: FAQ ============
function FAQBlock() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: 'Почему вы не показываете названия фабрик?', a: 'Платите за решение, а не бренд. Мы представляем интересы клиента и подбираем фабрику под задачу, а не продвигаем конкретные марки. Название фабрики не гарантирует качество — его гарантирует наш контроль и стандарт.' },
    { q: 'Сколько в вашем портфеле фабрик?', a: 'На данный момент прошедших авторизацию и подключенных — 12 фабрик. Впереди еще не один десяток. Мы растем постепенно, чтобы сохранить контроль качества на каждом производстве.' },
    { q: 'Лоббирование фабрик?', a: 'Для нас фабрика — не статус, а площадка, способная или неспособная выполнить запрос в рамках технологических требований и стоимости. Мы не лоббируем никого — мы лоббируем интересы клиента.' },
    { q: 'Что если фабрика подведёт?', a: 'Отвечаем мы, а не фабрика. Мы принимаем детали на свой склад, проверяем комплектность и качество. Если что-то не так — мы решаем проблему за свой счет.' },
    { q: 'Сколько стоит подбор?', a: 'Бесплатно. Комиссия от фабрики. Для клиента подбор, сравнение и экспертиза — без дополнительной оплаты.' },
    { q: 'Кто вы такие?', a: 'Команда MIRANEX. Мы специалисты, прежде всего представляющие интересы клиентов. Качество должно быть доступным — не за счет снижения стандартов, а за счет устранения лишних надбавок.' },
    { q: 'Чем вы отличаетесь от прочих игроков?', a: 'Делаем сложное простым. Вместо хаоса салонов и непрозрачности прямых фабрик — одно окно, прозрачные условия, экспертный подбор и полный контроль процесса.' },
    { q: 'Вы классический посредник?', a: 'Мы строим платформу обустройства дома. Мебель — первый шаг. В отличие от посредников, мы не просто «соединяем» — мы контролируем стандарт, проверяем качество и отвечаем за результат.' },
    { q: 'По каким критериям вы выбираете фабрики?', a: 'Аудит, чек-листы, сертификация перед авторизацией в системе MIRANEX. Мы проверяем оборудование, технологии, историю рекламаций, стабильность качества и соответствие нашим стандартам.' },
  ];

  return (
    <section className="py-24 bg-warm-stone/20">
      <div ref={ref} className="reveal max-w-3xl mx-auto px-6">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-graphite">
          Частые вопросы.
        </h2>
        
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-soft-white rounded-xl border border-warm-stone overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-warm-stone/20 transition-colors"
              >
                <span className="font-medium text-deep-graphite pr-4">{faq.q}</span>
                <span className={`text-coral font-bold text-xl flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-4 text-deep-graphite/75 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ BLOCK 10: FOOTER ============
function Footer() {
  return (
    <footer className="bg-deep-graphite py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" fill="#FAFAF7" />
                <rect x="22" y="2" width="12" height="12" rx="2" fill="#35C9B2" />
                <rect x="2" y="22" width="12" height="12" rx="2" fill="#35C9B2" />
                <rect x="22" y="22" width="12" height="12" rx="2" fill="#FAFAF7" />
                <circle cx="18" cy="18" r="4" fill="#E56B52" />
              </svg>
              <span className="font-heading font-extrabold text-lg text-soft-white">MIRANEX</span>
            </div>
            <p className="font-mono text-xs text-soft-white/50">
              адрес: Москва, квартал 105, владение 47А, строение 1
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs text-soft-white/40 mb-3 tracking-wider">ДОКУМЕНТЫ</h4>
            <div className="space-y-2">
              <a href="#" className="block font-mono text-sm text-soft-white/70 hover:text-turquoise transition-colors">Политика конфиденциальности</a>
              <a href="#" className="block font-mono text-sm text-soft-white/70 hover:text-turquoise transition-colors">Согласие на обработку персональных данных</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-xs text-soft-white/40 mb-3 tracking-wider">КОНТАКТЫ</h4>
            <div className="space-y-2">
              <a href="tel:+74951234567" className="block font-mono text-sm text-soft-white/70 hover:text-turquoise transition-colors">+7 (495) 123-45-67</a>
              <a href="mailto:info@miranex.ru" className="block font-mono text-sm text-soft-white/70 hover:text-turquoise transition-colors">info@miranex.ru</a>
              <a href="https://t.me/miranex" className="block font-mono text-sm text-soft-white/70 hover:text-turquoise transition-colors">Telegram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-soft-white/10 text-center">
          <p className="font-mono text-xs text-soft-white/40">© 2026 MIRANEX. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-soft-white">
      <Header />
      <main>
        <HeroBlock />
        <ProcessBlock />
        <CategoriesBlock />
        <StandardBlock />
        <ManifestoBlock />
        <CasesBlock />
        <ConditionsBlock />
        <FormBlock />
        <FAQBlock />
      </main>
      <Footer />
    </div>
  );
}
