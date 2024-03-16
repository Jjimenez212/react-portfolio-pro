import faqs from './data';
import './faqs.css';
import FAQ from './FAQ';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const FAQs = () => {
  useEffect(()=> {
    AOS.init({duration: 2000})
  },[])


  return (
    <section id='faqs'>
    <h2>Frequently Asked Questions</h2>
    <p>
    Here are some questions I usually get. Click to toggle the answer, and if you sitll
    have some more questions, shoot me a message from the contact section!
    </p>
    <div className='container faqs__container' data-aos="flip-up">
    {
      faqs.map(faq => (
        <FAQ key={faq.id} faq={faq} />
      ))
    }
    </div>
    </section>
    )
}

export default FAQs