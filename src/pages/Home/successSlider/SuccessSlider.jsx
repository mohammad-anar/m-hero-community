import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "./style.css";

const SuccessSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
        autoplay={{
          delay: 1000, // Set the delay between slides in milliseconds (7 seconds)
          disableOnInteraction: true, // Allow manual navigation to interrupt autoplay
        }}
        speed={52000} // Set the speed of the transition in milliseconds (7 seconds)
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ="
                alt="Slide 1"
              />
              <div className="-mt-14 h-full absolute top-14 bg-opacity-80 flex items-end p-2 bg-gradient-to-t from-black to-transparent  w-full">
                <img
                  className="w-[100px]  mx-auto"
                  src="https://d3lhjpscbhcyrv.cloudfront.net/heros-in-top-company/iBOS/ibos-logo-fb.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Add more SwiperSlide components for additional slides */}
      </Swiper>
    </>
  );
};

export default SuccessSlider;
