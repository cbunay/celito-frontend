

export enum InputSize {
  small = '33%',
  medium = '50%',
  large = '66%',
  extralarge = '100%',
}

export interface Input {
  id: string,
  label: string,
  name: string,
  size: InputSize
}