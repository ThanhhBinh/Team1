import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../../state/cartSlice"; // Import action creator từ Redux slice

export default function PaymentPaypel() {
    const paypal = useRef();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const totalAmount = items
        .reduce((total, item) => {
            return total + (item.price - item.discount) * item.count;
        }, 0)
        .toFixed(2);

    useEffect(() => {
        if (window.paypal && paypal.current) {
            // Destroy previous PayPal buttons to avoid duplication
            if (paypal.current.childNodes.length > 0) {
                paypal.current.innerHTML = "";
            }

            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    description: "Cart Items Purchase",
                                    amount: {
                                        currency_code: "CAD",
                                        value: 100,
                                    },
                                },
                            ],
                        });
                    },

                    onApprove: async (data, actions) => {
                        try {
                            const order = await actions.order.capture();
                            console.log(order);

                            // Gửi yêu cầu đến server để lưu thông tin thanh toán
                            await axios.post("/api/checkout", {
                                orderId: order.id,
                                items,
                                totalAmount,
                            });

                            // Xóa sản phẩm trong giỏ hàng
                            console.log("Dispatching clearCart");
                            dispatch(clearCart());

                            // Chuyển hướng người dùng về trang chính
                            window.location.replace("http://localhost:3000");
                        } catch (error) {
                            console.error("Error processing payment:", error);
                        }
                    },

                    onError: (err) => {
                        console.error("PayPal Button Error:", err);
                    },
                })
                .render(paypal.current);
        }
    }, [totalAmount, dispatch, items]);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}
