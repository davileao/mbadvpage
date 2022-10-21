import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import trabalho from "../../../assets/images/trabalho.png";
import civil from "../../../assets/images/civil.png";
import previdenciario from "../../../assets/images/previdenciario.png";
import consumidor from "../../../assets/images/consumidor.png";
import styles from "./carousel.module.scss";


import { Pagination } from "swiper";

export default function Carousel () {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><img className={styles.carouselImg} alt={'livros e martelo de juiz'} src={civil}/></SwiperSlide>
                <SwiperSlide><img className={styles.carouselImg} alt={'livros e martelo de juiz'} src={trabalho}/></SwiperSlide>
                <SwiperSlide><img className={styles.carouselImg} alt={'livros e martelo de juiz'} src={consumidor}/></SwiperSlide>
                <SwiperSlide><img className={styles.carouselImg} alt={'livros e martelo de juiz'} src={previdenciario}/></SwiperSlide>

            </Swiper>
        </>
    );
}







// import styles from './carousel.module.scss';
//
// import Swiper from 'swiper';
// import 'swiper/css';
// import { Pagination } from 'swiper';
//
// const Carousel = () => {
//
//     const swiper = new Swiper('.swiper-container', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,
//         slidesPerView: 1,
//         spaceBetween: 30,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         breakpoints: {
//             640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//             },
//             768: {
//                 slidesPerView: 2,
//
//             },
//             1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 40,
//             },
//             }
//     });
//     return (
//         <div className={styles.carousel}>
//             <div className="swiper-container">
//                 <div className="swiper-wrapper">
//                     <div className="swiper-slide">
//                         <div className={styles.slide}>
//                             <img src={'assets/img/advogado.png'} alt="advogado" />
//                             <h1>Advogado</h1>
//                             <p>Advogado, professor e pesquisador</p>
//                         </div>
//                     </div>
//                     <div className="swiper-slide">
//                         <div className={styles.slide}>
//                             <img src={'assets/img/advogado.png'} alt="advogado" />
//                             <h1>Advogado</h1>
//                             <p>Advogado, professor e pesquisador</p>
//                         </div>
//                     </div>
//                     <div className="swiper-slide">
//                         <div className={styles.slide}>
//                             <img src={'assets/img/advogado.png'} alt="advogado" />
//                             <h1>Advogado</h1>
//                             <p>Advogado, professor e pesquisador</p>
//                         </div>
//                     </div>
//
//                 </div>
//                 <div className="swiper-pagination"></div>
//             </div>
//         </div>
//     );
// }
//
// export default Carousel;