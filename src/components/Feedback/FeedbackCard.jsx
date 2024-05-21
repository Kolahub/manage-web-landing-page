function FeedbackCard({ image, name, comment }) {
  return (
    <>
      <div className="mt-14 lg:mt-16 bg-gray-100 p-8 translate-x-0">
        <img
          src={image}
          alt=""
          className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-24"
        />
        <p className="text-center  mt-8 font-semibold text-dark-blue">{name}</p>
        <p className="mt-4 text-center text-dark-grayish-blue">{comment}</p>
      </div>
    </>
  );
}

export default FeedbackCard;
