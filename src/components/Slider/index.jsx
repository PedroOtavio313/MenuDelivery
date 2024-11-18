import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { Cards } from '../Cards'
import { Container, Slide } from './styles'
/*import { FoodList } from '../FoodListed'*/




export function Slider(){
  const [sliderRef] = useKeenSlider({
    spacing: -10, // Defina o espaçamento entre os slides
    slidesPerView: 30, // Defina quantos slides aparecem ao mesmo tempo
    centered: false,
    loop: true,
    })

    return (
      <Container>
      <div ref={sliderRef} className="keen-slider">
        <Slide className="keen-slider__slide">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slide>

        <Slide className="keen-slider__slide">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slide>
      </div>
      
      </Container>
    )
  }