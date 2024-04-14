import { useState } from 'react';
import people from './Assets/data';
import './reviews.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  // x % n === 0 <= result < n | x = integer, n = data structure length
  // 1 % 4 === 1
  // 2 % 4 === 2
  // 3 % 4 === 3
  // 4 % 4 === 0

  // States
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // Check if the number is in range
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // Return the next person in the review list
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);

      // Better version:
      // const newValue = (index + 1) % people.length;
      // console.log(newValue);
      // return newValue;
    });
  };

  // Return the previous person in the review list
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);

      // Better version:
      // const newValue = (index - 1 + people.length) % people.length;
      // return newValue;
    });
  };

  // Return a random person in the review list
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));

    // Better version:
    // const newIndex = randomNumber % people.length;
    // setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Reviews;
