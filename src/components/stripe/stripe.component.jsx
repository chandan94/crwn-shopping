import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {


    const onToken = token => {
        console.log(token);
        alert("Payment Successful!");
    }

    const stripePublicKey = 'pk_test_51J0hlQSCi4CSTjYFydSsjTVOrvXpbfc5tiEr7ixRkAb9YiOkAYfS7RyX5Pr6lfaCxTtx99S7tRyuN8iRDFKczOBu00Ydg11aAV';
    const stripePrice = price * 100;
    return (
        <div>
            <StripeCheckout
                billingAddress
                shippingAddress
                amount={stripePrice}
                description={`Your total is ${price}$`}
                panelLabel='Pay now'
                stripeKey={stripePublicKey}
                image='https://svgshare.com/i/CUz.svg'
                token={onToken}
             />
        </div>
    );
}

export default Stripe;