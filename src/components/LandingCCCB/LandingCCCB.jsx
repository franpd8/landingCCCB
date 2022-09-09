import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./LandingCCCB.scss";
import logo from "./../../assets/images/logo-cccb.svg";
import icon1  from "./../../assets/images/icon1.svg";

import icon2 from "./../../assets/images/icon2.svg";

import icon3 from "./../../assets/images/icon3.svg";


import { BiRightArrowAlt } from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi"
import { Helmet } from "react-helmet";
import BulletPoints from "../BulletPoints/BulletPoints";
const LandingCCCB = () => {
  let imgs = [
    "https://i.imgur.com/5Xnpu7F.png",
    "https://i.imgur.com/FxqC1Ws.png",
    "https://i.imgur.com/6AefV5z.gif",
    "https://i.imgur.com/zmsboAu.gif",
    "https://i.imgur.com/lEmCkCo.png",
    "https://i.imgur.com/14IOS3b.png",
    "https://imgur.com/b1Rel7D.gif",
  ];


  return (
    <div className="LandingCCCB ">

         <Helmet>
        <title>Centre de Cultura Contemporània de Barcelona.</title>
      </Helmet>
      <div className="navbar top">
        <h1>
          <img src={logo} alt="CCCB-logo" />
        </h1>
        <nav>
          <Link to="#2-benefits">TecnosferaNow</Link>
          <Link to="#6-feature-events">Eventos y Actividades</Link>
          <Link to="#8-feature-streaming">Cursos Virtuales</Link>

          <Link to="">
            <div className="cta">Descarga la App</div>
          </Link>
          <GiHamburgerMenu size={30} className="menu"/>

        </nav>
      </div>
      <section id="1-hero">
      <div className="herx">
        <div className="containxr">
          <div className="containxr__title bold">
            <h2 id="exemplo">El CCCB al alcance de tu mano.</h2>
          </div>
          <div className="containxr__body">
            Descubre TecnosferaNow y accede a exposiciones y actividades
            exclusivas desde tu teléfono móvil.
          </div>
          <div className="containxr__CTA">Descargála ya</div>
        </div>
        <div className="containxr-img">
          <img src={imgs[0]} />
        </div>
      </div>
      </section>
<section  id="2-benefits">
    <div className="bannxr bannxr1">
        <div className="bannxr__title bold">¿Qué puedo hacer con TecnosferaNOW?</div>
        <div className="bannxr__benefits">
            <div className="benefit">
                <div className="benefit__icon"><img src={icon1} /></div>
                <div className="benefit__text">Accede a <span className="pink bold">eventos exclusivos </span>  
 desde la app.</div>
            </div>
            <div className="benefit">
                <div className="benefit__icon"><img src={icon2} /></div>
                <div className="benefit__text">Visita exposiciones <span className="bold pink">virtualmente </span> desde casa.</div>
            </div>
            <div className="benefit">
                <div className="benefit__icon"><img src={icon3} /></div>
                <div className="benefit__text">Participa e <span className="bold pink">interactúa </span> en eventos en directo.</div>
            </div>
        </div>
    </div>
</section>
      <section id="3-feature-access">
        <div className="containxr one">
          <div className="containxr__text">
            <div className="containxr__text__title">Acceso para todos.</div>
            <div className="containxr__text__body">
              <p>
                Escoge el método que quieras para{" "}
                <span className="pink bold">registrarte</span> y crea tu perfil
                y así podrás acceder al contenido que mejor se ajuste a tus
                gustos.
              </p>
              <p>
                Indícanos <span className="pink bold">qué te interesa </span> y
                te ofreceremos resultados recomendados.
              </p>
              <p>
                O entra como <span className="bold pink">invitado</span> y
                descubre todo lo que encontrarás aquí.{" "}
              </p>
            </div>
          </div>
          <div className="containxr__img">
            <img src={imgs[1]} />
          </div>
        </div>
      </section>

      <section id="4-feature-activities">
        <div className="containxr mirror two">
          <div className="containxr__text">
            <div className="containxr__text__title">
              Encuentra lo que buscas.
            </div>
            <div className="containxr__text__body mirror">
              <p>
                En la pantalla de inicio encontrarás la información para{" "}
                <span className="bold pink">Visitar el CCCB</span>,la
                programación actual del centro para{" "}
                <span className="bold pink">Exposiciones y Actividades</span>,
                así como el archivo de{" "}
                <span className="bold pink">Vídeos y Publicaciones</span>.
              </p>
              <BulletPoints
                title="Visitar el CCCB:"
                subtitle="Cómo llegar, horarios, precios, grupos..."
              />
              <BulletPoints
                title="Exposiciones y Actividades:"
                subtitle="Qué visitar hoy, próximos eventos..."
              />
              <BulletPoints
                title="Vídeos y Publicaciones:"
                subtitle="Entrevistas, reportajes, relatos..."
              />
            </div>
          </div>
          <div className="containxr__img">
            <img className="gif" src={imgs[3]} />
          </div>
        </div>
      </section>
   <section id="5-bannxr-cta">
        <div className="herx bannxr-cta">
        <div className="containxr">
          <div className="containxr__body">
            Descubre TecnosferaNow y accede a exposiciones y actividades
            exclusivas desde tu teléfono móvil.
          </div>
          <div className="containxr__CTA">Descargála ya</div>
        </div>
        <div className="containxr-img">
          <img src={imgs[4]} />
        </div>

        </div>
        </section>
      <section id="6-feature-events">
        <div className="containxr three ">
          <div className="containxr__text">
            <div className="containxr__text__title">
              No te pierdas ningún evento.
            </div>
            <div className="containxr__text__body mirror">
              <p>
                Descubre todos los eventos que ofrece el CCCB y compra tu acceso
                para aquellos que te interesen. Tendrás toda la información a tu
                alcance:
              </p>
              <BulletPoints
                title="Descripción del evento:"
                subtitle="De qué trata y a quién va dirigido."
              />
              <BulletPoints
                title="Ubicación y programación: "
                subtitle="Dónde se ofrece y a qué hora comienza."
              />
              <BulletPoints
                title="Participantes:"
                subtitle="Descubre quién más asiste."
              />
              <BulletPoints
                title="Comentarios en directo:"
                subtitle="Opina sobre el evento y ayuda a los demás."
              />
            </div>
          </div>
          <div className="containxr__img">
            <img className="gif" src={imgs[2]} />
          </div>
        </div>
      </section>
      <section id="7-feature-tickets">
        <div className="containxr four mirror ">
          <div className="containxr__text">
            <div className="containxr__text__title">
              Tus entradas en un mismo lugar.
            </div>
            <div className="containxr__text__body mirror">
              <p>
                Accede rápidamente a las{" "}
                <span className="bold pink">Entradas Actuales</span> que has
                adquirido para no perder tiempo y llegar tarde.
              </p>
              <p>
                Aquí seguirán guardadas una vez terminado el evento como tu{" "}
                <span className="bold pink">Historial</span>.
              </p>
              <p>
                Encuentra también aquí tus eventos marcados como{" "}
                <span className="bold pink">Favoritos</span>.{" "}
              </p>
            </div>
          </div>
          <div className="containxr__img">
            <img src={imgs[5]} />
          </div>
        </div>
      </section>
      <section id="8-feature-streaming">
        <div className="containxr five">
          <div className="containxr__text">
            <div className="containxr__text__title">Sé parte del evento.</div>
            <div className="containxr__text__body mirror">
              <p>
                Participa e interactúa durante el desarrollo del evento con los
                demás asistentes.
              </p>
              <BulletPoints
                title="Comenta en directo:"
                subtitle="Publica en el chat abierto tus impresiones."
              />
              <BulletPoints
                title="Interactúa en privado:"
                subtitle="Chatea con otros usuarios de forma privada."
              />
              <BulletPoints
                title="Personaliza lo que ves:"
                subtitle="Modifica el aspecto de pantalla. "
              />
            </div>
          </div>
          <div className="containxr__img">
            <img className="gif" src={imgs[6]} />
          </div>
        </div>
      </section>
      <section id="9-footer">
        <div className="footer">
          <div className="newsletter">
            <div className="newsletter__title">Newsletter</div>
            <div className="newsletter__subtitle">
              Suscríbete a nuestra newsletter
            </div>
            <div className="newsletter__input">
              <div className="input-field"> Tu email</div>
              <div className="submit-btn bold">
                Suscríbete <BiRightArrowAlt className="arrow" size={20} />
              </div>
            </div>
          </div>
          
          <div className="bck"></div>
        </div>
        <div className="navbar-footer">
            <h1>
              <img src={logo} alt="CCCB-logo" />
            </h1>
            <nav>
              <Link to="">Contacto</Link>
              <Link to="">Aviso Legal</Link>
              <Link to="">Política de Privacidad</Link>
            </nav>
          </div>
      </section>
    </div>
  );
};

export default LandingCCCB;
