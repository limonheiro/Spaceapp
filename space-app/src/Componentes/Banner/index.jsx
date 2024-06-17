// import ImgBanner from './public/banner.jpeg'

import styled from "styled-components"

const ImgBanner = styled.figure`
  border-radius: 20px;
  display:flex;
  align-items:center;
  min-height: 328px;
  flex-grow: 1;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;

`

const Img = styled.img`
  width: 100%;
  max-height: 328px;
  min-height: 328px;
  border-radius: 20px;
  object-fit: cover;
  transform:scaleX(-1);
`

const FigureCap = styled.figcaption`
    position: absolute;
    z-index: 2;
    color: #fff;
    font-size: 40px;
    width: 300px;
    margin: 0;
    padding: 92px 64px;
    line-height: 48px;
`

const Banner = ({ texto, bannerImage}) => {
  return (
    <>
      <ImgBanner className="bannerImage" $bannerImage={bannerImage}>
        <Img src={bannerImage}>

        </Img>
        <FigureCap>
          {texto}
          
        </FigureCap>
      </ImgBanner>
    </>
  )
}

export default Banner