import React, { useState } from "react";

const CategorySection = () => {
  // Kategoriler
  const categories = [
    { id: 'all', name: 'Tümü', icon: '👨‍⚕️' },
    { id: 'doctor', name: 'Doktorlar', icon: '🩺' },
    { id: 'lawyer', name: 'Avukatlar', icon: '⚖️' },
    { id: 'barber', name: 'Berberler', icon: '✂️' },
    { id: 'dietitian', name: 'Diyetisyenler', icon: '🍎' },
    { id: 'trainer', name: 'Kişisel Antrenörler', icon: '💪' },
    { id: 'therapist', name: 'Terapistler', icon: '🧠' },
  ];

  // Profesyoneller
  const professionals = [
    {
      id: 1,
      name: 'Dr. Ayşe Demir',
      category: 'doctor',
      specialty: 'Kardiyoloji',
      rating: 4.9,
      experience: '15 yıl',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      available: true
    },
    {
      id: 2,
      name: 'Av. Mehmet Kaya',
      category: 'lawyer',
      specialty: 'Ceza Hukuku',
      rating: 4.8,
      experience: '12 yıl',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      available: true
    },
    {
      id: 3,
      name: 'Berber Ali Şen',
      category: 'barber',
      specialty: 'Sakal Tasarım',
      rating: 4.7,
      experience: '8 yıl',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      available: true
    },
    {
      id: 4,
      name: 'Dyt. Zeynep Ak',
      category: 'dietitian',
      specialty: 'Kilo Yönetimi',
      rating: 4.8,
      experience: '10 yıl',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      available: false
    },
    {
      id: 5,
      name: 'Antrenör Can Yılmaz',
      category: 'trainer',
      specialty: 'Fonksiyonel Antrenman',
      rating: 4.6,
      experience: '7 yıl',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      available: true
    },
    {
      id: 6,
      name: 'Psikolog Elif Durmaz',
      category: 'therapist',
      specialty: 'Bilişsel Terapi',
      rating: 4.9,
      experience: '9 yıl',
      image: 'https://randomuser.me/api/portraits/women/25.jpg',
      available: true
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProfessionals = activeCategory !== 'all'
    ? professionals.filter((p) => p.category === activeCategory)
    : professionals;

  return (
    <>
      <section className="py-8 bg-white  top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 con">
          <div className="flex justify-center overflow-x-auto pb-2 space-x-4">

            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex flex-col items-center px-4 py-2 rounded-lg min-w-max ${
                  activeCategory === category.id ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Profesyoneller Listesi */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {activeCategory === 'all'
              ? 'Tüm Profesyoneller'
              : categories.find(c => c.id === activeCategory)?.name + ' Listesi'}
          </h2>

          {filteredProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessionals.map((professional) => (
                <div key={professional.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="relative">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-full h-48 object-cover"
                    />
                    {!professional.available && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          Şu Anda Müsait Değil
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{professional.name}</h3>
                        <p className="text-indigo-600">{professional.specialty}</p>
                      </div>
                      <div className="flex items-center bg-indigo-100 px-2 py-1 rounded">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm">{professional.rating}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{professional.experience} deneyim</span>
                      <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                        {categories.find(c => c.id === professional.category)?.name}
                      </span>
                    </div>

                    <button
                      className={`mt-4 w-full py-2 rounded-lg font-medium ${
                        professional.available
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!professional.available}
                    >
                      {professional.available ? 'Randevu Al' : 'Müsait Değil'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Bu kategoride profesyonel bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategorySection;
