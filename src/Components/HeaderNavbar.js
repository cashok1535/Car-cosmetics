import { useState, useRef, useEffect } from "react";
import logo from "../img/carcosmetics-logo.svg";

export const HeaderNavbar = () => {
  // const [wishListCount, setWishListCount] = useState(0);
  // const [orderCount, setOrderCount] = useState(0);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [logInModalPosition, setLogInModalPosition] = useState(0);
  const modalFormPositionRef = useRef(null);
  const handleOpenModal = () => {
    setIsOpenSignIn((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpenSignIn(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setLogInModalPosition(
        modalFormPositionRef.current.getBoundingClientRect().left,
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="header__navbar">
      <div className="header__navbar__top">
        <img src={logo} alt="" />
        <div className="button__categories">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2.5 14.5C2.5 13.3447 2.5 12.767 2.76005 12.3426C2.90556 12.1052 3.1052 11.9056 3.34265 11.76C3.76701 11.5 4.34467 11.5 5.5 11.5C6.65533 11.5 7.23299 11.5 7.65735 11.76C7.8948 11.9056 8.09444 12.1052 8.23995 12.3426C8.5 12.767 8.5 13.3447 8.5 14.5C8.5 15.6553 8.5 16.233 8.23995 16.6574C8.09444 16.8948 7.8948 17.0944 7.65735 17.24C7.23299 17.5 6.65533 17.5 5.5 17.5C4.34467 17.5 3.76701 17.5 3.34265 17.24C3.1052 17.0944 2.90556 16.8948 2.76005 16.6574C2.5 16.233 2.5 15.6553 2.5 14.5Z"
              stroke="#30374F"
              strokeWidth="1.5"
            ></path>
            <path
              d="M11.5 14.5C11.5 13.3447 11.5 12.767 11.76 12.3426C11.9056 12.1052 12.1052 11.9056 12.3426 11.76C12.767 11.5 13.3447 11.5 14.5 11.5C15.6553 11.5 16.233 11.5 16.6574 11.76C16.8948 11.9056 17.0944 12.1052 17.24 12.3426C17.5 12.767 17.5 13.3447 17.5 14.5C17.5 15.6553 17.5 16.233 17.24 16.6574C17.0944 16.8948 16.8948 17.0944 16.6574 17.24C16.233 17.5 15.6553 17.5 14.5 17.5C13.3447 17.5 12.767 17.5 12.3426 17.24C12.1052 17.0944 11.9056 16.8948 11.76 16.6574C11.5 16.233 11.5 15.6553 11.5 14.5Z"
              stroke="#30374F"
              strokeWidth="1.5"
            ></path>
            <path
              d="M2.5 5.5C2.5 4.34467 2.5 3.76701 2.76005 3.34265C2.90556 3.1052 3.1052 2.90556 3.34265 2.76005C3.76701 2.5 4.34467 2.5 5.5 2.5C6.65533 2.5 7.23299 2.5 7.65735 2.76005C7.8948 2.90556 8.09444 3.1052 8.23995 3.34265C8.5 3.76701 8.5 4.34467 8.5 5.5C8.5 6.65533 8.5 7.23299 8.23995 7.65735C8.09444 7.8948 7.8948 8.09444 7.65735 8.23995C7.23299 8.5 6.65533 8.5 5.5 8.5C4.34467 8.5 3.76701 8.5 3.34265 8.23995C3.1052 8.09444 2.90556 7.8948 2.76005 7.65735C2.5 7.23299 2.5 6.65533 2.5 5.5Z"
              stroke="#30374F"
              strokeWidth="1.5"
            ></path>
            <path
              d="M11.5 5.5C11.5 4.34467 11.5 3.76701 11.76 3.34265C11.9056 3.1052 12.1052 2.90556 12.3426 2.76005C12.767 2.5 13.3447 2.5 14.5 2.5C15.6553 2.5 16.233 2.5 16.6574 2.76005C16.8948 2.90556 17.0944 3.1052 17.24 3.34265C17.5 3.76701 17.5 4.34467 17.5 5.5C17.5 6.65533 17.5 7.23299 17.24 7.65735C17.0944 7.8948 16.8948 8.09444 16.6574 8.23995C16.233 8.5 15.6553 8.5 14.5 8.5C13.3447 8.5 12.767 8.5 12.3426 8.23995C12.1052 8.09444 11.9056 7.8948 11.76 7.65735C11.5 7.23299 11.5 6.65533 11.5 5.5Z"
              stroke="#30374F"
              strokeWidth="1.5"
            ></path>
          </svg>
          Categories
        </div>
        <div className="search__input__parrent">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 119.828 122.88"
            enableBackground="new 0 0 119.828 122.88"
          >
            <g>
              <path d="M48.319,0C61.662,0,73.74,5.408,82.484,14.152c8.744,8.744,14.152,20.823,14.152,34.166 c0,12.809-4.984,24.451-13.117,33.098c0.148,0.109,0.291,0.23,0.426,0.364l34.785,34.737c1.457,1.449,1.465,3.807,0.014,5.265 c-1.449,1.458-3.807,1.464-5.264,0.015L78.695,87.06c-0.221-0.22-0.408-0.46-0.563-0.715c-8.213,6.447-18.564,10.292-29.814,10.292 c-13.343,0-25.423-5.408-34.167-14.152C5.408,73.741,0,61.661,0,48.318s5.408-25.422,14.152-34.166C22.896,5.409,34.976,0,48.319,0 L48.319,0z M77.082,19.555c-7.361-7.361-17.53-11.914-28.763-11.914c-11.233,0-21.403,4.553-28.764,11.914 C12.194,26.916,7.641,37.085,7.641,48.318c0,11.233,4.553,21.403,11.914,28.764c7.36,7.361,17.53,11.914,28.764,11.914 c11.233,0,21.402-4.553,28.763-11.914c7.361-7.36,11.914-17.53,11.914-28.764C88.996,37.085,84.443,26.916,77.082,19.555 L77.082,19.555z" />
            </g>
          </svg>
          <input className="search__input" placeholder="Search" />
        </div>
        <button
          ref={modalFormPositionRef}
          onClick={handleOpenModal}
          className="header__button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.48131 12.9012C4.30234 13.6032 1.21114 15.0366 3.09388 16.8303C4.01359 17.7065 5.03791 18.3332 6.32572 18.3332H13.6743C14.9621 18.3332 15.9864 17.7065 16.9061 16.8303C18.7889 15.0366 15.6977 13.6032 14.5187 12.9012C11.754 11.255 8.24599 11.255 5.48131 12.9012Z"
              stroke="#14181F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.75 5.4165C13.75 7.48757 12.0711 9.1665 10 9.1665C7.92893 9.1665 6.25 7.48757 6.25 5.4165C6.25 3.34544 7.92893 1.6665 10 1.6665C12.0711 1.6665 13.75 3.34544 13.75 5.4165Z"
              stroke="#14181F"
              strokeWidth="1.5"
            ></path>
          </svg>
          Sign in
        </button>
        {isOpenSignIn && (
          <div
            style={{
              left: `${logInModalPosition}px`,
            }}
            className="signInModal"
          >
            <div className="signInModal__top">
              <h4 className="logInTitle">Login</h4>
              <button onClick={handleCloseModal} className="logInClose">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25"
                  height="25"
                  aria-hidden="true"
                >
                  <line
                    className="close__line"
                    x1="9"
                    y1="9"
                    x2="39"
                    y2="39"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    className="close__line"
                    x1="39"
                    y1="9"
                    x2="9"
                    y2="39"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="log__in__form"
            >
              <div className="input-group">
                <input
                  id="username"
                  className="log__in__input"
                  placeholder=" "
                />
                <label htmlFor="username" className="log__in__label">
                  Username or email <span className="form__necessarily">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  id="password"
                  className="log__in__input"
                  placeholder=" "
                />
                <label htmlFor="password" className="log__in__label">
                  Password <span className="form__necessarily">*</span>
                </label>
              </div>
              <input className="log__in__input__checkBox" type="checkbox" />
              <div>
                <button className="log__in__button" type="submit">
                  Login
                </button>
              </div>
              <a className="log__in__link" href="#123">
                Lost your password?
              </a>
            </form>
          </div>
        )}
        <button className="header__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.2188 3.32846C13.9841 1.95769 12.0337 2.51009 10.862 3.39001C10.3815 3.7508 10.1413 3.93119 10 3.93119C9.85868 3.93119 9.61847 3.7508 9.13805 3.39001C7.96635 2.51009 6.01591 1.95769 3.7812 3.32846C0.848396 5.12745 0.184772 11.0624 6.94961 16.0695C8.2381 17.0232 8.88235 17.5 10 17.5C11.1177 17.5 11.7619 17.0232 13.0504 16.0695C19.8152 11.0624 19.1516 5.12745 16.2188 3.32846Z"
              stroke="#14181F"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
          Wishlist <div className="count__books">{}</div>
        </button>
        <button className="header__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.22741 14.1829L2.22443 8.19985C2.07279 7.29524 1.99697 6.84293 2.23977 6.54647C2.48258 6.25 2.92884 6.25 3.82136 6.25L16.1786 6.25C17.0712 6.25 17.5174 6.25 17.7602 6.54647C18.003 6.84293 17.9272 7.29524 17.7756 8.19985L16.7726 14.1829C16.4401 16.1659 16.2739 17.1574 15.5953 17.7454C14.9166 18.3333 13.9384 18.3333 11.9818 18.3333H8.01818C6.06163 18.3333 5.08335 18.3333 4.4047 17.7454C3.72605 17.1574 3.55984 16.1659 3.22741 14.1829Z"
              stroke="#14181F"
              strokeWidth="1.5"
            ></path>
            <path
              d="M14.5833 6.24984C14.5833 3.71853 12.5313 1.6665 10 1.6665C7.4687 1.6665 5.41667 3.71853 5.41667 6.24984"
              stroke="#14181F"
              strokeWidth="1.5"
            ></path>
          </svg>
          My cart <div className="count__books">{}</div>
        </button>
      </div>
      <div className="header__navbar__bottom">
        <ul className="header__navbar__bottom__flex">
          <li className="header__navbar__bottom__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16333 8.33334H9.17581M9.16642 13.3333H9.17889"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.83325 10.8333L12.4999 10.8333"
                stroke="#14181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle
                cx="1.25"
                cy="1.25"
                r="1.25"
                transform="matrix(1 0 0 -1 13.3333 6.66667)"
                stroke="#14181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <path
                d="M2.31194 9.28661C1.47599 10.2202 1.458 11.6288 2.22522 12.6197C3.74768 14.5861 5.41403 16.2524 7.38035 17.7749C8.37125 18.5421 9.77984 18.5241 10.7135 17.6881C13.2483 15.4185 15.5697 13.0466 17.81 10.44C18.0315 10.1823 18.17 9.86641 18.2011 9.52803C18.3386 8.03166 18.6211 3.72057 17.4503 2.54979C16.2795 1.37901 11.9684 1.66148 10.4721 1.79898C10.1337 1.83007 9.81782 1.96861 9.56012 2.1901C6.95352 4.43039 4.58159 6.75176 2.31194 9.28661Z"
                stroke="#14181F"
                strokeWidth="1.5"
              ></path>
            </svg>
            Hot offers
          </li>
          <li className="header__navbar__bottom__button">Shop</li>
          <li className="header__navbar__bottom__button">About</li>
          <li className="header__navbar__bottom__button">FAQ</li>
          <li className="header__navbar__bottom__button">Contact</li>
        </ul>
      </div>
    </section>
  );
};
