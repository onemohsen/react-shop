export default function Price({ price, oldPrice = null }) {
  const convertMoneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      roundingIncrement: 5,
    }).format(number);
  };

  return (
    <div className=" flex space-x-2 mt-2">
      <p className="font-bold text-red-500">
        <span>{convertMoneyFormat(price)}</span>
      </p>
      {oldPrice && (
        <p className="line-through text-gray-500 font-bold">
          <span>{convertMoneyFormat(oldPrice)}</span>
        </p>
      )}
    </div>
  );
}
