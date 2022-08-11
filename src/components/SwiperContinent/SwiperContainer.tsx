import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperItem } from './SwiperItem';

export function SwiperContainer() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SwiperItem 
          title='América do Norte'
          description='O segundo maior continente do mundo.'
          link='america-do-norte'
          imageUrl="https://images.unsplash.com/photo-1523374228107-6e44bd2b524e"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperItem 
          title='América do Sul'
          description='O maior país da América do Sul é o Brasil.'
          link='america-do-sul'
          imageUrl="https://images.unsplash.com/photo-1619546952812-520e98064a52"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperItem 
          title='Ásia'
          description='O continente mais extenso.'
          link='asia'
          imageUrl="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperItem 
          title='África'
          description='O continente africano possui o maior número de países.'
          link='africa'
          imageUrl="https://images.unsplash.com/photo-1523805009345-7448845a9e53"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperItem
          title='Europa'
          description='O continente europeu possui 50 países.'
          link='europa'
          imageUrl="https://images.unsplash.com/photo-1473951574080-01fe45ec8643"
        />
      </SwiperSlide>      

      <SwiperSlide>
        <SwiperItem 
          title='Oceania'
          description='A Oceania é o menor continente do mundo.'
          link='oceania'
          imageUrl="https://images.unsplash.com/photo-1574791326400-feb1a7a4527b"
        />
      </SwiperSlide>

    </Swiper>
  );
};