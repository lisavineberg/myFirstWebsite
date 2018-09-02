import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import bertha from '../images/bertha.jpg';
import calvinHobbes from '../images/calvinHobbes.jpg';
import owl from '../images/owl.jpg';
import sunflower from '../images/sunflower.jpg';
import zodiac from '../images/zodiac.jpg';
import { Tooltip } from 'reactstrap';

var items = [
    { src: bertha, altText: 'bertha', desc: 'bertha' },
    { src: calvinHobbes, altText: 'calvin and hobbes', desc: 'c&h' },
    { src: owl, altText: 'owl', desc: 'blanket1' },
    { src: sunflower, altText: 'sunflower', desc: 'sunflower' },
    { src: zodiac, altText: 'zodiac', desc: 'blanket2' }
]


class MyCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = { activeIndex: 0, tooltipOpen: false }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex =
            (this.state.activeIndex === items.length - 1) ?
                0 :
                this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex })
    }

    previous() {
        if (this.animating) return;
        const nextIndex =
            (this.state.activeIndex === 0) ?
                items.length - 1 :
                this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex })
    }

    toggle(){
        this.setState({ tooltipOpen: !this.state.tooltipOpen})
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                
                <CarouselItem
                    // className='carouselItem'
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    >

                    <img className='carouselImg' src={item.src} alt={item.altText} id='tooltipHover' />
                    <Tooltip placement='right' isOpen={this.state.tooltipOpen} toggle={this.toggle} target='tooltipHover'>{item.desc}</Tooltip>
                </CarouselItem>
                
                
            );
        });

        return (
            <Carousel
                className='myCarousel'
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                pause='hover'>
                <CarouselIndicators className='myCarousel' items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                <CarouselControl direction='next' directionText='next' onClickHandler={this.next} />
            </Carousel>
        )

    }
}
export default MyCarousel