// Tipos globais do aplicativo

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Theme {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}

// Tipos para componentes
export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

export interface IconProps {
  as: any;
  className?: string;
  size?: number;
}