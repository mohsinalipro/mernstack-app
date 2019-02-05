import styled from "styled-components";

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: stretch;
  align-items: center;
  border: ${props => (props.noborder ? "none" : "1px solid #ccc")};
  border-radius: 3px;
  overflow: hidden;
  font-size: 13px;
`;

export const Label = styled.label`
  flex: 0.3;
  padding: 10px 20px;
  background: #fafbfc;
  border-right: 1px solid #e1e4e8;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  display: block;
  border: none;
  margin: 1px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  background: #4c5157;
  color: #fff;
  &:hover {
    background: #24292e;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const FormTip = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : "right")};
  margin-bottom: 20px;
  font-size: 13px;
  color: ${props =>
    props.error ? "red" : props.success ? "green" : "#4c5157"};
  margin: 5px 0 10px;
  flex: 1;
`;

export default Form;
