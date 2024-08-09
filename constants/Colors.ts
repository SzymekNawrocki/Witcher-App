const tintColorLight = '#5C2D24'; // Kolor zainspirowany ciemnym, krwistym czerwonym
const tintColorDark = '#D9B580';  // Ciepły, złoty odcień zainspirowany wiedźmińskimi runami

export const Colors = {
  light: {
    text: '#D9B580',           // Ciepły, złoty odcień nawiązujący do run i starych ksiąg
    background: '#2F2F2F',     // Głęboka, ciemna szarość nawiązująca do kamiennych zamków
    tint: tintColorLight,      
    icon: '#A37A5F',           // Brązowawy odcień inspirowany drewnem i starymi przedmiotami
    tabIconDefault: '#A37A5F', 
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',           // Jasny kolor dla dobrego kontrastu na ciemnym tle
    background: '#1C1C1C',     // Bardzo ciemny odcień, prawie czarny
    tint: tintColorDark,       
    icon: '#7A6E52',           // Zgaszony brąz nawiązujący do starych przedmiotów
    tabIconDefault: '#7A6E52', 
    tabIconSelected: tintColorDark,
  },
};
