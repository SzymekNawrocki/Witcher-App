const tintColorLight = '#5C2D24'; 
const tintColorDark = '#D9B580';  

export const Colors = {
  light: {
    text: '#D9B580',           
    background: '#2F2F2F',     
    tint: tintColorLight,      
    icon: '#A37A5F',           
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
