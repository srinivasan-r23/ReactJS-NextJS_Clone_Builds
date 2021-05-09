import styled from "styled-components/macro";
const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/assets/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            neque quasi nostrum vero quod, ipsa aut! Nobis, repudiandae placeat.
            Distinctio officiis perspiciatis repudiandae iusto? Reiciendis
            perferendis possimus alias officia facilis.
          </Description>
          <CTALogoTwo src="/assets/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

const CTALogoTwo = styled.img`
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  max-width: 600px;
`;

const Description = styled.h2`
  color: hsla(0, 0%, 95.3, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition: opacity 0.2s ease-out;
  width: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url("assets/images/login-background.jpg");
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;
