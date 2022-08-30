import React, { Fragment } from 'react'

const HomeFooter = () => {
  return (
   <Fragment>
     <div class="container my-5">
        <div class="container p-4">
          <div class="row" >
            <div class="d-flex flex-row justify-content-between bd-highlight mb-3 col-md-11 ">
              <div class="p-2 bd-highlight fs-5">TelefonRehberi</div>
              <div class="p-2 bd-highlight fs-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-tag mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                </svg>
                En Hesaplı
              </div>
              <div class="p-2 bd-highlight fs-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-shield-check mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
                En güvenli
              </div>
              <div class="p-2 bd-highlight fs-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
                En Pratik
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3">Otobüs Bileti</h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      En uygun otobüs bileti
                    </a>
                  </li>
                  <li class="mb1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Bilet Al
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Tüm Seferler
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Destinasyonlar
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Otobüs Şirketleri
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Terminaller
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Kampanya ve Promosyonlar
                    </a>
                  </li>

                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Uçak Bileti
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3">Otobüs Şirketleri</h5>
                <ul class="nav flex-column">
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Bizim Iğdır Seyahat
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Kahta Petrol
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Yeni Diyarbakır Seyahat
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Tokat Kale Seyahat
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Sanal Kırşehir Seyahat
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3">BiletAll</h5>
                <ul class="nav flex-column">
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Ucak Bileti
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Hakkımızda
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      KVKK Aydınlatma Metni
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Otobüs Kullanım Koşulları
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Ödüllerimiz
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Yardım ve İletişim
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Bilet İslemleri, İptal ve Değişim
                    </a>
                  </li>

                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      Mobil Versiyon
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3">Bizi Takip Edin</h5>
                <ul class="nav flex-column">
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      <a
                        class="btn btn-primary"
                        style={{ background: "#3b5998" }}
                        href="#!"
                        role="button"
                      >
                        <i class="fab fa-facebook"></i>
                      </a>
                      <span class="px-2">Facebook</span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      <a
                        class="btn btn-primary"
                        style={{ background: "#55acee" }}
                        href="#!"
                        role="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                      <span class="px-2">Twitter</span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      <a
                        class="btn btn-primary"
                        style={{ background: "#dd4b39" }}
                        href="#!"
                        role="button"
                      >
                        <i class="fab fa-google"></i>
                      </a>
                      <span class="px-2">Google</span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      <a
                        class="btn btn-primary"
                        style={{ background: "#ac2bac" }}
                        href="#!"
                        role="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <span class="px-2">Instagram</span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a href="#" class="nav-link p-0 text-muted">
                      <a
                        class="btn btn-primary"
                        style={{ background: "#0082ca" }}
                        href="#!"
                        role="button"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <span class="px-2">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div class="d-flex justify-content-between py-4 my-4 ">
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/comodo-secure-150.png"
                  class="img-fluid"
                  alt="Responsive image"
                  width={58}
                  height={18}
                ></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/troy-150.png"
                  class="img-fluid"
                  width={58}
                  height={18}
                ></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="	https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/bkm-express-150.png"
                  class="img-fluid"
                  width={58}
                  height={18}
                ></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="	https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/visa-150.png"
                  class="img-fluid"
                  width={58}
                  height={18}
                ></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="	https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/mastercard-i-150.png"
                  class="img-fluid"
                  width={58}
                  height={18}
                ></img>
              </a>
            </li>
          </ul>
          <p>
            biletall.com, Türkiye'nin en güvenilir otobüs ve uçak bileti
            platformu
          </p>
        </div>
      </div>
   </Fragment>
  )
}

export default HomeFooter