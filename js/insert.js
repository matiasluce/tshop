document.getElementById('header').innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Tshop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contacto</a>
              </li>
            </ul>
            <i class="fa-solid fa-cart-shopping" id="open-cart"></i>
          </div>
        </div>
      </nav>
`

document.getElementById('footer').innerHTML = `
    <div class="info">
        <h3>TShop</h3>
        <div class="social-media">
          <a href="https://www.instagram.com"><i class="fa-brands fa-instagram-square"></i></a>
          <a href="https://www.twitter.com"><i class="fa-brands fa-facebook-square"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-youtube-square"></i></a>
        </div>
      </div>
      <div class="links">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="contact.html">Contacto</a></li>
        </ul>
      </div>
      <div class="dir">
        <h5>Encontranos de lunes a viernes en:</h5>
        <h5><i class="fa-solid fa-location-dot"></i> 187 High House Rd</h5>
        <h6>8:00 a 20:00</h6>
        </div>
`