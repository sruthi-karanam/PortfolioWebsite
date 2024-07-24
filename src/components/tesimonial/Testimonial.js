import React from 'react';
import { motion } from 'framer-motion';
import { testimonialOne, testimonialTwo, quote } from '../../assets/index';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
          <p className="text-sm text-designColor tracking-[4px]">What Others Say</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="flex flex-col items-center text-center"
        >
          <img src={testimonialOne} alt="Testimonial One" className="w-32 h-32 rounded-full object-cover" />
          <p className="mt-4 text-lg font-semibold">Sruthi's dedication and excellence in CSE (AI&DS) have been truly remarkable. - Principal @VIIT</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="flex flex-col items-center text-center"
        >
          <img src={testimonialTwo} alt="Testimonial Two" className="w-32 h-32 rounded-full object-cover" />
          <p className="mt-4 text-lg font-semibold">Her innovative approach and leadership in the CacheHo Hackathon were exceptional. - CacheHo Organizers</p>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={quote} alt="Quote" className="w-32" />
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Highest-Scorer in First Board Examination</h2>
        <ul className="list-disc list-inside mt-4 text-lg">
          <b>Sruthi Karanam has consistently been a top performer in her class. Her exceptional dedication was especially evident in her 10th board exams, where she emerged as the school's top student. Her outstanding achievements and commitment to excellence are truly commendable. - Principal</b>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;


