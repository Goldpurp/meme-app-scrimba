import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  padding: 0;
  align-self: center;
  height: 100vh;
`;

export const HeroForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 7px;
  font-size: 17px;
  padding: 0 10px;
  outline: none;
`;

export const InputFrame = styled.span`
  padding: 10px;
`;

export const Btn = styled.button`
  width: 665px;
  height: 50px;
  border-radius: 7px;
  border: none;
  background-color: #ac87c5;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

export const BtnFrame = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const ImageFrame = styled.div`
  width: 650px;
  object-fit: cover;
  position: relative;
`;

export const TextFrameTop = styled.h1`
  position: absolute;
  text-align: center;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  top: 0;
  font-size: 50px;
`;

export const TextFrameBottom = styled.h1`
  font-size: 50px;
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  bottom: 0;
  text-align: center;
`;
