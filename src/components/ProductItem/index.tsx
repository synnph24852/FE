import { Link } from "react-router-dom";

const ProductItem = () => {
    return (
        <div className="">
            <div className="relative">
                <Link to="/products/1" className="flex rounded-md overflow-hidden hover:scale-100-img">
                    <img
                        className="rounded-md text-center w-full aspect-[9/11] object-cover transition-all"
                        src="https://dosi-in.com/file/detailed/150/dosiin-adidas-giay-originals-nam-adidas-zxk-boost-h-150763150763.jpg?w=320&h=320&fit=fill&fm=webp"
                        alt=""
                    />
                </Link>

                <span className="absolute right-0 top-0">
                    <div className="border-solid rounded-[60%] text-white p-1 text-xs bg-red-500">-15%</div>
                </span>
            </div>
            <Link to="/products/1">
                <h3 className="mt-1 font-normal text-[#101010] text-sm md:text-base line-clamp-2 h-12 overflow-hidden hover:text-purple-800">
                    Giày Jordan Cổ Cao, Giày Thể Thao Nam Nữ Sneaker Thời Trang Hàng Đẹp Full Box Bill
                </h3>
            </Link>
            <div className="text-green-500 text-sm mt-2 mb-2">Shopp mail</div>
            <div className="flex justify-between items-center price text-[18px] font-medium text-red-500">
                200.00 vnd
                <span className="text-[12px] line-through text-slate-500 mr-1">269.000 vnd</span>
                <span className="text-[12px] bg-red-600 p-1 text-white">-15%</span>
            </div>
        </div>
    );
};

export default ProductItem;
