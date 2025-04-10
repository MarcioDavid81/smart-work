"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

const Card = ({ title, description, imageUrl, delay = 0 }: any) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-800">
        <Hero />
        <main className="px-6 py-12 max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <Card
              title="A importância da saúde ocupacional"
              description="Cuidar da saúde ocupacional é fundamental para garantir o bem-estar dos colaboradores, prevenir doenças relacionadas ao trabalho e aumentar a produtividade das equipes. Com a tecnologia, é possível monitorar indicadores de saúde e segurança com mais eficiência."
              imageUrl="https://images.unsplash.com/photo-1563198797-31e0a0dc15c0"
              delay={0.1}
            />
            <Card
              title="Uso correto dos EPIs"
              description="Equipamentos de Proteção Individual (EPIs) são fundamentais para proteger o trabalhador de riscos no ambiente laboral. O uso correto evita acidentes e contribui para um ambiente mais seguro."
              imageUrl="https://images.unsplash.com/photo-1662309376159-b95fb193d96b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              delay={0.2}
            />
            <Card
              title="NR-33 – Espaço Confinado"
              description="Esta norma trata dos requisitos mínimos para identificação, reconhecimento, avaliação, monitoramento e controle dos riscos em espaços confinados. Ela exige treinamentos específicos e medidas de segurança rigorosas."
              imageUrl="https://images.unsplash.com/photo-1660593555621-91f86fcef284?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwYSVDMyVBN28lMjBjb25maW5hZG8lMjBzaWxvcyUyMGUlMjBhcm1hemVuc3xlbnwwfHwwfHx8MA%3D%3D"
              delay={0.3}
            />
            <Card
              title="NR-35 – Trabalho em Altura"
              description="Estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo planejamento, organização e execução. Inclui a obrigatoriedade de treinamentos e uso de EPIs adequados."
              imageUrl="https://images.unsplash.com/photo-1674558064173-ed002fcbd150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhYmFsaG8lMjBlbSUyMGFsdHVyYSUyMHNpbG9zJTIwZSUyMGFybWF6ZW5zfGVufDB8fDB8fHww"
              delay={0.4}
            />
          </section>

          <section className="text-center">
            <p className="text-lg font-medium">
              Conscientização é o primeiro passo para um ambiente seguro.
            </p>
            <a
              href="/login"
              className="mt-4 inline-block bg-[#78b49a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#78b49a]/80 transition"
            >
              Entrar no sistema
            </a>
          </section>
        </main>
      <Footer />
      </div>
    </>
  );
}
