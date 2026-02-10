export const Header = () => {
  return (
    <header className="header">
      <div className="header__top__background">
        <div className="header__top">
          <div className="header__top__addres">
            <svg
              className="addres__logo"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.3481 17.8056C10.9867 18.144 10.5037 18.3332 10.0009 18.3332C9.49821 18.3332 9.01515 18.144 8.65374 17.8056C5.34418 14.6882 0.908969 11.2056 3.07189 6.14956C4.24136 3.4158 7.04862 1.6665 10.0009 1.6665C12.9532 1.6665 15.7605 3.4158 16.93 6.14956C19.0902 11.1992 14.6658 14.6989 11.3481 17.8056Z"
                stroke="#667085"
                stroke-width="1.5"
              ></path>
              <path
                d="M12.9167 9.16667C12.9167 10.7775 11.6108 12.0833 10 12.0833C8.38917 12.0833 7.08334 10.7775 7.08334 9.16667C7.08334 7.55584 8.38917 6.25 10 6.25C11.6108 6.25 12.9167 7.55584 12.9167 9.16667Z"
                stroke="#667085"
                stroke-width="1.5"
              ></path>
            </svg>
            Melbourne, Australia
          </div>
          <div className="header__top__support">
            <button className="support__button">
              <svg
                className="support__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.3333 9.63877C18.3333 14.0414 14.6018 17.611 10 17.611C9.4589 17.6117 8.91937 17.5617 8.38784 17.4619C8.00527 17.39 7.81398 17.3541 7.68044 17.3745C7.54689 17.3949 7.35765 17.4955 6.97915 17.6968C5.90845 18.2662 4.65996 18.4673 3.45926 18.244C3.91561 17.6827 4.22729 17.0092 4.36481 16.2872C4.44815 15.8455 4.24166 15.4165 3.93241 15.1024C2.52778 13.6761 1.66666 11.7541 1.66666 9.63877C1.66666 5.23615 5.39815 1.6665 10 1.6665C14.6018 1.6665 18.3333 5.23615 18.3333 9.63877Z"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.99626 10H10.0037M13.3259 10H13.3333M6.66666 10H6.67414"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Support
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
