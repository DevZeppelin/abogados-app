import BackButton from "../components/BackButton"

const map = () => {
  return  <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900 text-center text-2xl font-bold">
      <h1 className="my-4">Nuestro estudio</h1>
    <iframe
      title="map"
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=mendoza&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
    ></iframe>
    <BackButton />
  </div>
  <div className="container px-5 py-24 min-h-screen mx-auto flex"></div>
</section>
};

export default map;
