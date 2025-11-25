import logo from "../assets/logo.jpg";

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        About ABM Multi Traders
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="ABM Logo" 
              className="w-20 h-20 object-cover rounded"
            />
            <h2 className="text-2xl font-bold text-gray-900">
              ABM Multi Traders
            </h2>
          </div>

          <div className="text-gray-700 text-sm md:text-base leading-relaxed">
            <p><strong>Telephone:</strong> 077 249 6998 / 011 292 9655</p>
            <p><strong>Email:</strong> abmmulty.lk@gmail.com / shivantha008@gmail.com</p>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-4">
            Thank you for considering A.B.M. Multy Traders for your promotional item needs.
            We look forward to working with you and helping you achieve your business goals.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            ABM Multi Traders specializes in customized promotional products that help 
            businesses increase brand visibility and build stronger relationships with 
            their clients and employees.
          </p>

          <p>
            From budget-friendly giveaways to premium corporate gifts, we offer a wide 
            selection of items across multiple categories including apparel, drinkware, 
            bags, stationery, outdoor and sports items, executive gifts, festive items, 
            and safety products.
          </p>

          <p>
            We focus on reliability, quality and on-time delivery. Whether you need a 
            small batch of branded items or long-term supply, we’ve got you covered.
          </p>

          {/* VISION */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-center">Our Vision</h3>
            <p>
              Our vision is to become the leading provider of tailor-made promotional items, 
              known for our exceptional quality and customer service. We aim to build 
              long-lasting partnerships by understanding clients’ needs and exceeding 
              expectations.
            </p>
          </div>

          {/* MISSION */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-center">Our Mission</h3>
            <p>
              Our mission is to support clients' business growth through high-quality, 
              customizable promotional items that strengthen their brand presence. We are 
              committed to delivering value, reliability, and outstanding customer service.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default About;
