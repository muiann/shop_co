import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "@/app/data/data";
import Link from "next/link";
import styles from '../../app/page.module.css';

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
    <section >
      
      <div className={styles.titlereviews}>
        <a href="">Product Details</a>
        <a href="">Rating & Reviews</a>
        <a href="">FAQs</a>
        
      </div>
<hr className={styles.hrreviews}/>
      <div >
        <div className="">
          <h3 className={styles.h3reviews}>
            All Reviews
          </h3>
          <span className="">(451)</span>
        </div>
        
      </div>
      <div className={styles.reviewscontainer}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} data={review} isDate />
        ))}
      </div>
      <div className={styles.morereviews}>
        <Link 
          href="#"
          className={styles.morereviews_text}
        >
          Load More Reviews
        </Link>
      </div>
    </section>
  );
};
