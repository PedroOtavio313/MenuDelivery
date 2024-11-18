import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { Cards } from '../Cards'

export function Slider(){
  const [sliderRef, instanceRef] = useKeenSlider({
    spacing: 0, // Defina o espaçamento entre os slides
    slidesPerView: 3, // Defina quantos slides aparecem ao mesmo tempo
    centered: false,
    loop: true,
    })

    return (
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        <div className="keen-slider__slide">
          <Cards />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </div>
    )
  }