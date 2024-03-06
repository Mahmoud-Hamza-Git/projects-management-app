import styled from "styled-components";

const leftGap = "1.5rem";
export const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: scroll; /* scroll overflow needs a fixed height to show*/
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
  padding: 3rem 0;

  .title {
    margin: 0 ${leftGap};
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    user-select: none;
  }

  .add-btn {
    margin: 0 ${leftGap};
    align-self: flex-start;
    border-radius: 10px;
    padding: 8px 15px;
    background-color: #443d3d;
    color: gray;
    &:hover {
      background-color: #524b4b;
      color: #adaaaa;
    }
  }

  .projects-list {
    list-style: none;
    color: #adaaaa;
    font-size: 16px;

    li {
      padding: 10px ${leftGap};
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #3a1a1a;
      }
    }
    li.active {
      color: #fff;
      background-color: #3a1a1a;
    }
  }
`;
