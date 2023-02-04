'use client';
import ReviewModel from '#/model/review/review.model';
import Link from 'next/link';
import { Avatar, Rating } from 'flowbite-react';
import BirthModel from '#/model/user/birth.model';
const _ = require('lodash');

export default function Reviews({
  reviews,
  username,
}: {
  reviews: ReviewModel[];
  username?: string;
}) {
  const reviewCount = reviews.length;
  let reviewRating = 0;
  reviews.map((review) => {
    reviewRating = review.stars;
  });
  const lastReview = _.last(reviews);

  return (
    <section className="my-5 w-full px-4 text-justify md:flex md:flex-wrap">
      <div className="mb-2 flex w-full items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-wide">Recenzii</h3>
        {username && reviews.length > 1 ? (
          <Link href={'/recenzii/' + username} target="_blank">
            <span className="text-teal-500 hover:text-teal-700">
              Vezi toate recenziile
            </span>
          </Link>
        ) : null}
      </div>
      <div className="flex w-full flex-col justify-center gap-4 text-gray-400">
        <Rating>
          <Rating.Star filled={reviewRating >= 1} />
          <Rating.Star filled={reviewRating >= 2} />
          <Rating.Star filled={reviewRating >= 3} />
          <Rating.Star filled={reviewRating >= 4} />
          <Rating.Star filled={reviewRating >= 5} />
          <p className="ml-2 text-sm font-medium">
            {reviewRating} din 5. Total {reviewCount} recenzii.
          </p>
        </Rating>
        {username ? (
          <ReviewItem
            clientId={lastReview.clientId}
            clientPhoto={lastReview.clientPhoto}
            clientFirstName={lastReview.clientFirstName}
            clientLastName={lastReview.clientLastName}
            date={lastReview.date}
            description={lastReview.description}
          />
        ) : (
          reviews.map((review, key) => (
            <ReviewItem
              clientId={review.clientId}
              clientPhoto={review.clientPhoto}
              clientFirstName={review.clientFirstName}
              clientLastName={review.clientLastName}
              date={review.date}
              description={review.description}
              key={key}
            />
          ))
        )}
      </div>
    </section>
  );
}

export function ReviewItem({
  clientId,
  clientPhoto,
  clientFirstName,
  clientLastName,
  date,
  description,
}: {
  clientId: string;
  clientPhoto: string;
  clientFirstName: string;
  clientLastName: string;
  date: BirthModel;
  description: string;
}) {
  return (
    <div className="max-w-5xl rounded-full rounded-xl bg-gray-800 p-4">
      <div className="mb-3 flex items-center">
        <Avatar
          bordered
          img={clientPhoto}
          rounded
          color="teal"
          className="mr-3"
        />
        <div>
          <h3 className="text-l font-semibold text-white">
            {clientFirstName + ' ' + clientLastName}
          </h3>
          <h6 className="text-xs">
            {' '}
            Din data {date.date + '/' + date.month + '/' + date.year}
          </h6>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
