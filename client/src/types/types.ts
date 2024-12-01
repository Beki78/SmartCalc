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