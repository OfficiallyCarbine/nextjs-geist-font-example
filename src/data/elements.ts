export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  group: number;
  period: number;
  category: ElementCategory;
}

export type ElementCategory = 
  | 'alkali-metals'
  | 'alkaline-earth-metals'
  | 'transition-metals'
  | 'post-transition-metals'
  | 'metalloids'
  | 'nonmetals'
  | 'noble-gases'
  | 'lanthanides'
  | 'actinides';

export const categoryColors: Record<ElementCategory, string> = {
  'alkali-metals': 'bg-red-500',
  'alkaline-earth-metals': 'bg-yellow-500',
  'transition-metals': 'bg-amber-600',
  'post-transition-metals': 'bg-green-500',
  'metalloids': 'bg-cyan-500',
  'nonmetals': 'bg-blue-500',
  'noble-gases': 'bg-purple-500',
  'lanthanides': 'bg-pink-500',
  'actinides': 'bg-rose-500'
};

export const categoryNames: Record<ElementCategory, string> = {
  'alkali-metals': 'Alkali Metals',
  'alkaline-earth-metals': 'Alkaline Earth Metals',
  'transition-metals': 'Transition Metals',
  'post-transition-metals': 'Post-Transition Metals',
  'metalloids': 'Metalloids',
  'nonmetals': 'Nonmetals',
  'noble-gases': 'Noble Gases',
  'lanthanides': 'Lanthanides',
  'actinides': 'Actinides'
};

