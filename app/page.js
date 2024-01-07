import Image from "next/image"
export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Article | About</title>
      </head>
      <body>
        <div id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6">
                <div className="banner-title">
                  <p className="mb-1">NITYANAND CHARAN DAS</p>
                  <h2>Learn key life lessons from the Gita: Mind control and conflict resolution</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-row nav">
              <a href="#" className="text-decoration-none text-dark"><h5 className="p-3 me-2 text-center navAfter">About</h5></a>
              <a href="#" className="text-decoration-none text-dark"><h5 className="p-3 me-3 text-center">Reviews</h5></a>
              <a href="#" className="text-decoration-none text-dark"><h5 className="p-3 me-3 text-center">Instructor</h5></a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 main1">
              <h2 className="mb-3">About the Course</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at mollitia quibusdam eaque consequatur! Saepe beatae unde suscipit nesciunt expedita incidunt totam aliquam. Deleniti quidem dolorem saepe, earum maiores, necessitatibus sit facilis obcaecati error molestias hic expedita, voluptate cupiditate voluptatibus quos officiis non repellendus impedit asperiores a? Inventore, assumenda autem?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint recusandae temporibus. Vero harum amet vitae, maxime, nam magni aut at impedit laboriosam esse beatae blanditiis corporis iure corrupti aperiam. Maxime eius cum eligendi earum culpa ratione? Fuga architecto et dolorem unde illum, rem sapiente commodi sint quae aut autem!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam quod explicabo minus. Qui quae assumenda blanditiis quas similique nesciunt, porro quos voluptate corporis facilis consequuntur eligendi accusamus eum maiores in ipsa consequatur unde esse deleniti. Vero a beatae tempora natus maxime, culpa labore facilis ex doloribus ipsum dicta tenetur.</p>
            </div>
            <div className="col-lg-5">
              <div className="herobox" style={{ borderRadius: '10px' }}>
                <div className="p-4">
                  <h2>Course fee</h2>
                  <h2 className="mb-4" style={{fontFamily:"bankster"}}><i className="bi bi-currency-rupee"></i>5,000</h2>
                  <p>Whats included:</p>
                  <div className="d-flex flex-row">
                    <i className="bi bi-fast-forward-btn me-3"></i>
                    <p>5 On demand videos</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="bi bi-fast-forward-btn me-3"></i>
                    <p>2 Livestram sessions</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="bi bi-chat-left-dots-fill me-3"></i>
                    <p>Live DSA sessions with Nityanand Charan Das</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="bi bi-chat-left-dots-fill me-3"></i>
                    <p>An active whatsapp community</p>
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-md p-3" style={{ backgroundColor: '#593ba8', color: 'white', borderRadius: '35px' }}>Register Today</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 main2">
              <h2 className="mb-3">What to expect from the course</h2>
              <div className="d-flex flex-row">
                <i className="bi bi-check2"></i>
                <p className="ps-4">Learn to manage your relationship</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check2"></i>
                <p className="ps-4">Better Communication</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check2"></i>
                <p className="ps-4">Time management</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check2"></i>
                <p className="ps-4">Forgiveness</p>
              </div>
            </div>
          </div>
          <div className="row mb-5 main-3">
            <div className="col-lg-7">
              <h2 className="mb-3">Key topics covered</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, exercitationem ex quas error, beatae repudiandae rerum quia odit sit, reprehenderit deserunt veritatis recusandae officia inventore voluptatibus id ipsam. Facere consequuntur quam rerum animi, iusto pariatur nihil esse, quidem hic voluptatibus sit magni quos voluptates id voluptate. Est labore aspernatur unde?</p>
              <div className="d-flex flex-row">
                <i className="bi bi-check-lg"></i>
                <p className="ps-4"><strong>10 written and audio sessions</strong> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check-lg"></i>
                <p className="ps-4"><strong>Intuitive exercises and homework</strong> walk you through the energies and values of numbers and number sequences so you can become your own authority.</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check-lg"></i>
                <p className="ps-4"><strong>Handy reference</strong> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose and receive spiritual guidance along your path.</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-check-lg"></i>
                <p className="ps-4"><strong>Expert techniques</strong> for manifestation offer simple ways to use numbers to co-create with the universe.</p>
              </div>
            </div>
          </div>
          <div className="row main-4">
            <h2 className="mb-3">About the instructor</h2>
            <div className="col-lg-7 d-flex flex-row">
              <Image className="rounded-circle me-3" src={'/testimonials.jpg'} alt="testimonials" height={110} width={110}></Image>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at mollitia quibusdam eaque consequatur! Saepe beatae unde suscipit nesciunt expedita incidunt totam aliquam. Deleniti quidem dolorem saepe, earum. sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-5">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem ut commodi autem molestias animi, accusamus accusantium temporibus cum architecto? Dicta dignissimos recusandae perspiciatis illo beatae. Quibusdam qui odio explicabo, error aspernatur beatae deleniti, praesentium.</p>
            </div>
          </div>
          <div className="row main-5 mb-5">
            <div className="col d-flex flex-row">
              <a href="/" className="mx-auto text-decoration-none text-dark"><i className="bi bi-facebook text-primary me-2"></i>Facebook</a>
              <a href="/" className="mx-auto text-decoration-none text-dark"><i className="bi bi-twitter-x text-dark me-2"></i>Twitter</a>
              <a href="/" className="mx-auto text-decoration-none text-dark"><i className="bi bi-youtube text-danger me-2"></i>Youtube</a>
              <a href="/" className="mx-auto text-decoration-none text-dark"><i className="bi bi-instagram me-2" id="insta"></i>Instagram</a>
            </div>
          </div>
        </div>
        <div className="row main-7">
          <div className="col">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={'/test.jpeg'} className="d-block try" width={'100%'} height={220} alt="test" />
                  <div className="carousel-caption">
                    <h5>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."</h5>
                    <div className="d-flex justify-content-center">
                      <Image className="rounded-circle me-3" src={'/footer.jpg'} alt="footer" height={50} width={50}></Image>
                      <p>Name of the reviewer<br />Designation of the reviewer</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={'/test.jpeg'} className="d-block" width={'100%'} height={220} alt="test" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."</h5>
                    <div className="d-flex justify-content-center">
                      <Image className="rounded-circle me-3" src={'/footer.jpg'} alt="footer" height={50} width={50}></Image>
                      <p>Name of the reviewer<br />Designation of the reviewer</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={'/test.jpeg'} className="d-block" width={'100%'} height={220} alt="test." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."</h5>
                    <div className="d-flex justify-content-center">
                      <Image className="rounded-circle me-3" src={'/footer.jpg'} alt="footer" height={50} width={50}></Image>
                      <p>Name of the reviewer<br />Designation of the reviewer</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}
