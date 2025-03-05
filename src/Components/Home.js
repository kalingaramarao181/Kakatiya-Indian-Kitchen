import React from "react";
import "./Home.css";

const Home = () => {

  const menuData = [
    {
      title: "Chaat",
      image: "images/istockphoto-525416827-612x612.jpg",
      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Veg Korma", "Chana Masala", "Paneer Tikka Masala", "Shahi Paneer"] },
        { category: "NON-VEG", dishes: ["Egg Curry", "Chicken Curry", "Goat Curry", "Butter Chicken", "Lamb Curry"] },
      ],
    },
    {
      title: "Appetizers",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Punugulu", "Gobi 65", "Samosa", "Chilli Paneer", "Onion Pakora"] },
        { category: "NON-VEG", dishes: ["Chicken 65", "Tadka Chicken Fry", "Goat Sukkah", "Egg Spring Rolls", "Tawa Fish"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/istockphoto-525416827-612x612.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Malai Kofta", "Mango Palak Dal", "Paneer Tikka Masala", "Aloo Gobi Masala"] },
        { category: "NON-VEG", dishes: ["Chicken Tikka Masala", "Goat Korma", "Lamb Curry", "Pepper Chicken Gravy", "Kadai Chicken"] },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Emma Odinson",
      text: "Risus donec neque egestas ultricies ullamcorper cursus aliquam nunc. Cras est sit libero.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Dian Anakin",
      text: "Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Kyle Smith",
      text: "Placerat turpis mus donec id vel fringilla elit. Tincidunt malesuada odio neque et vel.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];


  const testimonial = [
    {
      title: "Excellent Service",
      rating: 5,
      text: "Amazing experience, highly recommend!",
    },
    {
      title: "Great Quality",
      rating: 4.5,
      text: "The food quality was exceptional.",
    },
    {
      title: "Good Ambiance",
      rating: 4,
      text: "Loved the atmosphere and setup.",
    },
  ];

  return (
    <>
      
    <div id="home" className="home">
      <div className="home-content">
        <h1>Welcome to Our Restaurant!</h1>
        <p>
          Experience the finest dining with exquisite cuisine and exceptional service. 
          Our restaurant offers a variety of dishes, from fresh seafood to mouth-watering steaks.
        </p>
        <button className="btn-explore">Explore Menu</button>
      </div>
      <div className="home-image">
        <img src="images/chef-of-restaurant-walking-with-paper-bag-full-ai-generative-free-png.webp" alt="Delicious Dish" />
      </div>
    </div>


    <div className="menu-container">
      <h2 className="menu-heading">Interactive Restaurant Menu</h2>
      <div className="menu-grid">
        {menuData.map((menu, index) => (
          <div className="menu-card" key={index}>
            <h3 className="menu-title">{menu.title}</h3>
            <img src={menu.image} alt={menu.title} className="menu-image" />
            <div className="menu-content">
              {menu.items.map((section, i) => (
                <div key={i}>
                  <h4 className="menu-category">{section.category}</h4>
                  <ul>
                    {section.dishes.map((dish, j) => (
                      <li key={j}>{dish}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>


    <div id="rating" className="testimonials-section">
      <h2 className="testimonials-heading">What They Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-wrapper">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="testimonials-section">
      <h2 className="testimonials-heading">Rate Your Experience</h2>
      <div className="testimonials-grid">
        {testimonial.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3 className="testimonial-title">{testimonial.title}</h3>
            <div className="stars">
              {"★".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 && "☆"}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
