import { useContext } from "react";
import { context } from "../../App";
const Produc = () => {
  let { product } = useContext(context);
  return (
    <div className="flex flex-row gap-6">
      {product.map((product) => {
        

        return (
          <div key={product.id} className="w-[100px] flex flex-col items-center gap-5">
            <p className="font-semibold text-[#003464] border-b-[1px] border-solid border-[#003464] py-2 ">
              {product.days}
            </p>
            <img className="w-16 h-28" src={product.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Produc;
