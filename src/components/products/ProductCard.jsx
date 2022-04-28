import React from "react";
import { Tag, Price, Heart } from "../../components";

export default class ProductmCard extends React.Component {
  constructor({ item, className }) {
    super();
    this.state = {
      item: item,
      className: className,
      isHover: false,
      percent: this.getRandomNumberBetween(0.1, 0.7),
      randomBoolean: Math.random() >= 0.5,
      randomBoolean2: Math.random() >= 0.5,
    };
  }

  getRandomNumberBetween = (min, max) => Math.random() * (max - min + 1) + min;

  getOldPrice = (price, percent = 0.1) =>
    (price * this.state.percent + price).toFixed(2);

  render() {
    return (
      <div
        onMouseEnter={() => {
          this.setState((state) => ({ isHover: true }));
        }}
        onMouseLeave={() => this.setState({ isHover: false })}
        className={`${this.state.className} hover:-mt-1 `}
      >
        <div className="space-y-3">
          <div className="border border-dashed relative w-full h-80 overflow-hidden flex flex-col justify-center items-center p-5">
            <div className="">
              <img
                src={this.state.item.image}
                className="object-contain h-40"
                alt=""
              />
            </div>
            <div className=" absolute bottom-1 left-1 space-x-2">
              {this.state.randomBoolean && (
                <Tag title={`${Math.round(this.state.percent * 10)} %`} />
              )}
              {this.state.randomBoolean2 && (
                <Tag
                  title={this.state.item.category}
                  className="bg-green-600"
                />
              )}
            </div>
            {this.state.isHover && (
              <Heart className="absolute top-1 right-1 text-gray-400 hover:text-red-500 hover:cursor-pointer" />
            )}
          </div>
          <div className="">
            <div className="flex flex-col justify-between ">
              <h3 className="text-gray-500 font-bold h-12 overflow-hidden">
                {this.state.item.title}
              </h3>
              <Price
                price={this.state.item.price}
                oldPrice={this.getOldPrice(
                  this.state.item.price,
                  this.state.percent
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
