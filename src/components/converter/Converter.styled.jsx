import styled from "@emotion/styled";

export const Main = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: large;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  border-radius: 10px;

  background: #ffffff;
  .convertForm {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .formWrapper {
    display: flex;
    align-items: center;
    padding: 30px;
    width: auto;
    height: 100px;
    background: #eceff1;
    border-radius: 10px;
  }
  .convInput {
    border: none;
    outline: none;
    border-radius: 5px;
    height: 40px;
    padding-left: 15px;
  }
  .convSelect {
    border: none;
    outline: none;
    border-radius: 5px;
    height: 40px;
  }
`;
