import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './style.css'

const items = [
  {
    src: '../images/slide5.png',
    altText: 'Slide 1',
    caption: 'Are you suffering from Digital Eye Strain',
    captionBody: 'Eye fatigue / tired eyes, Eye discomfort, Headaches, Dry eyes / itchy eyes / irritated eyes, Blurry vision / double vision, Neck pain / shoulder pain / back pain',
    color: 'dark'
    },
  {
    src: '../images/slide4.png',
    altText: 'Slide 4',
    caption: '',
    captionBody: ''
  },
  {
    src: '../images/slide2.png',
    altText: 'Slide 2',
    caption: '',
    captionBody: ''
  },
  {
    src: '../images/slide23.png',
    altText: 'Slide3',
    caption: 'Getting Started',
    captionBody: 'Scroll down and click on start to get Reminder every 20 minutes to excercise'
  }
];

class CarouselDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className={item.color?"text-dark":"text-white"} captionText={item.captionBody} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselDisplay;