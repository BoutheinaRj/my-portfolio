import React from 'react';

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Welcome to my Portfolio</h1>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen p-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p>
          Je suis une développeuse passionnée par le web, Java, Spring et Symfony.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen p-20 bg-gray-200"
      >
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p>
          Ici tu peux afficher tes projets, cards, images, GitHub links, etc.
        </p>
      </section>

    </div>
  );
}

export default Home;
