const SectionCard = ({
  productName,
  productDescription,
  productImgSrc,
  price,
}) => {
  return (
    <div className="text-center">
      <div className="pt-6 py-12 p-3 mx-3 border-2 border-gray my-4 space-y-4 rounded-md bg-slate-200">
        <h2 className="uppercase text-lg font-black"> {productName}</h2>
        <div>
          <p className="text-base italic my-auto">{productDescription}</p>
        
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
