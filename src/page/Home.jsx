

import Navbar from "../components/navbar/Navbar"

import Testimonial from "../components/testimonials/Testimonial"
import FormWrapper from "../components/form/FormWrapper"

const Home = () => {
  return (
    <div className="">
    <div className="body-setThree ">
      <Navbar />
      <FormWrapper />
    </div>
    <Testimonial />
  </div>
  )
}

export default Home