import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import SectionCard from "../components/SectionCard";
import BackButton from "../components/BackButton";

const Consultas = ({ consultas }) => {

  console.log(consultas.results);
  const data = consultas.results;

  return (
    <div className="text-center min-h-screen  ">
      <div>
        <img className="mx-auto my-4 mt-10" src="/consultas.png" alt="consulta" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de consulta
        </h1>
      </div>

      {data.map((consulta, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={consulta.data.titulo[0].text}
          productDescription={consulta.data.descripcion[0].text}        
          
        />
      ))}

      <BackButton/>
    </div>
  );
};

export default Consultas;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const consultas = await Client().query(
    Prismic.Predicates.at("document.type", "consultas")
  );

  return {
    props: {
      consultas: consultas,
    },
  };
}
