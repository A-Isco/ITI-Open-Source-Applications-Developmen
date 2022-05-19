import { Component } from "react";

export default class SecondComponent extends Component {
  imgs = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"];
  i = 0;
  slideInterval = null;

  constructor() {
    super();
    this.state = {
      img: "./1.jpg",
    };
  }

  nextImg = () => {
    if (this.i < this.imgs.length - 1) {
      this.i++;
      this.setState({ img: this.imgs[this.i] });
      clearInterval(this.slideInterval);
    }
  };

  prevImg = () => {
    if (this.i > 0) {
      this.i--;
      this.setState({ img: this.imgs[this.i] });
      clearInterval(this.slideInterval);
    }
  };

  slide = () => {
    this.slideInterval = setInterval(this.doSlide, 1000);
  };

  doSlide = () => {
    if (this.i < this.imgs.length - 1) {
      this.i++;
      this.setState({ img: this.imgs[this.i] });
    } else {
      this.i = 0;
      this.setState({ img: this.imgs[this.i] });
    }
  };

  stopSlider = () => {
    clearInterval(this.slideInterval);
  };

  render() {
    return (
      <div className="container-sm my-4 pb-4 border bg-light rounded-3">
        <div className="row">
          <div className="col-12 my-5 text-center">
            <img src={this.state.img} alt="Slider" />
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-3">
            <input
              type="button"
              value="Slide"
              className="btn btn-success"
              onClick={this.slide}
            />
          </div>
          <div className="col-3">
            <input
              type="button"
              value="Previous"
              className="btn btn-primary"
              onClick={this.prevImg}
            />
          </div>
          <div className="col-3">
            <input
              type="button"
              value="Next"
              className="btn btn-primary"
              onClick={this.nextImg}
            />
          </div>

          <div className="col-3">
            <input
              type="button"
              value="Stop"
              className="btn btn-danger"
              onClick={this.stopSlider}
            />
          </div>
        </div>
      </div>
    );
  }
}
