  "use client";
 
import type { NextPage } from 'next';
import Head from 'next/head';
import Hi from './home/hi';
import CategorySection from './home/category';
import İnfo from './home/info';
const Home: NextPage = () => {
 



 
  return (
    <>
      <Head>
        <title>ProRandevu | Çoklu Hizmet Randevu Sistemi</title>
        <meta name="description" content="Doktor, avukat, berber ve daha fazlası için online randevu sistemi" />
      </Head>
        <Hi />
        <CategorySection />
        <İnfo />


      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hemen Profesyonel Bulun</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            İhtiyacınıza uygun profesyonellerle kolayca randevu alın
          </p>
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition">
            Randevu Almaya Başla
          </button>
        </div>
      </section>

     
   
    </>
  );
};

export default Home;