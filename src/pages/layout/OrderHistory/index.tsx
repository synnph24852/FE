import { useGetAllOrdersQuery } from "@/api/order";
import React from "react";

const OrderHistory = () => {
    // Laays thoong tin khi ddanwg nhap
    const userId = "6533936415fe0386e84bf4b9";
    const { data, isFetching } = useGetAllOrdersQuery({ userId });
    return (
        <div className="mt-6 space-y-4">
            {isFetching && <p>Loading...</p>}
            {data?.data.map((order) => (
                <div key={order._id} className="grid grid-cols-[2fr_1fr_1fr]">
                    <div className="">
                        {order?.products?.map((product: any) => (
                            <div>{product.product.name}</div>
                        ))}
                    </div>
                    <div>{order.status}</div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
