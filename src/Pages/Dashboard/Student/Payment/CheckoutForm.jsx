import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import "./CheckoutForm.css"

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log("test", card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardSuccess("")
        setCardError("")
        if (error) {
            setCardSuccess("")
            setCardError(error.message);
        } else {
            setCardError("")
            setCardSuccess("Successful Payment");
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
                {cardSuccess && <p className='text-green-600  mt-5 font-semibold'>{cardSuccess}</p>}

                <button className='btn text-lg ml-50 mt-14 bg-sky-700 text-white border-0 '
                    type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>

    );
};

export default CheckoutForm;