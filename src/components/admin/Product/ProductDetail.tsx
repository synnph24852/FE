import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useGetCommentQuery, useRemoveCommentMutation } from "../../../api/comment"
import { Pagination, notification } from 'antd'
import { Switch, Popconfirm, Button } from "antd"
import ImagePriview from '../../Image/ImagePriview'
import { BsFillTrash3Fill } from "react-icons/bs"
import { useGetProductByIdQuery } from "@/api/product";
const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: commentData, refetch } = useGetCommentQuery();
    const { data: product, isLoading } = useGetProductByIdQuery(String(id));
    const [removeComment] = useRemoveCommentMutation()
    const handleSoftDelete = async (id: string) => {
        try {
            await removeComment(id);
            notification.success({
                message: 'Success',
                description: 'size soft deleted successfully!',
            });
            refetch();
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'size to soft delete size',
            });
        }
    };
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <div  className="block rounded-lg p-4 shadow-sm shadow-indigo-100 ">
              <div className="flex">  <ImagePriview width={40} listImage={product?.product.image}/></div>
                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Giá</dt>

                            <dd className="text-sm text-gray-500">{product?.product.price}.vnđ</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Tên SP</dt>

                            <dd className="font-medium"> {product?.product.name}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Màu </p>

                                <select name="color" id="color">
                                                {product?.product.colorSizes.map((colorSize) =>
                                                    <option key={colorSize._id} value={colorSize.color}>{colorSize.color}</option>
                                                )}
                                            </select>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Size</p>

                                <select name="size" id="size">
                                            {product?.product.colorSizes.map((colorSize) =>
                                                colorSize.sizes.map((sizeObj) =>
                                                    <option key={sizeObj._id} value={sizeObj.size}>{sizeObj.size}</option>
                                                )
                                            )}
                                        </select>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">danh mục</p>

                                <p className="font-medium">{product?.product.categoryId}</p>
                            </div>

                        </div>

                    </div>
                    <div className="mt-10">
                        <p>   {product?.product.description}</p>
                    </div>
                </div>
            </div>


            {commentData?.length ? (
                commentData.map((comment, index) => (
                    (comment.productId === id) && (
                        <div key={index} className="user-image mt-5">
                        <div className="comment-container flex">
                            <div className="comment-text-user relative p-3 rounded-lg min-h-[70px] mt-2 ml-8 flex-grow">
                                <span className="font-semibold text-base pb-5">{comment.fullname}</span>
                                <p className="text-sm text-gray-800">{comment.content}</p>
                            </div>
                            <div className="trash-icon-container ml-auto">
                                <Popconfirm
                                    placement="topRight"
                                    title={`Xóa bình luận "${comment.content}"?`}
                                    onConfirm={() => handleSoftDelete(comment._id as string)}
                                    okText="Yes"
                                    cancelText="No"
                                    okButtonProps={{ style: { background: "red" } }}
                                >
                                    <Button>
                                        <BsFillTrash3Fill />
                                    </Button>
                                </Popconfirm>
                            </div>
                        </div>
                    </div>
                    
                    )
                ))
            ) : (
                <div>
                    <td className="text-sm text-gray-800" colSpan={2}>Chưa có bình luận nào được thêm</td>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;