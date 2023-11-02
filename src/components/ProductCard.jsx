const Image = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="cursor-pointer border shadow-md rounded-sm overflow-hidden">
      <img className="w-full object-cover h-56" src={image} alt="card" />
      <div className="flex gap-2 text-xs justify-between items-center px-3 py-2 bg-[#f5f6f7]">
        <div className="flex flex-col gap-1 overflow-hidden">
          <p className="font-bold truncate w-60 capitalize">{title}</p>
          <p className="w-60 truncate">{description}</p>
        </div>
        <div className="font-bold">$ {price}</div>
      </div>
    </div>
  );
};

export default Image;
