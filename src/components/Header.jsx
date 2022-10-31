import React from "react";
import styled from "styled-components";

const Banner = styled.header`
  padding: 15px;
  background: rgba(0, 168, 255, 0.41);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.4px);
  -webkit-backdrop-filter: blur(10.4px);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    margin-left: 10px;
    font-size: 2em;
  }

  img {
    width: 60px;
    border-radius: 50%;
  }
`;

export default function Header() {
  return (
    <div>
      <Banner>
        <img
          src="https://img.freepik.com/premium-vector/ice-cream-logo-design-illustration_9845-323.jpg?w=740"
          alt="logo"
        />
        <h2>ICE LOLLY</h2>
      </Banner>
    </div>
  );
}
