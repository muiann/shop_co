import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "@/app/data/data";
import Link from "next/link";


async function getReviewsData() {
  //const response = await fetch(
  //  "https://api.slingacademy.com/reviews"
  //);
  //const data = await response.json();
  //return data ?? [];
  return reviewsData;
}

export default async function ReviewsContent() {
  const reviews = await getReviewsData();
  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">(451)</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviews.map((review) => (
          <ReviewCard key={review.id} data={review} isDate />
        ))}
      </div>
      <div className="w-full px-4 sm:px-0 text-center">
        <Link
          href="#"
          className="inline-block w-[230px] px-11 py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
        >
          Load More Reviews
        </Link>
      </div>
    </section>
  );
};
