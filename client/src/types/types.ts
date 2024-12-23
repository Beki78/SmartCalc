import { all, create } from "mathjs";

const math = create(all);

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
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export interface HeaderProps {
  title: string;
  description: string;
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

 export const constants: ConstantType = {
   pi: math.pi,
   gravity: 9.81,
   speedOfLight: 299792458,
   euler: math.e,
   plancksConstant: 6.62607015e-34,
   gravitationalConstant: 6.6743e-11,
   avogadro: 6.02214076e23,
   boltzmann: 1.380649e-23,
 };

 export const conversionFactors: { [key: string]: number } = {
   meter: 1,
   kilometer: 0.001,
   centimeter: 100,
   millimeter: 1000,
   mile: 0.000621371,
   yard: 1.09361,
   foot: 3.28084,
   inch: 39.3701,
 };
