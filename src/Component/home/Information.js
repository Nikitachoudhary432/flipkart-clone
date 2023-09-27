import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const Title = styled(Typography)`
  color: #878787;
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
  font-weight: 200;
`;

const Information = () => {
  return (
    <div className="mt-11">
      <Title>Flipkart: The One-stop Shopping Destination</Title>
      <Text>
        E-commerce is revolutionizing the way we all shop in India. Why do you
        want to hop from one store to another in search of the latest phone when
        you can find it on the Internet in a single click? Not only mobiles.
        Flipkart houses everything you can possibly imagine, from trending
        electronics like laptops, tablets, smartphones, and mobile accessories
        to in-vogue fashion staples like shoes, clothing and lifestyle
        accessories; from modern furniture like sofa sets, dining tables, and
        wardrobes to appliances that make your life easy like washing machines,
        TVs, ACs, mixer grinder juicers and other time-saving kitchen and small
        appliances; from home furnishings like cushion covers, mattresses and
        bedsheets to toys and musical instruments, we got them all covered. You
        name it, and you can stay assured about finding them all here. For those
        of you with erratic working hours, Flipkart is your best bet. Shop in
        your PJs, at night or in the wee hours of the morning. This e-commerce
        never shuts down. <br />
        What's more, with our year-round shopping festivals and events, our
        prices are irresistible. We're sure you'll find yourself picking up more
        than what you had in mind. If you are wondering why you should shop from
        Flipkart when there are multiple options available to you, well, the
        below will answer your question.
      </Text>

      <Title>Flipkart Plus</Title>
      <Text>
        A world of limitless possibilities awaits you - Flipkart Plus was
        kickstarted as a loyalty reward programme for all its regular customers
        at zero subscription fee. All you need is 500 supercoins to be a part of
        this service. For every 100 rupees spent on Flipkart order, Plus members
        earns 4 supercoins &amp; non-plus members earn 2 supercoins. Free
        delivery, early access during sales and shopping festivals, exchange
        offers and priority customer service are the top benefits to a Flipkart
        Plus member. In short, earn more when you shop more! <br />
        What's more, you can even use the Flipkart supercoins for a number of
        exciting services, like:
        <br />
        An annual Zomato Gold membership
        <br />
        An annual Hotstar Premium membership
        <br />6 months Gaana plus subscription
        <br />
        Rupees 550 instant discount on flights on ixigo
        <br />
        Check out https://www.flipkart.com/plus/all-offers for the entire list.
        Terms and conditions apply.
        <br />
      </Text>

      <Title>No Cost EMI</Title>
      <Text>
        In an attempt to make high-end products accessible to all, our No Cost
        EMI plan enables you to shop with us under EMI, without shelling out any
        processing fee. Applicable on select mobiles, laptops, large and small
        appliances, furniture, electronics and watches, you can now shop without
        burning a hole in your pocket. If you've been eyeing a product for a
        long time, chances are it may be up for a no cost EMI. Take a look ASAP!
        Terms and conditions apply.
        <br />
      </Text>

      <Title>EMI on Debit Cards</Title>
      <Text>
        Did you know debit card holders account for 79.38 crore in the country,
        while there are only 3.14 crore credit card holders? After enabling EMI
        on Credit Cards, in another attempt to make online shopping accessible
        to everyone, Flipkart introduces EMI on Debit Cards, empowering you to
        shop confidently with us without having to worry about pauses in monthly
        cash flow. At present, we have partnered with Axis Bank, HDFC Bank,
        State Bank of India and ICICI Bank for this facility. More power to all
        our shoppers! Terms and conditions apply. <br />
      </Text>

      <Title>Mobile Exchange Offers</Title>
      <Text>
        Get an instant discount on the phone that you have been eyeing on.
        Exchange your old mobile for a new one after the Flipkart experts
        calculate the value of your old phone, provided it is in a working
        condition without damage to the screen. If a phone is applicable for an
        exchange offer, you will see the 'Buy with Exchange' option on the
        product description of the phone. So, be smart, always opt for an
        exchange wherever possible. Terms and conditions apply. <br />
      </Text>

      <Title>What Can You Buy From Flipkart?</Title>
      <Title>Mobile Phones</Title>
      <Text>
        From budget phones to state-of-the-art smartphones, we have a mobile for
        everybody out there. Whether you're looking for larger, fuller screens,
        power-packed batteries, blazing-fast processors, beautification apps,
        high-tech selfie cameras or just large internal space, we take care of
        all the essentials. Shop from top brands in the country like Samsung,
        Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest
        assured, you're buying from only the most reliable names in the market.
        What's more, with Flipkart's Complete Mobile Protection Plan, you will
        never again find the need to run around service centres. This plan
        entails you to a number of post-purchase solutions, starting at as low
        as Rupees 99 only! Broken screens, liquid damage to phone, hardware and
        software glitches, and replacements -{" "}
        <b>the Flipkart Complete Mobile Protection</b> covers a comprehensive
        range of post-purchase problems, with door-to-door services. <br />
      </Text>
    </div>
  );
};

export default Information;
