import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import "./CheckoutForm.css"
import useAxiosSecure from '../../../../components/Hooks/useAxiosSecure';
import useAuth from '../../../../components/Hooks/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../../../components/Hooks/useCarts';

const CheckoutForm = ({ data }) => {
    const { price, image, className, instructorName, _id } = data
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [cart] = useCart()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState(false)


    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })

    }, [])





    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log(card);

        const { error, } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError("")
        if (error) {
            setCardError(error.message);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const transactionID = paymentIntent.id
            const payment = {
                email: user?.email, name: user?.displayName, image, className,
                price, instructorName, transactionID, date: new Date(),
                cartId: _id
            }


            axiosSecure.post("/payments", payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire(
                            'Payment!',
                            'Your select class payment has been Successfully.',
                            'success'
                        )
                    }
                })



        }

    }



    return (

        <div className='p-16'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {cardError && <p className='text-red-600  mt-5 font-semibold'>{cardError}</p>}
                {transactionId && <p className='text-green-600  mt-5 font-semibold'>
                    Transaction complete with transactionId: {transactionId}</p>}

                <button className='btn text-lg ml-50 mt-14 bg-sky-700 text-white border-0 '
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </div>

    );
};

export default CheckoutForm;