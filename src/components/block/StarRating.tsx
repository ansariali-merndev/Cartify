import star from "../../assets/star.png";

export const StarRating = ({ rate }: { rate: number }) => {
  const starArr = [];

  for (let i = 1; i <= rate; i++) {
    starArr.push(
      <img key={`${i}`} src={star} alt="star" className="w-7 h-auto" />
    );
  }

  return <div className="flex">{starArr}</div>;
};
