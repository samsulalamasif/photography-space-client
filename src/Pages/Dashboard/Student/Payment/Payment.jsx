import React from 'react';
import useAxiosSecure from '../../../../components/Hooks/useAxiosSecure';
import useCart from '../../../../components/Hooks/useCarts';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);


const Payment = () => {
    const [axiosSecure] = useAxiosSecure()
    const [cart, refetch] = useCart()

    console.log(cart);

    return (
        <div>
            <Helmet>
                <title>Photograph Space | Payment</title>
            </Helmet>
            <SectionTitle title={"My Class Payment"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;