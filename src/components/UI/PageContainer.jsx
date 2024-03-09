import React, { useState } from "react";
import styled from "styled-components";

const togglerDelay = "500ms";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;

  .sidebar {
    position: fixed;
    display: flex;
    width: 340px;
    background-color: #111000;
    opacity: 1;
    z-index: 2;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(calc(-100% + 40px))")};
    transition: transform ${togglerDelay};

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  .side-toggler-btn {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2a2a2a;
    color: #aaa;
    font-size: 35px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;

    transition: background-color 200ms, color 200ms;
    &:hover {
      background-color: #343434;
      color: #fff;
    }
  }

  .content {
    margin-left: ${({ open }) => (open ? "340px" : "40px")};
    transition: margin-left ${togglerDelay};
    flex: 1;
    padding: 0 20px;
    @media (max-width: 850px) {
      margin-left: 40px;
    }
  }
`;

function PageContainer({ sidebar, children, sideOpen, setSideOpen }) {
  return (
    <PageWrapper open={sideOpen}>
      <aside className="sidebar">
        {sidebar}
        <button className="side-toggler-btn" onClick={() => setSideOpen(!sideOpen)}>
          {sideOpen ? "<" : ">"}
        </button>
      </aside>

      <div className="content">{children}</div>
    </PageWrapper>
  );
}

export default PageContainer;
