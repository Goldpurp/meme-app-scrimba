import {
  Btn,
  Image,
  Input,
  BtnFrame,
  HeroForm,
  Container,
  InputFrame,
  ImageFrame,
  TextFrameTop,
  TextFrameBottom
} from "./main.styled";

import memes from "../Meme";
import { useState } from "react";


export function Main() {

  const [currentMeme, setCurrentMeme] = useState(memes[1]);
  const [memeText, setMemeText] = useState({
    topText: "",
    bottomText: ""
  })

  function handleChange(e:  React. ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target;
    setMemeText(prevMeme => ({
      ...prevMeme, 
        [name]: value
    }))
  }


  function handleClick() {
    const random = Math.floor(Math.random() * memes.length);
    setCurrentMeme(memes[random]);
  }

  return (
    <Container>
      <HeroForm>
        <div>
          <InputFrame>
            <Input type="text" 
            placeholder="top-text" 
            name="topText"
            value={memeText.topText}
            onChange={handleChange}
            />
          </InputFrame>

          <InputFrame>
            <Input type="text"
             placeholder="bottom-text" 
             name="bottomText"
             value={memeText.bottomText}
             onChange={handleChange}
             />
            
          </InputFrame>
        </div>

        <BtnFrame>
          <Btn type="button" onClick={handleClick}>
            Get a new meme image
          </Btn>
        </BtnFrame>
      </HeroForm>

      <ImageFrame>
        <Image src={currentMeme.url} alt="image" />
        <TextFrameTop>{memeText.topText}</TextFrameTop>
        <TextFrameBottom>{memeText.bottomText}</TextFrameBottom>
      </ImageFrame>
    </Container>
  );
}
