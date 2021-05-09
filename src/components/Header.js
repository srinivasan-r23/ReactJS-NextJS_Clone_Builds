import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // const useremail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setHandleUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setHandleUser(result.user);
        })
        .catch((error) => {
          alert(error);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setHandleUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo onClick={() => history.push("/")}>
        <Img src="/assets/images/logo.svg" alt="Disney" />
      </Logo>

      {!userName ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <A href="/home">
              <Img1 src="/assets/images/home-icon.svg" alt="Home" />
              <Span>HOME</Span>
            </A>
            <A href="/home">
              <Img1 src="/assets/images/search-icon.svg" alt="Home" />
              <Span>SEARCH</Span>
            </A>
            <A href="/home">
              <Img1 src="/assets/images/watchlist-icon.svg" alt="Home" />
              <Span>WATCHLIST</Span>
            </A>
            <A href="/home">
              <Img1 src="/assets/images/original-icon.svg" alt="Home" />
              <Span>ORIGINALS</Span>
            </A>
            <A href="/home">
              <Img1 src="/assets/images/movie-icon.svg" alt="Home" />
              <Span>MOVIES</Span>
            </A>
            <A href="/home">
              <Img1 src="/assets/images/series-icon.svg" alt="Home" />
              <Span>SERIES</Span>
            </A>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <i class="fas fa-chevron-down"></i>
            <DropDown>
              <Span1 onClick={handleAuth}>Sign Out</Span1>
            </DropDown>
          </SignOut>
        </>
      )}
      {/* <LoginButton onClick={handleAuth}>LOGIN</LoginButton> */}
    </Nav>
  );
};

export default Header;

const Span1 = styled.span``;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: -24px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.5);
  padding: 10px 10px 10px 20px;
  font-size: 14px;
  width: 100px;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition-duration: 1s;
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;
const Span = styled.span`
  color: rgb(249, 249, 249);
  font-size: 13px;
  letter-spacing: 1.42px;
  line-height: 1.08;
  padding: 2px 0px;
  white-space: nowrap;
  position: relative;
  &:before {
    background-color: rgb(249, 249, 249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
  }

  &:hover {
    &:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
const Img1 = styled.img`
  height: 20px;
  min-width: 20px;
  width: 20px;
  z-index: auto;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  /* @media (max-width: 786px) {
    display: none;
  } */
`;
const Img = styled.img`
  display: block;
  width: 100%;
  background-size: contain;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  z-index: 3;
`;
