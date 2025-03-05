import React, { useState } from "react";

import "./Home.css";

const Home = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const menuData = [
    {
      title: "Chaat",
      image: "images/istockphoto-525416827-612x612.jpg",
      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Veg Korma", "Chana Masala", "Aloo Gobi Masala", "Bhendi Masala",
        "Gutti Vankaya", "Dal Makhani", "Palak Paneer", "Paneer Tikka Masala", "Shahi Paneer",
        "Malai Kofta", "Kadai Paneer", "Mutter Paneer", "Veg Chettinadu", "Mirchi ka Salan",
        "Rooti Pachadi", "Mango Palak Dal", "Dondakaya Fry", "Sambar", "Bhendi Fry",
        "Dosakai Pachadi", "Chinta Chiguru Pappu"] },
        { category: "NON-VEG", dishes: ["Egg Curry", "Andhra Chicken Curry", "Chicken Curry", "Kadai Chicken", "Chicken Saag",
        "Chicken Chettinadu", "Chicken Tikka Masala", "Butter Chicken", "Pepper Chicken Gravy",
        "Goat Curry", "Goat Chettinadu", "Goat Korma", "Lamb Curry", "Lamb Tikka Masala",
        "Lamb Chettinadu", "Lamb Rohan Josh"] },
      ],
    },
    {
      title: "Appetizers",
      image: "images/Appetizers.jpg",

      items: [
        { category: "VEG", dishes: ["Punugulu", "Mysore Bonda", "Gobi Pepper Fry", "Gobi 65", "Gobi Manchurian",
        "Baby corn Manchurian", "Veg Manchurian", "Chilli Paneer", "Cut Mirchi", "Mix veg Pakora",
        "Onion Pakora", "Mirchi Bajji", "Samosa", "Onion Samosa", "Veg Spring Rolls", "Soy chaps"] },
        { category: "NON-VEG", dishes: ["Chicken 65", "Chilli Chicken", "Chicken Manchurian", "Tadka Chicken Fry", "Chicken 555",
        "Chicken Lollipop", "Kakatiya Chicken Fry", "Ginger Chicken", "Goat Sukkah", "Lamb Pepper Fry",
        "Tawa Fish", "Egg Spring Rolls", "Karampodi Chicken"] },
      ],
    },
    {
      title: "Entree",
      image: "images/Entree.jpg",

      items: [
        { category: "VEG", dishes: ["Dal Tadka", "Veg Korma", "Chana Masala", "Aloo Gobi Masala", "Bhendi Masala",
        "Gutti Vankaya", "Dal Makhani", "Plak Paneer", "Paneer Tikka Masala", "Shahi Paneer",
        "Malai Kofta", "Kadai Paneer", "Mutter Paneer", "Veg Chettinadu", "Mirchi ka Salan",
        "Rooti Pachadi", "Mango Palak Dal", "Dondakaya Fry", "Sambar", "Bhendi Fry",
        "Gonguta Pachadi", "Dosakai Pachadi", "Chinta Chiguru Pappu"] },
        { category: "NON-VEG", dishes: ["Egg Curry", "Andhra Chicken Curry", "Chicken Curry", "Kadai Chicken", "Chicken Saag",
        "Chicken Chettinadu", "Chicken Tikka Masala", "Butter Chicken", "Pepper Chicken Gravy",
        "Goat Curry", "Goat Chettinadu", "Goat Korma", "Lamb Curry", "Lamb Tikka Masala",
        "Lamb Chettinadu", "Lamb Rohan Josh"] },
      ],
    },
    {
      title: "Tandoori Grill",
      image: "images/Tandoori-grill.jpg",

      items: [
        { category: "VEG", dishes: ["Paneer Tikka"] },
        { category: "NON-VEG", dishes: ["Tandoori Mix Grill", "Lamb Chops", "Murgh Malai Chicken", "Chicken Tikka", "Chicken Seek Kabab"] },
      ],
    },
    {
      title: "Italian",
      image: "images/Italian.jpg",

      items: [
        { category: "VEG", dishes: ["Veg Alfredo Pasta"] },
        { category: "NON-VEG", dishes: ["Chicken Alfredo Pasta", "Shrimp Alfredo Pasta"] },
      ],
    },
    {
      title: "Indo Chinese",
      image: "images/Indo-chinese.jpg",

      items: [
        { category: "VEG", dishes: ["Veg Fried Rice", "Veg Schezwan Fried Rice", "Paneer Fried Rice", "Veg Hakka Noodles", "Veg Schezwan Noodles"] },
        { category: "NON-VEG", dishes: ["Egg Fried Rice", "Chicken Fried Rice", "Shrimp Fried Rice", "Egg Hakka Noodles", "Egg Schezwan Noodles",
        "Chicken Hakka Noodles", "Chicken Schezwan Noodles", "Shrimp Hakka Noodles", "Shrimp Schezwan Noodles"] },
      ],
    },
    {
      title: "Biryani",
      image: "images/Biryani.jpg",

      items: [
        { category: "VEG", dishes: ["Veg-Biryani", "Paneer Biryani", "Veg-Kheema Biryani"] },
        { category: "NON-VEG", dishes: ["Egg Biryani", "Chicken Dum Biryani", "Vijayawada Chicken Biryani", "Goat Biryani", "Shrimp Biryani"] },
      ],
    },
    {
      title: "South Indian",
      image: "images/South-indian.jpg",

      items: [
        { category: "VEG", dishes: ["Idly", "Plain Dosa", "Masala Dosa", "Mysore Masala Dosa", "Pongal", "Medhu Wada",
        "Chole Bathura", "Onion Rava Masala Dosa", "Onion and Chilli Uthappam", "Onion Dosa",
        "Cheese Dosa"] },
        { category: "NON-VEG", dishes: [] },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Aarav Mehta",
      text: "Risus donec neque egestas ultricies ullamcorper cursus aliquam nunc. Cras est sit libero.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Priya Sharma",
      text: "Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "Vikram Iyer",
      text: "Placerat turpis mus donec id vel fringilla elit. Tincidunt malesuada odio neque et vel.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
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
                    {(expandedCategories[`${menu.title}-${section.category}`]
                      ? section.dishes
                      : section.dishes.slice(0, 5)
                    ).map((dish, j) => (
                      <li key={j}>{dish}</li>
                    ))}
                  </ul>
                  {section.dishes.length > 5 && (
                    <button
                      className="btn-show-more"
                      onClick={() => toggleExpand(`${menu.title}-${section.category}`)}
                    >
                      {expandedCategories[`${menu.title}-${section.category}`] ? "Show Less" : "Show More"}
                    </button>
                  )}
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
