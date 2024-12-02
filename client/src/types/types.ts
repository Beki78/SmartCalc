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
  pi: number; // Mathematical constant π
  gravity: number; // Earth's gravity in m/s^2
  speedOfLight: number; // Speed of light in meters per second
  euler: number; // Euler's number
  plancksConstant: number; // Planck's constant in J·s
  gravitationalConstant: number; // Gravitational constant in m^3·kg^−1·s^−2
  avogadro: number; // Avogadro's number in particles/mol
  boltzmann: number; // Boltzmann constant in J/K
}

export interface Units {
  kg: number; // Base unit in kilograms
  g: number; // Grams
  lb: number; // Pounds
  oz: number; // Ounces
  mg: number; // Milligrams
  [key: string]: number; // Index signature to allow any string key
}

