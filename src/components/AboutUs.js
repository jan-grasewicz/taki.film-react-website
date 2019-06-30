import React from 'react'

function AboutUs() {
  return (
    <section className="aboutUs">
    {/* mini carousel */}
    <h3>mini-carousel</h3>
    <img
      // src={process.env.PUBLIC_URL + "/img/Miniatura1.jpg"}
      alt={"taki.film at work"}
    />
    <h3>Kim jesteśmy?</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
      earum! Iure provident consequatur maxime, nesciunt, molestiae
      velit repellat delectus, debitis natus voluptas laborum nisi
      numquam fugit illum sapiente ad suscipit.
    </p>
  </section>
  )
}

export default AboutUs
