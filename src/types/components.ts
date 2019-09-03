export type RangeInputProps = {
  text: string;
  max: any;
  handleChange: (value: string) => void;
};

export type SelectInputProps = {
  handleChange: (value: string) => void;
};

export interface RectangleProps {
  rectangle: TRectangle;
}

export type TRectangle = {
  id: string;
  width: string;
  height: string;
  background: string;
  borderRadius: string;
};

export interface IGalleryState {
  gallery: TRectangle[];
}

export type TRectangleStyle = {
  width: string;
  height: string;
  background: string;
  borderRadius: string;
};

export interface MenuButtonProps {
  handleClick: () => void;
}
