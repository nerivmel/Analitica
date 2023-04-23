import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="about">
        <div className="roles">
          <h1 className="about-tittle">Roles</h1>
          <h3 className="ltittle">Análisis I</h3>
          <ul>
            <li>Santiago Rivera Montoya</li>
            <li>Santiago Alexander Losada</li>
            <li>Wilmar Andrés Osorio</li>
            <li>Emanuel López Higuita</li>
          </ul>
          <h3 className="ltittle">Análisis II</h3>
          <ul>
            <li>Wilmer Santiago Soto</li>
            <li>Juan Pablo Gómez López</li>
            <li>Juan Manuel Vera Osorio</li>
          </ul>
          <h3 className="ltittle">Arquitectura de software</h3>
          <ul>
            <li>Manuel Calle Garcés</li>
          </ul>
          <h3 className="ltittle">Bases de datos</h3>
          <ul>
            <li>Daniel Hamilton Garcés</li>
          </ul>
          <h3 className="ltittle">Gestión de proyectos</h3>
          <ul>
            <li>
              Juan Fernando Cardona
            </li>
          </ul>
        </div>
        <div className="description">
          <h1 className="about-tittle">Descripción</h1>
          <br />
          <p>El proyecto tiene como objetivo desarrollar un módulo que facilite el acceso a información relevante sobre la deserción de estudiantes en la Universidad de Antioquia. Para lograrlo, se utilizarán técnicas de analítica de datos para identificar patrones y tendencias relacionadas con la deserción.
          El módulo ofrecerá recomendaciones y recursos personalizados para apoyar a los estudiantes en riesgo de abandonar sus estudios. La plataforma será accesible y fácil de usar, y su objetivo final es mejorar la retención de estudiantes y reducir la tasa de deserción.
          </p>
        </div>
      </div> <br /><br />
    </div>
  );
}