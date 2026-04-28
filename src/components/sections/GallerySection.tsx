const photos = [
  { id: 1, color: '#ff3cac', emoji: '🎤', size: 'large', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/30e45e81-4bf2-40e1-8060-9e20b6a2b569.jpg' },
  { id: 2, color: '#3cf0ff', emoji: '💃', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/98715647-c8dc-4a6d-b41d-5ef501c4774d.jpg' },
  { id: 3, color: '#f5c842', emoji: '🎭', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/961d1c40-f3d6-4b09-852c-d652eab9a063.jpg' },
  { id: 4, color: '#ff3cac', emoji: '🎸', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/3f337939-eafc-4f0b-84b7-127f20ef0e71.jpg' },
  { id: 5, color: '#3cf0ff', emoji: '🌟', size: 'large', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/f6d906b0-5c19-45e3-ba35-840653413a2e.jpg' },
  { id: 6, color: '#f5c842', emoji: '🎬', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/52a23b98-e933-48f2-8a69-e9bbf8cafdb3.jpg' },
  { id: 7, color: '#ff3cac', emoji: '🎤', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/5b1fd60f-c6f2-4863-bd48-b0cbb2bfc77f.jpg' },
  { id: 8, color: '#3cf0ff', emoji: '💃', size: 'small', photo: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/e3c57e43-634b-47db-90cd-02d4e98741e3.jpg' },
];

const GallerySection = () => (
  <section id="gallery" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

    <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
      style={{ background: '#f5c842' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-neon-pink text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Моменты</div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Галерея
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4">
        {photos.map(p => (
          <div key={p.id}
            className={`group relative rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:scale-[1.02]
              ${p.size === 'large' ? 'col-span-2 row-span-2' : ''}`}
            style={{ background: `linear-gradient(135deg, ${p.color}0a 0%, rgba(13,13,46,.95) 100%)` }}>

            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

            {p.photo ? (
              <img src={p.photo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 group-hover:opacity-20 transition-opacity select-none pointer-events-none">
                {p.emoji}
              </div>
            )}

            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, ${p.color} 1px, transparent 1px)`,
                backgroundSize: '22px 22px',
              }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;