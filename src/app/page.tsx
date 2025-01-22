"use client";
import Navbar from "./Navbar";
import Main from "./Main";
import Service from "./Services/Service";
import Testimonial from "./Testimonial/Testimonial";
import ContactUs from "./ContactUs/ContactUs";
import Head from "next/head"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Dualine</title>
        <link rel="icon" href="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" />
      </Head>
      
      <Navbar />
      
      {/* About Us Section */}
      <section id="about-us">
        <Main />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Service />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonial />
      </section>
      
      {/* Contact Us Section */}
      <section id="contact-us">
        <ContactUs />
      </section>
    </>
  );
}
