export interface CalculatorCardProps {
  item: {
    name: string;
    icon: string;
    info: string;
    href: string;
  };
}

export interface ThemeState {
  theme: string;
  setTheme: (value: string) => void;
}

export interface HeaderProps{
  title: string,
  description: string
}

export interface Option {
  name: string;
  path: string;
}

export interface OptionsProps {
  options: Option[];
  title: string;
}

export interface ConstantType {
  pi: number; 
  gravity: number;
  speedOfLight: number; 
  euler: number; 
  plancksConstant: number; 
  gravitationalConstant: number; 
  avogadro: number;
  boltzmann: number;
}

export interface Units {
  kg: number;
  g: number;
  lb: number;
  oz: number; 
  mg: number;
  [key: string]: number;
}

