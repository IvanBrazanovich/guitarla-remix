import React from "react";

const Curso = ({ curso }) => {
  console.log(curso);

  const { titulo, content, imagen } = curso;

  return (
    <section className="curso">
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgba(0 0 0 / 0.6),
              rgba(0 0 0 / 0.7)
            ),
            url(${imagen?.data.attributes.url});
        }
      `}</style>
      <div className="contenedor curso-grid">
        <div className="info-container">
          <h3 className="heading">{titulo}</h3>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
