import BackButton from "../components/BackButton";

const contacto = () => {
  return (
    <section className="text-gray-400 body-font">
      <div className="text-center space-y-6">
        <h1 className="my-4 pt-6 text-center text-4xl">Contacto</h1>

        <div>
          <p className="font-bold">Número de teléfono</p>
          <p>+5492616895410</p>
        </div>
        <div>
          <p className="font-bold">Dirección</p>
          <p>+Peltier 995</p>
        </div>
        <div>
          <p className="font-bold">E-mail</p>
          <p>abogados@gmail.com</p>
        </div>

        <BackButton />
      </div>
    </section>
  );
};

export default contacto;
