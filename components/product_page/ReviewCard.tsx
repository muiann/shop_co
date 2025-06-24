import React from "react";
import Rating from "../ui/Rating";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Review } from "@/app/types/review.types";
import styles from '../../app/page.module.css';

type ReviewCardProps = {
  blurChild?: React.ReactNode;
  isDate?: boolean;
  data: Review;
};

const ReviewCard = ({
  blurChild,
  isDate = false,
  data,
}: ReviewCardProps) => {
  return (
    <div className={styles.reviews}>
      {blurChild && blurChild}
      <div className=''>
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          size={23}
          readonly
        />
      </div>
      <div className={styles.reviewsblock}>
        <strong className="">{data.user}</strong>
        <IoIosCheckmarkCircle className="text-[#01AB31] text-xl sm:text-2xl" />
      </div>
      <p className="text-sm sm:text-base text-black/60">{data.content}</p>
      {isDate && (
        <p className="text-black/60 text-sm font-medium mt-4 sm:mt-6">
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
