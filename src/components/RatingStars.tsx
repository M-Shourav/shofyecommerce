import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
interface RatingProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingProps) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={rating} className="text-yellow-400" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={rating} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={rating} className="text-gray-600" />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};

export default RatingStars;
