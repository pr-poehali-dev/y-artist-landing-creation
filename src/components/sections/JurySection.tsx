const jury = [
  {
    name: 'Людмила Николаева',
    role: 'Народная артистка России',
    desc: 'Художественный руководитель ансамбля «Русская душа»',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/d1236c9f-e532-4cd1-90be-90d79cdeff1d.png',
    color: '#ff3cac',
  },
  {
    name: 'Виктор Соловьёв',
    role: 'Театральный режиссёр',
    desc: 'Народный артист России, лауреат премии «Золотая маска»',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/2fab04e2-e803-4f75-81e5-766a9ec7d79d.jpg',
    color: '#3cf0ff',
  },
  {
    name: 'Анна Светлова',
    role: 'Хореограф',
    desc: 'Прима-балерина, художественный руководитель Академии танца',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/71c4c52f-e193-4fa2-ab50-410df1226920.jpg',
    color: '#f5c842',
  },
  {
    name: 'Дмитрий Карпов',
    role: 'Музыкальный продюсер',
    desc: 'Продюсер более 50 платиновых альбомов, основатель студии KarpSound',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/ea122113-49a9-453c-92fb-d125a7df094b.jpg',
    color: '#ff3cac',
  },
  {
    name: 'Ирина Волкова',
    role: 'Оперная певица',
    desc: 'Солистка Большого театра, обладательница премии Grammy',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/89f55579-fac9-4fdd-abc4-33def62a574e.jpg',
    color: '#3cf0ff',
  },
  {
    name: 'Максим Орлов',
    role: 'Кинорежиссёр',
    desc: 'Режиссёр-лауреат Каннского кинофестиваля, член Европейской киноакадемии',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/4a1c677b-22fa-4c9d-a3e1-dd1eef4a45d3.jpg',
    color: '#f5c842',
  },
  {
    name: 'Роман Черных',
    role: 'Культурный критик',
    desc: 'Главный редактор журнала «Сцена», автор трёх книг об искусстве',
    photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/files/a87e3e0e-27a1-4d8e-8502-5c939137475e.jpg',
    color: '#ff3cac',
  },
];

const JurySection = () => (
  <section id="jury" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #0d0d2e 0%, #06061a 100%)' }}>

    <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
      style={{ background: '#3cf0ff' }} />
    <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full blur-3xl opacity-6 pointer-events-none"
      style={{ background: '#ff3cac' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-neon-blue text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Эксперты</div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Состав<br />
          <span className="text-3d-gold">жюри</span>
        </h2>
        <p className="text-white/50 mt-6 max-w-xl mx-auto">
          Выдающиеся деятели культуры и искусства, которые определяют лауреатов премии «Я — Артист».
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jury.map((member, i) => (
          <div key={member.name}
            className="group relative rounded-2xl overflow-hidden cursor-default"
            style={{ border: '1px solid rgba(255,255,255,.06)' }}>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(180deg, transparent 40%, ${member.color}25 100%)` }} />

            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, #06061a 100%)' }} />
            </div>

            <div className="relative p-4" style={{ background: 'rgba(6,6,26,.9)' }}>
              <div className="text-xs font-semibold mb-1 transition-colors duration-300"
                style={{ color: member.color }}>
                {member.role}
              </div>
              <h3 className="text-white font-bold text-sm leading-tight mb-2">{member.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{member.desc}</p>
            </div>

            <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black opacity-60"
              style={{ background: member.color + '20', color: member.color, border: `1px solid ${member.color}40` }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JurySection;