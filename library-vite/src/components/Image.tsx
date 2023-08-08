import bgImg from '../assets/react.svg';

export interface IImage {
  // src: string;
  alt?: string;
}

export const Image = ({ alt }: IImage) => {
  return <img src={bgImg} alt={alt} />;
  // return <img src={src} alt={alt} />;
};
