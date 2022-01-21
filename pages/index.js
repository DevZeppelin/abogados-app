import Head from "next/head";
import MainCard from "../components/MainCard";
import Link from "next/link";
import MainButton from "../components/MainButton";
import { useState } from "react";
import LittleCard from "../components/LittleCard";

export default function Home() {
  const [consultas, setConsultas] = useState(false);
  const [leyes, setLeyes] = useState(false);
  const [tramites, setTramites] = useState(false);

  return (
    <div>
      <Head>
        <title>Estudio Abogados Demo</title>
        <meta name="description" content="Restaurant QR Carta Demo " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="background mx-auto pb-6 md:mx-72">
        <img
          src="/logo.png"
          alt="logo restaurant qr demo"
          className="logo-animation mx-auto w-60 h-50 py-4 p-4"
        />
        <h2 className="text-center text-xl font-bold text-dgray textLight mb-6">
          Estudio de abogados
        </h2>

        <div className="flex flex-col justify-center mx-6">
          <button className="mx-0" onClick={() => setConsultas(!consultas)}>
            <MainCard
              src="/consultas.png"
              alt="desayuno restaurant"
              title="Consultas"
            />
          </button>
          {consultas ? (
            <div className="grid grid-cols-2">
              <Link href="/consultas">
                <a href="">
                  <LittleCard
                    src="/judiciales.png"
                    alt="desayuno restaurant"
                    title="Judiciales"
                  />
                </a>
              </Link>
              <Link href="/consultas">
                <a href="">
                  <LittleCard
                    src="/delincuente.png"
                    alt="desayuno restaurant"
                    title="Penales"
                  />
                </a>
              </Link>
              <Link href="/consultas">
                <a href="">
                  <LittleCard
                    src="/divorcio.png"
                    alt="desayuno restaurant"
                    title="Divorcios"
                  />
                </a>
              </Link>
              <Link href="/consultas">
                <a href="">
                  <LittleCard
                    src="/sucesion.png"
                    alt="desayuno restaurant"
                    title="Sucesiones"
                  />
                </a>
              </Link>
            </div>
          ) : null}

          <button className="mx-0" onClick={() => setLeyes(!leyes)}>
            <MainCard
              src="/leyes.png"
              alt="desayuno restaurant"
              title="Leyes útiles"
            />
          </button>
          {leyes ? (
            <div className="grid grid-cols-2">
              <LittleCard
                src="/libro.png"
                alt="desayuno restaurant"
                title="Leyes nuevas"
              />
              <LittleCard
                src="/ley.png"
                alt="desayuno restaurant"
                title="Leyes laborales"
              />
              <LittleCard
                src="/ley.png"
                alt="desayuno restaurant"
                title="Leyes viales"
              />
              <LittleCard
                src="/ley.png"
                alt="desayuno restaurant"
                title="Leyes de gran impacto"
              />
            </div>
          ) : null}

          <button className="mx-0" onClick={() => setTramites(!tramites)}>
            <MainCard
              src="/tramites.png"
              alt="desayuno restaurant"
              title="Trámites"
            />
          </button>
          {tramites ? (
            <div className="grid grid-cols-2">
              <LittleCard
                src="/sucesion.png"
                alt="desayuno restaurant"
                title="Sucesiones"
              />
              <LittleCard
                src="/sucesion.png"
                alt="desayuno restaurant"
                title="Anticipo de herencia"
              />
              <LittleCard
                src="/sucesion.png"
                alt="desayuno restaurant"
                title="Denuncias"
              />
              <LittleCard
                src="/sucesion.png"
                alt="desayuno restaurant"
                title="Embargos"
              />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-1">
          <a href="">
            <MainButton text="Chatea con nosotros" src="./chat.png" />
          </a>
          <Link href="/map">
            <a>
              <MainButton text="Ubicación del estudio" src="./map.png" />
            </a>
          </Link>
          <Link href="/contacto">
            <a>
              <MainButton text="Contacto" src="./contact.png" />
            </a>
          </Link>
        </div>
      </main>
      <style jsx>{`
        .textLight {
          text-shadow: 1px 2px 4px gray;
        }
        .textDark {
          text-shadow: 1px 2px 4px black;
        }
      `}</style>
    </div>
  );
}
