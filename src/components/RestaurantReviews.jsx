import React from 'react';

export default function RestaurantReviews({ reviews }) {
  return (
    <>
      <h3>평가</h3>
      <ul>
        {
          reviews.map(({
            id, name, score, description,
          }) => (
            <li
              key={id}
            >
              <p>{`닉네임 : ${name}`}</p>
              <p>
                {`점수 : ${'★'.repeat(score)}${'☆'.repeat(5 - score)}`}
              </p>
              <p>{`평가 : ${description}`}</p>
            </li>
          ))
        }
      </ul>
    </>
  );
}
