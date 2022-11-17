import React, { Component } from "react";
// import { Link } from 'react-router-dom';

function FAQ(props){
        return(
            <div className="container">
                <div className="heading">
                    <h1>Frequently Asked Questions</h1>
                    <h2>FAQs for Deliveries</h2>
                    <br />
                    <h3>When does Hari Bhari deliver?</h3>
                    <p>Your products will be delivered upto 3 hours from the time of placing the order. At the time of checkout while placing an order online, you will be provided with option for choosing delivery from the 5 timeslots. Following are the timeslots available for selection and their respective cut off timings while placing an order with us.</p>
                    <br />
                    <table>
                        <tr>
                            <th>Sr No</th>
                            <th>Timeslots</th>
                            <th>Cut-off</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>9 AM to 11 AM </td>
                            <td>9 PM (Previous Day)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>11 AM to 1 PM </td>
                            <td>9 PM</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2 PM to 4 PM </td>
                            <td>11 AM</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5 PM to 7 PM </td>
                            <td>3 PM</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>7 PM to 9 PM </td>
                            <td>5 PM</td>
                        </tr>
                    </table>
                    <p><strong>Note:</strong> For any customized party or bulk order delivery time and slot would be based on discussion which will lead to priority delivery service.</p>

                    <h3>Is there a minimum order value for delivery?</h3>
                    <p>There is no minimum order value for delivery based on your chosen option retail or wholesaler. However we charge a nominal for shipping which may vary region wise for all orders irrespective of order value.</p>

                    <h3>What is Hari Bhari delivery process?</h3>
                    <p>Once order is placed online, after confirmation, it is pushed to the nearest vendor of your delivery address through an automated process. The order is picked and packed, checked for quality, physical condition, etc. by a dedicated team of trained staff and then sent for delivery at your door step. The order will be delivered in the chosen timeslot by you. Once the order leaves the store for delivery, a notification will be sent on your registered email address and mobile number. In case of any changes in the delivery schedule or ordered quantity, you will be notified well beforehand.</p>

                    <h3>What if I'm not home to receive my order?</h3>
                    <p>Once the order is dispatched from our end, a notification will be sent on your registered email address and mobile number. In case of non-availability at your residence, our Delivery Expert will try reaching you on the registered mobile number. The order will accordingly be rescheduled only after getting a confirmation from your end.</p>

                    <h3>Can I change my order once it has been placed?</h3>
                    <p>Yes, you can still modify your order once it has been placed. However, once the order has been dispatched from our end upon which a delivery notification will be sent on your registered email address and contact number, no further changes can be made in the order. In case you wish to remove certain products from the order, there always is an option of returning the products. In case you wish to order some additional products, you can always proceed placing a new order.</p>

                    <h3>Can I place an order online and pick up my order from your store which is nearest to me?</h3>
                    <p>Currently we do not offer this facility.</p>

                    <h3>What if I didn't like the quality of the products delivered to me?</h3>
                    <p>We would request you to check the products while accepting the products during delivery. In case you are not satisfied with the quality of the products, please return those products to our Delivery Expert. Our Delivery Expert will enter details of the same in the mobile tracking app to initiate request for return as well as refund in case of any. In case of Postpaid order, you will be required to pay the adjusted amount only for the products accepted by you. In case of Prepaid orders, request for refund will be initiated and cash will be credited into your Hari Bhari online account, which can be redeemed while placing orders the next time.</p>

                    <h3>Can I cancel my order?</h3>
                    <p>No return or cancellation is possible after accepting delivery. In case you would like to cancel the order for some reason, you can send us an e-mail on the 'Contact us' page with the following details: date of order, order number and reason for cancellation. Else you can inform our representative when he calls for the order confirmation for the delivery timing and date. We will cancel the order and process the refund.</p>

                    <h3>What if products ordered by me are out of stock?</h3>
                    <p>In a rare case, where products ordered by you are out of stock, we would be providing Substitutes for the product unavailable. This substitute can be of the same variant but from a different vendor. The decision for the substitute is taken by our Food Specialist who has a fair understanding of product catalogue. Our specialist will also suggest alternate products, incase similar products are not available, which could be delivered in place of the ordered products. In case, we are not able to offer substitutes, we will deliver the rest of the products at your convenience and process a refund for the out of stock products in case of prepaid order or modify the Invoice in case of postpaid orders. In case of alternate products selection, the cost of these will be adjusted against original payment received and the balance will be refunded back to you or any extra cost (after confirmation from you) will be collected in cash by our Delivery Expert or will be credited to your online Hari Bhari account in case of Prepaid Orders.</p>
                    <p>In case you are not satisfied with the suggested substitute you can always return the product at the time of delivery.</p>

                    <h3>Will I be compensated in case of order delay?</h3>
                    <p>No, in such event of delay, our delivery team only will keep you updated about your delivery.</p>

                    <h3>Can I order wine?</h3>
                    <p>We currently don't deliver any wine / beer through online orders. </p>

                    <h3>How do I order products which I need but available in the webstore?</h3>
                    <p>You can fill the customized order form as well as you can also call our customer care unit and place a home delivery order for your specific requirements, we will try our best to make you available the required products. Only point is that your customized order should be bulk order. </p>

                    <h3>How can I pay for my Hari Bhari orders?</h3>
                    <p>We accept a wide range of payment options for your convenience:</p>
                    <ul>
                        <li>Cash on Delivery(COD)</li>
                        <li>Razorpay Card Online/Store</li>
                        <li>Debit/Credit Card on Delivery</li>
                        <li>Credit Cards</li>
                        <li>Debit Cards</li>
                        <li>ATM Cum Debit Cards</li>
                        <li>Net Banking</li>
                    </ul>
                    <p>All electronic payment information is kept strictly confidential and with the help of our payment gateway partners your transactions are conducted over secure SSL encryption technology.</p>

                    <h3>Are there any hidden charges I should know about?</h3>
                    <p>No, the price listed on the product page is all you pay. No Octroi, no additional sales tax, and no other hidden charges. Our philosophy is simple - What you see is what you pay!</p>

                    <h3>Is it safe to use my credit/ debit card on Hari Bhari?</h3>
                    <p>Yes it is absolutely safe to use your card on Hari-Bhari.com. A recent directive from all bank makes it mandatory to have an additional authentication pass code verified by VISA (VBV) or MSC (Master Secure Code) which has to be entered by online shoppers while paying online using visa or master credit card. It means extra security for customers, thus making online shopping safer.</p>

                    <h3>How do I know the payment status?</h3>
                    <p>It's easy you login to Your Account and view the Payment Status on your order in the My Orders section.</p>

                    <h3>Do I get an invoice for my order?</h3>
                    <p>You will receive an Invoice on delivery of the products. You can also login to Your Account and view the invoice on your order in the My Orders section.</p>

                    <h3>How does COD (Cash-On-Delivery) work?</h3>
                    <p>We offer COD to make your life easy. Simply place your order with us and pay for it when you receive your goods at your doorstep!</p>

                    <h3>When and how will I get my refund in case of cancellation or product return?</h3>
                    <ol>
                        <li>Post Paid Orders (Includes Cash/Card on delivery) - All refunds post delivery will be adjusted in Hari Bhari e-wallet after the product has been picked up and returned to Hari Bhari. The ewallet credit amount can be redeemed while placing any further orders.</li>
                        <li>Credit Card, Debit Card, Net Banking Orders - If the refund amount is greater than 2$, then the amount will be refunded directly into your original form of payment mode. For refund amounts less than 2$, the refund will be credited to Hari Bhari ewallet within 48 hours.</li>
                        <li>For other third party wallet Orders - If the Refund amount is greater than 2$, then the amount will be credited back to your respective wallet. For refund amounts less than 2$, the refund will be credited into Hari Bhari ewallet within 48 hours.</li>
                    </ol>
                    <p>Please note that for orders placed using Credit Card, Debit Card & Netbanking, the refund once processed from Hari Bhari may take up to 7-14 working days to reflect on your Credit Card or Bank Account. There will be no cash refund in such cases.</p>
                    <p>All refunds will be subject to deduction of Delivery Charges or Offer Values as applicable. For enquiries on refunds – please send us an e-mail at cs@hari-bhari.com our representative will get in touch with you to provide the latest status.</p>

                    <h3>What credit cards do you accept on Card on Delivery?</h3>
                    <p>We accept only Visa and Mastercard on card on delivery payment option. American Express is not valid on card on delivery payment option.</p>

                    <h3>What happens if I am not at home when my delivery arrives?</h3>
                    <p>If you are not at home when your delivery arrives, our courier will post a card through your door asking you to contact them to arrange re-delivery. Our couriers will continue to make at least 2 further attempts to deliver your order, if the courier is still unable to deliver your parcel it will be returned back to us and you will be refunded.</p>

                    <h3>What happens if my order is returned to you because it is undeliverable?</h3>
                    <p>Every once in a while, we will have a package returned to us because the couriers were unable to deliver it to you. When this happens, you will automatically be refunded in full and you will receive a refund notification email.</p>

                    <h3>Why would my package be returned to you as undeliverable?</h3>
                    <p>We can receive packages as undeliverable for the following reasons:</p>
                    <ul>
                        <li>We received an incorrect address</li>
                        <li>Failed delivery attempts (i.e. no-one was home to sign for the delivery)</li>
                        <li>I have received my order but there is problem with it, what can I do?</li>
                        <li>Once order is accepted by you, in case of any further issues with the order for the below mentioned reasons, please send us an e-mail at cs@hari-bhari.com within 3 days of receiving the order and our representative will get in touch and guide you with further procedure accordingly.</li>
                        <li>Damaged/Expired product received.</li>
                        <li>Pricing Issue.</li>
                        <li>Other product related issues.</li>
                        <li>For quality control reasons we do not accept returns for any other cases except above. Returns cannot be processed if the product has been opened or tampered with. Thus we request you to maintain all original packaging in order to receive the refund.</li>
                    </ul>
                </div>
            </div>
        );
}

export default FAQ;