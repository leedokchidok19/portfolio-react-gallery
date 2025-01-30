import React, { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <header>
        <nav>
          <a href="#" class="logo">
            <img src="#" alt="Gallery Logo" />
          </a>
          <div class="menu">
            <button type="button">menu</button>
            <button type="button">search</button>
          </div>
        </nav>
      </header>

      <main>
        <section class="gallery">
          <article class="gallery-item">
            <figure>
              <img src="https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg" alt="이미지" />
              <figcaption>
                <h2>title</h2>
                <address class="artist">artist</address>
              </figcaption>
            </figure>
            <div class="description">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad explicabo, quam eos neque nostrum ab esse consequuntur optio sunt tenetur consectetur dolore odio est id enim, dolorem mollitia. Recusandae?
              Dolore, earum impedit! Ex magni suscipit enim, odio architecto tempora, possimus doloremque commodi voluptatum exercitationem itaque unde? Repellendus cum quidem incidunt tempore, temporibus repudiandae maxime, voluptates, placeat aliquam aut veritatis!
              Modi voluptas sit, maiores neque ipsam iusto voluptatem commodi eaque veritatis dolor, alias, omnis molestias incidunt sequi optio ipsum error dolore earum? Officiis omnis soluta harum voluptas blanditiis reprehenderit porro?
              Nam deleniti dolorum magni saepe voluptas porro quis maxime soluta ad tempora harum, blanditiis laboriosam, cumque facilis nulla est consequatur perferendis rem. Tenetur pariatur, ipsam placeat voluptatem incidunt quam id!
              Repellendus numquam rem eaque asperiores eveniet! Amet commodi minima repellendus assumenda quam eligendi repudiandae enim cumque ex dolor consequatur eum exercitationem fugiat unde temporibus, atque dolorem hic repellat odit libero.
              </p>
            </div>
          </article>

          <article class="gallery-item">
            <figure>
              <img src="https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg" alt="이미지" />
              <figcaption>
                <h2>title</h2>
                <address class="artist">artist</address>
              </figcaption>
            </figure>
            <div class="description">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad explicabo, quam eos neque nostrum ab esse consequuntur optio sunt tenetur consectetur dolore odio est id enim, dolorem mollitia. Recusandae?
              Dolore, earum impedit! Ex magni suscipit enim, odio architecto tempora, possimus doloremque commodi voluptatum exercitationem itaque unde? Repellendus cum quidem incidunt tempore, temporibus repudiandae maxime, voluptates, placeat aliquam aut veritatis!
              Modi voluptas sit, maiores neque ipsam iusto voluptatem commodi eaque veritatis dolor, alias, omnis molestias incidunt sequi optio ipsum error dolore earum? Officiis omnis soluta harum voluptas blanditiis reprehenderit porro?
              Nam deleniti dolorum magni saepe voluptas porro quis maxime soluta ad tempora harum, blanditiis laboriosam, cumque facilis nulla est consequatur perferendis rem. Tenetur pariatur, ipsam placeat voluptatem incidunt quam id!
              Repellendus numquam rem eaque asperiores eveniet! Amet commodi minima repellendus assumenda quam eligendi repudiandae enim cumque ex dolor consequatur eum exercitationem fugiat unde temporibus, atque dolorem hic repellat odit libero.
              </p>
            </div>
          </article>
        </section>

        <section class="category-section">
          <header class="category-header">
            <h2><a href="#">category title</a></h2>
            <a href="#" class="more-link">more btn</a>
          </header>
          <ul class="category-list">
            <li class="category-item">
              <figure>
                <img src="https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg" alt="이미지" />
                <figcaption>
                  <h3>title</h3>
                  <address class="artist">artist</address>
                </figcaption>
              </figure>
            </li>
            <li class="category-item">
              <figure>
                <img src="https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg" alt="이미지" />
                <figcaption>
                  <h3>title</h3>
                  <address class="artist">artist</address>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
