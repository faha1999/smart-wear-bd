import React from 'react';
import aboutUs from '../assets/contact/about-us.png';
import blog4 from '../assets/contact/blog-4.jpg';
import { PageTitle } from '../Common/pageTitle/PageTitle';
import { Categories } from '../components/home/partials/Categories';
import { contactData } from '../data/contactData';

export const Contact = () => {
  return (
    <section className="contact">
      <PageTitle title="Contact us" />

      <div className="container">
        <div className="f_flex">
          <Categories />
          <div style={{ padding: '1rem' }} className="contentWidth">
            <div className="contact_img">
              <img src={aboutUs} alt="aboutUs" />
            </div>

            <div className="aboutContent">
              <h1>Everyday A Better Life</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                natus quo quasi neque distinctio similique veritatis quos
                aliquam, cupiditate facere! Laboriosam culpa dignissimos
                blanditiis vero. Distinctio consequatur doloremque at quos.
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                rem sint minima neque eveniet, animi tempore in autem maiores,
                hic inventore reprehenderit veniam voluptatem, excepturi aliquam
                explicabo! Voluptatibus qui praesentium maiores corrupti ab
                molestiae mollitia sunt quaerat ullam pariatur sed quasi, iste
                velit voluptatum beatae incidunt animi aliquam tempore
                laudantium!
              </p>

              <div style={{ paddingTop: '1rem' }} className="contact_img">
                <img src={blog4} alt="about us" />
              </div>
            </div>

            <div className="sijonalFamily">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quam
                odio. Voluptate quas quis atque eius necessitatibus quo aut
                vero, eum cupiditate accusamus quam dicta hic, facilis explicabo
                expedita modi.
              </p>

              <div className="familyDetails d_flex">
                {contactData.map((data, index) => (
                  <div className="card" key={index}>
                    {data.img}
                    <h3>{data.date}</h3>
                    <h3>{data.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="contactUs">
              <h1>Always Here for You</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quidem beatae dolorem reprehenderit dolor tempora
                veniam eius, minima provident error!
              </p>
              <h3>
                Call our customer service hotline at{' '}
                <a href="tel:+11111">11111</a>
              </h3>
              <h3>
                Email us at{' '}
                <a href="mailto:hello@sijonal.com">hello@sijonal.com</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
