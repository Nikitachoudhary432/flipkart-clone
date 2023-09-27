import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <Container maxWidth="lg">
        <div style={{ display: "flex" }}>
          {footerSection("About", [
            "Contact Us",
            "About Us",
            "Careers",
            "Flipkart Stories",
            "Press",
          ])}
          {footerSection("Help", [
            "Payment",
            "Shipping",
            "Cancellation & Returns",
            "FAQ",
          ])}
          {footerSection("Consumer Policy", [
            "Cancellation and Returns",
            "Terms of Use",
            "Security",
            "Privacy",
          ])}
          {footerSection("Social", [
            socialLink("https://www.facebook.com/", "Facebook"),
            socialLink("https://www.instagram.com/", "Instagram"),
            socialLink("https://www.twitter.com/", "Twitter"),
          ])}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }} className="border-t-2">
          <Typography
            variant="body2"
            color="white"
            align="center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width:"100%"
            }}
          >
            <p>Become a seller</p>
            <p> Advertise</p>
            <p>Gift cards</p>
            <p> Help Center</p>
            <Link color="inherit" href="https://www.flipkart.com/">
              {" ©2007-2023 "} Flipkart.com
            </Link>{" "}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

const Link = styled.p`
  font-size: 12px;
  margin: 20px 0px;
  color: white;
`;

const footerSection = (title, items) => (
  <div key={title} style={{ flex: 1 }}>
    <Typography variant="h6" color="gray" gutterBottom>
      {title}
    </Typography>
    {items.map((item) => (
      <Typography key={item} variant="body2" color="white">
        {item}
      </Typography>
    ))}
  </div>
);

const socialLink = (url, text) => (
  <Link key={text} href={url} color="inherit">
    {text}
  </Link>
);