export const elements: Element[] = [
  // Period 1
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, group: 1, period: 1, category: 'nonmetals' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, group: 18, period: 1, category: 'noble-gases' },
  
  // Period 2
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, group: 1, period: 2, category: 'alkali-metals' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, group: 2, period: 2, category: 'alkaline-earth-metals' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, group: 13, period: 2, category: 'metalloids' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, group: 14, period: 2, category: 'nonmetals' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, group: 15, period: 2, category: 'nonmetals' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, group: 16, period: 2, category: 'nonmetals' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, group: 17, period: 2, category: 'nonmetals' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, group: 18, period: 2, category: 'noble-gases' },
  
  // Period 3
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, group: 1, period: 3, category: 'alkali-metals' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, group: 2, period: 3, category: 'alkaline-earth-metals' },
  { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, group: 13, period: 3, category: 'post-transition-metals' },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, group: 14, period: 3, category: 'metalloids' },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, group: 15, period: 3, category: 'nonmetals' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, group: 16, period: 3, category: 'nonmetals' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, group: 17, period: 3, category: 'nonmetals' },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, group: 18, period: 3, category: 'noble-gases' },
  
  // Period 4
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, group: 1, period: 4, category: 'alkali-metals' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, group: 2, period: 4, category: 'alkaline-earth-metals' },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, group: 3, period: 4, category: 'transition-metals' },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, group: 4, period: 4, category: 'transition-metals' },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, group: 5, period: 4, category: 'transition-metals' },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, group: 6, period: 4, category: 'transition-metals' },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, group: 7, period: 4, category: 'transition-metals' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, group: 8, period: 4, category: 'transition-metals' },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, group: 9, period: 4, category: 'transition-metals' },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, group: 10, period: 4, category: 'transition-metals' },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, group: 11, period: 4, category: 'transition-metals' },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, group: 12, period: 4, category: 'transition-metals' },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, group: 13, period: 4, category: 'post-transition-metals' },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, group: 14, period: 4, category: 'metalloids' },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, group: 15, period: 4, category: 'metalloids' },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, group: 16, period: 4, category: 'nonmetals' },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, group: 17, period: 4, category: 'nonmetals' },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, group: 18, period: 4, category: 'noble-gases' },
  
  // Period 5
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, group: 1, period: 5, category: 'alkali-metals' },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, group: 2, period: 5, category: 'alkaline-earth-metals' },
  { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, group: 3, period: 5, category: 'transition-metals' },
  { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, group: 4, period: 5, category: 'transition-metals' },
  { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, group: 5, period: 5, category: 'transition-metals' },
  { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, group: 6, period: 5, category: 'transition-metals' },
  { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, group: 7, period: 5, category: 'transition-metals' },
  { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, group: 8, period: 5, category: 'transition-metals' },
  { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, group: 9, period: 5, category: 'transition-metals' },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, group: 10, period: 5, category: 'transition-metals' },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, group: 11, period: 5, category: 'transition-metals' },
  { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, group: 12, period: 5, category: 'transition-metals' },
  { symbol: 'In', name: 'Indium', atomicNumber: 49, group: 13, period: 5, category: 'post-transition-metals' },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, group: 14, period: 5, category: 'post-transition-metals' },
  { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, group: 15, period: 5, category: 'metalloids' },
  { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, group: 16, period: 5, category: 'metalloids' },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, group: 17, period: 5, category: 'nonmetals' },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, group: 18, period: 5, category: 'noble-gases' },
  
  // Period 6
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, group: 1, period: 6, category: 'alkali-metals' },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, group: 2, period: 6, category: 'alkaline-earth-metals' },
  { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, group: 3, period: 6, category: 'lanthanides' },
  { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, group: 4, period: 6, category: 'transition-metals' },
  { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, group: 5, period: 6, category: 'transition-metals' },
  { symbol: 'W', name: 'Tungsten', atomicNumber: 74, group: 6, period: 6, category: 'transition-metals' },
  { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, group: 7, period: 6, category: 'transition-metals' },
  { symbol: 'Os', name: 'Osmium', atomicNumber: 76, group: 8, period: 6, category: 'transition-metals' },
  { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, group: 9, period: 6, category: 'transition-metals' },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, group: 10, period: 6, category: 'transition-metals' },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, group: 11, period: 6, category: 'transition-metals' },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, group: 12, period: 6, category: 'transition-metals' },
  { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, group: 13, period: 6, category: 'post-transition-metals' },
  { symbol: 'Pb', name: 'Lead', atomicNumber: 82, group: 14, period: 6, category: 'post-transition-metals' },
  { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, group: 15, period: 6, category: 'post-transition-metals' },
  { symbol: 'Po', name: 'Polonium', atomicNumber: 84, group: 16, period: 6, category: 'post-transition-metals' },
  { symbol: 'At', name: 'Astatine', atomicNumber: 85, group: 17, period: 6, category: 'metalloids' },
  { symbol: 'Rn', name: 'Radon', atomicNumber: 86, group: 18, period: 6, category: 'noble-gases' },
  
  // Period 7
  { symbol: 'Fr', name: 'Francium', atomicNumber: 87, group: 1, period: 7, category: 'alkali-metals' },
  { symbol: 'Ra', name: 'Radium', atomicNumber: 88, group: 2, period: 7, category: 'alkaline-earth-metals' },
  { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, group: 3, period: 7, category: 'actinides' },
  { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, group: 4, period: 7, category: 'transition-metals' },
  { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, group: 5, period: 7, category: 'transition-metals' },
  { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, group: 6, period: 7, category: 'transition-metals' },
  { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, group: 7, period: 7, category: 'transition-metals' },
  { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, group: 8, period: 7, category: 'transition-metals' },
  { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, group: 9, period: 7, category: 'transition-metals' },
  { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, group: 10, period: 7, category: 'transition-metals' },
  { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, group: 11, period: 7, category: 'transition-metals' },
  { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, group: 12, period: 7, category: 'transition-metals' },
  { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, group: 13, period: 7, category: 'post-transition-metals' },
  { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, group: 14, period: 7, category: 'post-transition-metals' },
  { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, group: 15, period: 7, category: 'post-transition-metals' },
  { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, group: 16, period: 7, category: 'post-transition-metals' },
  { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, group: 17, period: 7, category: 'nonmetals' },
  { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, group: 18, period: 7, category: 'noble-gases' },
  
  // Lanthanides (Period 6, f-block)
  { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Eu', name: 'Europium', atomicNumber: 63, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Er', name: 'Erbium', atomicNumber: 68, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, group: 0, period: 8, category: 'lanthanides' },
  { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, group: 0, period: 8, category: 'lanthanides' },
  
  // Actinides (Period 7, f-block)
  { symbol: 'Th', name: 'Thorium', atomicNumber: 90, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, group: 0, period: 9, category: 'actinides' },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Am', name: 'Americium', atomicNumber: 95, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Cm', name: 'Curium', atomicNumber: 96, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Cf', name: 'Californium', atomicNumber: 98, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, group: 0, period: 9, category: 'actinides' },
  { symbol: 'No', name: 'Nobelium', atomicNumber: 102, group: 0, period: 9, category: 'actinides' },
  { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, group: 0, period: 9, category: 'actinides' }
];

export function getElementByPosition(group: number, period: number): Element | undefined {
  return elements.find(el => el.group === group && el.period === period);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
