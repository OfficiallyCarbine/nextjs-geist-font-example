(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/elements.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "categoryColors": (()=>categoryColors),
    "categoryNames": (()=>categoryNames),
    "elements": (()=>elements),
    "getElementByPosition": (()=>getElementByPosition),
    "shuffleArray": (()=>shuffleArray)
});
const categoryColors = {
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
const categoryNames = {
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
const elements = [
    // Period 1
    {
        symbol: 'H',
        name: 'Hydrogen',
        atomicNumber: 1,
        group: 1,
        period: 1,
        category: 'nonmetals'
    },
    {
        symbol: 'He',
        name: 'Helium',
        atomicNumber: 2,
        group: 18,
        period: 1,
        category: 'noble-gases'
    },
    // Period 2
    {
        symbol: 'Li',
        name: 'Lithium',
        atomicNumber: 3,
        group: 1,
        period: 2,
        category: 'alkali-metals'
    },
    {
        symbol: 'Be',
        name: 'Beryllium',
        atomicNumber: 4,
        group: 2,
        period: 2,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'B',
        name: 'Boron',
        atomicNumber: 5,
        group: 13,
        period: 2,
        category: 'metalloids'
    },
    {
        symbol: 'C',
        name: 'Carbon',
        atomicNumber: 6,
        group: 14,
        period: 2,
        category: 'nonmetals'
    },
    {
        symbol: 'N',
        name: 'Nitrogen',
        atomicNumber: 7,
        group: 15,
        period: 2,
        category: 'nonmetals'
    },
    {
        symbol: 'O',
        name: 'Oxygen',
        atomicNumber: 8,
        group: 16,
        period: 2,
        category: 'nonmetals'
    },
    {
        symbol: 'F',
        name: 'Fluorine',
        atomicNumber: 9,
        group: 17,
        period: 2,
        category: 'nonmetals'
    },
    {
        symbol: 'Ne',
        name: 'Neon',
        atomicNumber: 10,
        group: 18,
        period: 2,
        category: 'noble-gases'
    },
    // Period 3
    {
        symbol: 'Na',
        name: 'Sodium',
        atomicNumber: 11,
        group: 1,
        period: 3,
        category: 'alkali-metals'
    },
    {
        symbol: 'Mg',
        name: 'Magnesium',
        atomicNumber: 12,
        group: 2,
        period: 3,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'Al',
        name: 'Aluminum',
        atomicNumber: 13,
        group: 13,
        period: 3,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Si',
        name: 'Silicon',
        atomicNumber: 14,
        group: 14,
        period: 3,
        category: 'metalloids'
    },
    {
        symbol: 'P',
        name: 'Phosphorus',
        atomicNumber: 15,
        group: 15,
        period: 3,
        category: 'nonmetals'
    },
    {
        symbol: 'S',
        name: 'Sulfur',
        atomicNumber: 16,
        group: 16,
        period: 3,
        category: 'nonmetals'
    },
    {
        symbol: 'Cl',
        name: 'Chlorine',
        atomicNumber: 17,
        group: 17,
        period: 3,
        category: 'nonmetals'
    },
    {
        symbol: 'Ar',
        name: 'Argon',
        atomicNumber: 18,
        group: 18,
        period: 3,
        category: 'noble-gases'
    },
    // Period 4
    {
        symbol: 'K',
        name: 'Potassium',
        atomicNumber: 19,
        group: 1,
        period: 4,
        category: 'alkali-metals'
    },
    {
        symbol: 'Ca',
        name: 'Calcium',
        atomicNumber: 20,
        group: 2,
        period: 4,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'Sc',
        name: 'Scandium',
        atomicNumber: 21,
        group: 3,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Ti',
        name: 'Titanium',
        atomicNumber: 22,
        group: 4,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'V',
        name: 'Vanadium',
        atomicNumber: 23,
        group: 5,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Cr',
        name: 'Chromium',
        atomicNumber: 24,
        group: 6,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Mn',
        name: 'Manganese',
        atomicNumber: 25,
        group: 7,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Fe',
        name: 'Iron',
        atomicNumber: 26,
        group: 8,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Co',
        name: 'Cobalt',
        atomicNumber: 27,
        group: 9,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Ni',
        name: 'Nickel',
        atomicNumber: 28,
        group: 10,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Cu',
        name: 'Copper',
        atomicNumber: 29,
        group: 11,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Zn',
        name: 'Zinc',
        atomicNumber: 30,
        group: 12,
        period: 4,
        category: 'transition-metals'
    },
    {
        symbol: 'Ga',
        name: 'Gallium',
        atomicNumber: 31,
        group: 13,
        period: 4,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Ge',
        name: 'Germanium',
        atomicNumber: 32,
        group: 14,
        period: 4,
        category: 'metalloids'
    },
    {
        symbol: 'As',
        name: 'Arsenic',
        atomicNumber: 33,
        group: 15,
        period: 4,
        category: 'metalloids'
    },
    {
        symbol: 'Se',
        name: 'Selenium',
        atomicNumber: 34,
        group: 16,
        period: 4,
        category: 'nonmetals'
    },
    {
        symbol: 'Br',
        name: 'Bromine',
        atomicNumber: 35,
        group: 17,
        period: 4,
        category: 'nonmetals'
    },
    {
        symbol: 'Kr',
        name: 'Krypton',
        atomicNumber: 36,
        group: 18,
        period: 4,
        category: 'noble-gases'
    },
    // Period 5
    {
        symbol: 'Rb',
        name: 'Rubidium',
        atomicNumber: 37,
        group: 1,
        period: 5,
        category: 'alkali-metals'
    },
    {
        symbol: 'Sr',
        name: 'Strontium',
        atomicNumber: 38,
        group: 2,
        period: 5,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'Y',
        name: 'Yttrium',
        atomicNumber: 39,
        group: 3,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Zr',
        name: 'Zirconium',
        atomicNumber: 40,
        group: 4,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Nb',
        name: 'Niobium',
        atomicNumber: 41,
        group: 5,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Mo',
        name: 'Molybdenum',
        atomicNumber: 42,
        group: 6,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Tc',
        name: 'Technetium',
        atomicNumber: 43,
        group: 7,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Ru',
        name: 'Ruthenium',
        atomicNumber: 44,
        group: 8,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Rh',
        name: 'Rhodium',
        atomicNumber: 45,
        group: 9,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Pd',
        name: 'Palladium',
        atomicNumber: 46,
        group: 10,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Ag',
        name: 'Silver',
        atomicNumber: 47,
        group: 11,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'Cd',
        name: 'Cadmium',
        atomicNumber: 48,
        group: 12,
        period: 5,
        category: 'transition-metals'
    },
    {
        symbol: 'In',
        name: 'Indium',
        atomicNumber: 49,
        group: 13,
        period: 5,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Sn',
        name: 'Tin',
        atomicNumber: 50,
        group: 14,
        period: 5,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Sb',
        name: 'Antimony',
        atomicNumber: 51,
        group: 15,
        period: 5,
        category: 'metalloids'
    },
    {
        symbol: 'Te',
        name: 'Tellurium',
        atomicNumber: 52,
        group: 16,
        period: 5,
        category: 'metalloids'
    },
    {
        symbol: 'I',
        name: 'Iodine',
        atomicNumber: 53,
        group: 17,
        period: 5,
        category: 'nonmetals'
    },
    {
        symbol: 'Xe',
        name: 'Xenon',
        atomicNumber: 54,
        group: 18,
        period: 5,
        category: 'noble-gases'
    },
    // Period 6
    {
        symbol: 'Cs',
        name: 'Cesium',
        atomicNumber: 55,
        group: 1,
        period: 6,
        category: 'alkali-metals'
    },
    {
        symbol: 'Ba',
        name: 'Barium',
        atomicNumber: 56,
        group: 2,
        period: 6,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'La',
        name: 'Lanthanum',
        atomicNumber: 57,
        group: 3,
        period: 6,
        category: 'lanthanides'
    },
    {
        symbol: 'Hf',
        name: 'Hafnium',
        atomicNumber: 72,
        group: 4,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Ta',
        name: 'Tantalum',
        atomicNumber: 73,
        group: 5,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'W',
        name: 'Tungsten',
        atomicNumber: 74,
        group: 6,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Re',
        name: 'Rhenium',
        atomicNumber: 75,
        group: 7,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Os',
        name: 'Osmium',
        atomicNumber: 76,
        group: 8,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Ir',
        name: 'Iridium',
        atomicNumber: 77,
        group: 9,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Pt',
        name: 'Platinum',
        atomicNumber: 78,
        group: 10,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Au',
        name: 'Gold',
        atomicNumber: 79,
        group: 11,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Hg',
        name: 'Mercury',
        atomicNumber: 80,
        group: 12,
        period: 6,
        category: 'transition-metals'
    },
    {
        symbol: 'Tl',
        name: 'Thallium',
        atomicNumber: 81,
        group: 13,
        period: 6,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Pb',
        name: 'Lead',
        atomicNumber: 82,
        group: 14,
        period: 6,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Bi',
        name: 'Bismuth',
        atomicNumber: 83,
        group: 15,
        period: 6,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Po',
        name: 'Polonium',
        atomicNumber: 84,
        group: 16,
        period: 6,
        category: 'post-transition-metals'
    },
    {
        symbol: 'At',
        name: 'Astatine',
        atomicNumber: 85,
        group: 17,
        period: 6,
        category: 'metalloids'
    },
    {
        symbol: 'Rn',
        name: 'Radon',
        atomicNumber: 86,
        group: 18,
        period: 6,
        category: 'noble-gases'
    },
    // Period 7
    {
        symbol: 'Fr',
        name: 'Francium',
        atomicNumber: 87,
        group: 1,
        period: 7,
        category: 'alkali-metals'
    },
    {
        symbol: 'Ra',
        name: 'Radium',
        atomicNumber: 88,
        group: 2,
        period: 7,
        category: 'alkaline-earth-metals'
    },
    {
        symbol: 'Ac',
        name: 'Actinium',
        atomicNumber: 89,
        group: 3,
        period: 7,
        category: 'actinides'
    },
    {
        symbol: 'Rf',
        name: 'Rutherfordium',
        atomicNumber: 104,
        group: 4,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Db',
        name: 'Dubnium',
        atomicNumber: 105,
        group: 5,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Sg',
        name: 'Seaborgium',
        atomicNumber: 106,
        group: 6,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Bh',
        name: 'Bohrium',
        atomicNumber: 107,
        group: 7,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Hs',
        name: 'Hassium',
        atomicNumber: 108,
        group: 8,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Mt',
        name: 'Meitnerium',
        atomicNumber: 109,
        group: 9,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Ds',
        name: 'Darmstadtium',
        atomicNumber: 110,
        group: 10,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Rg',
        name: 'Roentgenium',
        atomicNumber: 111,
        group: 11,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Cn',
        name: 'Copernicium',
        atomicNumber: 112,
        group: 12,
        period: 7,
        category: 'transition-metals'
    },
    {
        symbol: 'Nh',
        name: 'Nihonium',
        atomicNumber: 113,
        group: 13,
        period: 7,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Fl',
        name: 'Flerovium',
        atomicNumber: 114,
        group: 14,
        period: 7,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Mc',
        name: 'Moscovium',
        atomicNumber: 115,
        group: 15,
        period: 7,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Lv',
        name: 'Livermorium',
        atomicNumber: 116,
        group: 16,
        period: 7,
        category: 'post-transition-metals'
    },
    {
        symbol: 'Ts',
        name: 'Tennessine',
        atomicNumber: 117,
        group: 17,
        period: 7,
        category: 'nonmetals'
    },
    {
        symbol: 'Og',
        name: 'Oganesson',
        atomicNumber: 118,
        group: 18,
        period: 7,
        category: 'noble-gases'
    },
    // Lanthanides (Period 6, f-block)
    {
        symbol: 'Ce',
        name: 'Cerium',
        atomicNumber: 58,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Pr',
        name: 'Praseodymium',
        atomicNumber: 59,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Nd',
        name: 'Neodymium',
        atomicNumber: 60,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Pm',
        name: 'Promethium',
        atomicNumber: 61,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Sm',
        name: 'Samarium',
        atomicNumber: 62,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Eu',
        name: 'Europium',
        atomicNumber: 63,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Gd',
        name: 'Gadolinium',
        atomicNumber: 64,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Tb',
        name: 'Terbium',
        atomicNumber: 65,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Dy',
        name: 'Dysprosium',
        atomicNumber: 66,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Ho',
        name: 'Holmium',
        atomicNumber: 67,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Er',
        name: 'Erbium',
        atomicNumber: 68,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Tm',
        name: 'Thulium',
        atomicNumber: 69,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Yb',
        name: 'Ytterbium',
        atomicNumber: 70,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    {
        symbol: 'Lu',
        name: 'Lutetium',
        atomicNumber: 71,
        group: 0,
        period: 8,
        category: 'lanthanides'
    },
    // Actinides (Period 7, f-block)
    {
        symbol: 'Th',
        name: 'Thorium',
        atomicNumber: 90,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Pa',
        name: 'Protactinium',
        atomicNumber: 91,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'U',
        name: 'Uranium',
        atomicNumber: 92,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Np',
        name: 'Neptunium',
        atomicNumber: 93,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Pu',
        name: 'Plutonium',
        atomicNumber: 94,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Am',
        name: 'Americium',
        atomicNumber: 95,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Cm',
        name: 'Curium',
        atomicNumber: 96,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Bk',
        name: 'Berkelium',
        atomicNumber: 97,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Cf',
        name: 'Californium',
        atomicNumber: 98,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Es',
        name: 'Einsteinium',
        atomicNumber: 99,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Fm',
        name: 'Fermium',
        atomicNumber: 100,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Md',
        name: 'Mendelevium',
        atomicNumber: 101,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'No',
        name: 'Nobelium',
        atomicNumber: 102,
        group: 0,
        period: 9,
        category: 'actinides'
    },
    {
        symbol: 'Lr',
        name: 'Lawrencium',
        atomicNumber: 103,
        group: 0,
        period: 9,
        category: 'actinides'
    }
];
function getElementByPosition(group, period) {
    return elements.find((el)=>el.group === group && el.period === period);
}
function shuffleArray(array) {
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PeriodicGame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PeriodicGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/elements.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const INITIAL_TIME = 600; // 10 minutes in seconds
function PeriodicGame() {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        score: 0,
        level: 1,
        timeLeft: INITIAL_TIME,
        isPlaying: false,
        isPaused: false,
        placedElements: new Map(),
        availableElements: [],
        gameOver: false,
        gameWon: false,
        requiredCount: 0
    });
    const [draggedElement, setDraggedElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightedSlot, setHighlightedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper function to compute total valid slots in the periodic table
    const computeTotalSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PeriodicGame.useCallback[computeTotalSlots]": ()=>{
            let count = 0;
            // Main periodic table (7 periods, 18 groups)
            for(let period = 1; period <= 7; period++){
                for(let group = 1; group <= 18; group++){
                    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementByPosition"])(group, period);
                    if (element) {
                        count++;
                    }
                }
            }
            // Lanthanides (atomic numbers 57-71)
            for(let i = 57; i <= 71; i++){
                const element = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find({
                    "PeriodicGame.useCallback[computeTotalSlots].element": (el)=>el.atomicNumber === i
                }["PeriodicGame.useCallback[computeTotalSlots].element"]);
                if (element) {
                    count++;
                }
            }
            // Actinides (atomic numbers 89-103)
            for(let i = 89; i <= 103; i++){
                const element = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find({
                    "PeriodicGame.useCallback[computeTotalSlots].element": (el)=>el.atomicNumber === i
                }["PeriodicGame.useCallback[computeTotalSlots].element"]);
                if (element) {
                    count++;
                }
            }
            return count;
        }
    }["PeriodicGame.useCallback[computeTotalSlots]"], []);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PeriodicGame.useEffect": ()=>{
            let interval;
            if (gameState.isPlaying && !gameState.isPaused && gameState.timeLeft > 0) {
                interval = setInterval({
                    "PeriodicGame.useEffect": ()=>{
                        setGameState({
                            "PeriodicGame.useEffect": (prev)=>{
                                if (prev.timeLeft <= 1) {
                                    return {
                                        ...prev,
                                        timeLeft: 0,
                                        isPlaying: false,
                                        gameOver: true
                                    };
                                }
                                return {
                                    ...prev,
                                    timeLeft: prev.timeLeft - 1
                                };
                            }
                        }["PeriodicGame.useEffect"]);
                    }
                }["PeriodicGame.useEffect"], 1000);
            }
            return ({
                "PeriodicGame.useEffect": ()=>clearInterval(interval)
            })["PeriodicGame.useEffect"];
        }
    }["PeriodicGame.useEffect"], [
        gameState.isPlaying,
        gameState.isPaused,
        gameState.timeLeft
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PeriodicGame.useCallback[startGame]": ()=>{
            const allElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffleArray"])([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"]
            ]);
            const totalSlots = computeTotalSlots();
            setGameState({
                "PeriodicGame.useCallback[startGame]": (prev)=>({
                        ...prev,
                        isPlaying: true,
                        isPaused: false,
                        gameOver: false,
                        gameWon: false,
                        placedElements: new Map(),
                        availableElements: allElements,
                        timeLeft: INITIAL_TIME,
                        requiredCount: totalSlots,
                        score: 0
                    })
            }["PeriodicGame.useCallback[startGame]"]);
        }
    }["PeriodicGame.useCallback[startGame]"], [
        computeTotalSlots
    ]);
    const pauseGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PeriodicGame.useCallback[pauseGame]": ()=>{
            setGameState({
                "PeriodicGame.useCallback[pauseGame]": (prev)=>({
                        ...prev,
                        isPaused: !prev.isPaused
                    })
            }["PeriodicGame.useCallback[pauseGame]"]);
        }
    }["PeriodicGame.useCallback[pauseGame]"], []);
    const shuffleElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PeriodicGame.useCallback[shuffleElements]": ()=>{
            setGameState({
                "PeriodicGame.useCallback[shuffleElements]": (prev)=>({
                        ...prev,
                        availableElements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffleArray"])(prev.availableElements)
                    })
            }["PeriodicGame.useCallback[shuffleElements]"]);
        }
    }["PeriodicGame.useCallback[shuffleElements]"], []);
    const restartGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PeriodicGame.useCallback[restartGame]": ()=>{
            setGameState({
                score: 0,
                level: 1,
                timeLeft: INITIAL_TIME,
                isPlaying: false,
                isPaused: false,
                placedElements: new Map(),
                availableElements: [],
                gameOver: false,
                gameWon: false,
                requiredCount: 0
            });
        }
    }["PeriodicGame.useCallback[restartGame]"], []);
    const handleDragStart = (e, element)=>{
        setDraggedElement(element);
        e.dataTransfer.setData('text/plain', element.symbol);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    const handleDragEnter = (e, group, period)=>{
        e.preventDefault();
        setHighlightedSlot(`${group}-${period}`);
    };
    const handleDragLeave = ()=>{
        setHighlightedSlot(null);
    };
    const handleDrop = (e, group, period)=>{
        e.preventDefault();
        setHighlightedSlot(null);
        if (!draggedElement) return;
        const correctElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementByPosition"])(group, period);
        const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;
        if (isCorrect) {
            // Correct placement
            setGameState((prev)=>{
                const newPlacedElements = new Map(prev.placedElements);
                newPlacedElements.set(`${group}-${period}`, draggedElement);
                const newAvailableElements = prev.availableElements.filter((el)=>el.symbol !== draggedElement.symbol);
                const scorePercentage = Math.floor(newPlacedElements.size / prev.requiredCount * 100);
                const isWon = newPlacedElements.size === prev.requiredCount;
                return {
                    ...prev,
                    score: scorePercentage,
                    placedElements: newPlacedElements,
                    availableElements: newAvailableElements,
                    gameWon: isWon,
                    isPlaying: !isWon
                };
            });
            // Success animation
            const slot = document.querySelector(`[data-slot="${group}-${period}"]`);
            if (slot) {
                slot.classList.add('animate-pulse');
                setTimeout(()=>slot.classList.remove('animate-pulse'), 1000);
            }
        } else {
            // Wrong placement - restart game
            const slot = document.querySelector(`[data-slot="${group}-${period}"]`);
            if (slot) {
                slot.classList.add('animate-bounce');
                setTimeout(()=>{
                    slot.classList.remove('animate-bounce');
                    restartGame();
                }, 1000);
            }
        }
        setDraggedElement(null);
    };
    const handleLanthanideDrop = (e, atomicNumber)=>{
        e.preventDefault();
        setHighlightedSlot(null);
        if (!draggedElement) return;
        const correctElement = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find((el)=>el.atomicNumber === atomicNumber);
        const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;
        if (isCorrect) {
            // Correct placement
            setGameState((prev)=>{
                const newPlacedElements = new Map(prev.placedElements);
                newPlacedElements.set(`lanthanide-${atomicNumber}`, draggedElement);
                const newAvailableElements = prev.availableElements.filter((el)=>el.symbol !== draggedElement.symbol);
                const scorePercentage = Math.floor(newPlacedElements.size / prev.requiredCount * 100);
                const isWon = newPlacedElements.size === prev.requiredCount;
                return {
                    ...prev,
                    score: scorePercentage,
                    placedElements: newPlacedElements,
                    availableElements: newAvailableElements,
                    gameWon: isWon,
                    isPlaying: !isWon
                };
            });
            // Success animation
            const slot = document.querySelector(`[data-slot="lanthanide-${atomicNumber}"]`);
            if (slot) {
                slot.classList.add('animate-pulse');
                setTimeout(()=>slot.classList.remove('animate-pulse'), 1000);
            }
        } else {
            // Wrong placement - restart game
            const slot = document.querySelector(`[data-slot="lanthanide-${atomicNumber}"]`);
            if (slot) {
                slot.classList.add('animate-bounce');
                setTimeout(()=>{
                    slot.classList.remove('animate-bounce');
                    restartGame();
                }, 1000);
            }
        }
        setDraggedElement(null);
    };
    const handleActinideDrop = (e, atomicNumber)=>{
        e.preventDefault();
        setHighlightedSlot(null);
        if (!draggedElement) return;
        const correctElement = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find((el)=>el.atomicNumber === atomicNumber);
        const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;
        if (isCorrect) {
            // Correct placement
            setGameState((prev)=>{
                const newPlacedElements = new Map(prev.placedElements);
                newPlacedElements.set(`actinide-${atomicNumber}`, draggedElement);
                const newAvailableElements = prev.availableElements.filter((el)=>el.symbol !== draggedElement.symbol);
                const scorePercentage = Math.floor(newPlacedElements.size / prev.requiredCount * 100);
                const isWon = newPlacedElements.size === prev.requiredCount;
                return {
                    ...prev,
                    score: scorePercentage,
                    placedElements: newPlacedElements,
                    availableElements: newAvailableElements,
                    gameWon: isWon,
                    isPlaying: !isWon
                };
            });
            // Success animation
            const slot = document.querySelector(`[data-slot="actinide-${atomicNumber}"]`);
            if (slot) {
                slot.classList.add('animate-pulse');
                setTimeout(()=>slot.classList.remove('animate-pulse'), 1000);
            }
        } else {
            // Wrong placement - restart game
            const slot = document.querySelector(`[data-slot="actinide-${atomicNumber}"]`);
            if (slot) {
                slot.classList.add('animate-bounce');
                setTimeout(()=>{
                    slot.classList.remove('animate-bounce');
                    restartGame();
                }, 1000);
            }
        }
        setDraggedElement(null);
    };
    const renderPeriodicGrid = ()=>{
        const grid = [];
        // Main periodic table (7 periods, 18 groups)
        for(let period = 1; period <= 7; period++){
            const row = [];
            for(let group = 1; group <= 18; group++){
                const key = `${group}-${period}`;
                const placedElement = gameState.placedElements.get(key);
                const correctElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementByPosition"])(group, period);
                // Skip empty positions in the periodic table
                if (!correctElement) {
                    row.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12"
                    }, key, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, this));
                    continue;
                }
                const isHighlighted = highlightedSlot === key;
                const categoryColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"][correctElement.category];
                row.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-slot": key,
                    className: `
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${categoryColor} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `,
                    onDragOver: handleDragOver,
                    onDragEnter: (e)=>handleDragEnter(e, group, period),
                    onDragLeave: handleDragLeave,
                    onDrop: (e)=>handleDrop(e, group, period),
                    children: placedElement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-bold",
                            children: placedElement.symbol
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 353,
                            columnNumber: 17
                        }, this)
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: " "
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 356,
                        columnNumber: 15
                    }, this)
                }, key, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this));
            }
            grid.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 justify-center",
                children: row
            }, period, false, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, this));
        }
        // Lanthanides row
        const lanthanides = [];
        for(let i = 57; i <= 71; i++){
            const element = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find((el)=>el.atomicNumber === i);
            if (element) {
                const key = `lanthanide-${i}`;
                const placedElement = gameState.placedElements.get(key);
                const isHighlighted = highlightedSlot === key;
                lanthanides.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-slot": key,
                    className: `
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].lanthanides} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `,
                    onDragOver: handleDragOver,
                    onDragEnter: (e)=>{
                        e.preventDefault();
                        setHighlightedSlot(key);
                    },
                    onDragLeave: handleDragLeave,
                    onDrop: (e)=>handleLanthanideDrop(e, i),
                    children: placedElement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                children: placedElement.atomicNumber
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 397,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold",
                                children: placedElement.symbol
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 398,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: element.atomicNumber
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 401,
                        columnNumber: 15
                    }, this)
                }, key, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, this));
            }
        }
        // Actinides row
        const actinides = [];
        for(let i = 89; i <= 103; i++){
            const element = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elements"].find((el)=>el.atomicNumber === i);
            if (element) {
                const key = `actinide-${i}`;
                const placedElement = gameState.placedElements.get(key);
                const isHighlighted = highlightedSlot === key;
                actinides.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-slot": key,
                    className: `
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].actinides} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `,
                    onDragOver: handleDragOver,
                    onDragEnter: (e)=>{
                        e.preventDefault();
                        setHighlightedSlot(key);
                    },
                    onDragLeave: handleDragLeave,
                    onDrop: (e)=>handleActinideDrop(e, i),
                    children: placedElement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                children: placedElement.atomicNumber
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 437,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold",
                                children: placedElement.symbol
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 438,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: element.atomicNumber
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 441,
                        columnNumber: 15
                    }, this)
                }, key, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 418,
                    columnNumber: 11
                }, this));
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-start gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        grid,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 justify-center",
                                    children: lanthanides
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeriodicGame.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 justify-center",
                                    children: actinides
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeriodicGame.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-80",
                    children: renderElementsPool()
                }, void 0, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PeriodicGame.tsx",
            lineNumber: 449,
            columnNumber: 7
        }, this);
    };
    const renderElementsPool = ()=>{
        if (!gameState.isPlaying) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-4 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold mb-4 text-center",
                    children: "Elements Pool"
                }, void 0, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 justify-center max-h-96 overflow-y-auto",
                    children: gameState.availableElements.map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            draggable: true,
                            onDragStart: (e)=>handleDragStart(e, element),
                            className: `
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"][element.category]} text-white p-2 rounded-md cursor-move
                hover:scale-105 transition-transform duration-200 min-w-16 text-center
                shadow-lg hover:shadow-xl
              `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs",
                                    children: element.atomicNumber
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeriodicGame.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-bold",
                                    children: element.symbol
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeriodicGame.tsx",
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs truncate",
                                    children: element.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeriodicGame.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, element.symbol, true, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 474,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PeriodicGame.tsx",
            lineNumber: 472,
            columnNumber: 7
        }, this);
    };
    const renderLegend = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 justify-center text-xs",
            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryNames"]).map(([category, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-4 h-4 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"][category]} rounded`
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this)
                    ]
                }, category, true, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 500,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/PeriodicGame.tsx",
            lineNumber: 498,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-900 text-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            children: "Periodic Puzzle 🧪⚗️⚛️"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg",
                                children: [
                                    "Score: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: [
                                            gameState.score,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PeriodicGame.tsx",
                                        lineNumber: 517,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg",
                                children: [
                                    "Progress: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: [
                                            gameState.placedElements.size,
                                            "/",
                                            gameState.requiredCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PeriodicGame.tsx",
                                        lineNumber: 518,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg",
                                children: [
                                    "Time: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: formatTime(gameState.timeLeft)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PeriodicGame.tsx",
                                        lineNumber: 519,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startGame,
                                className: "px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors",
                                children: "Start"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pauseGame,
                                disabled: !gameState.isPlaying,
                                className: "px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 rounded-md font-semibold transition-colors",
                                children: gameState.isPaused ? 'Resume' : 'Pause'
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: shuffleElements,
                                disabled: !gameState.isPlaying,
                                className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-md font-semibold transition-colors",
                                children: "Shuffle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: renderLegend()
            }, void 0, false, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: renderPeriodicGrid()
            }, void 0, false, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            (gameState.gameOver || gameState.gameWon) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800 p-8 rounded-lg text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: gameState.gameWon ? '🎉 Congratulations!' : '⏰ Time\'s Up!'
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mb-4",
                            children: gameState.gameWon ? `You completed the entire periodic table with 100% accuracy!` : `Game Over! Your final score: ${gameState.score}% (${gameState.placedElements.size}/${gameState.requiredCount} elements placed)`
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: restartGame,
                                className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors",
                                children: "Play Again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PeriodicGame.tsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PeriodicGame.tsx",
                            lineNumber: 568,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PeriodicGame.tsx",
                    lineNumber: 558,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 557,
                columnNumber: 9
            }, this),
            !gameState.isPlaying && !gameState.gameOver && !gameState.gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "How to Play"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 max-w-2xl mx-auto",
                        children: "Drag elements from the side pool to their correct positions in the periodic table. Your score is calculated as a percentage of completion. Win by filling the entire periodic table before time runs out! Be careful - placing an element in the wrong position will restart the game."
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodicGame.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodicGame.tsx",
                lineNumber: 582,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PeriodicGame.tsx",
        lineNumber: 510,
        columnNumber: 5
    }, this);
}
_s(PeriodicGame, "29H+3bB57uPOTgmFurOxq2cuG/A=");
_c = PeriodicGame;
var _c;
__turbopack_context__.k.register(_c, "PeriodicGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_47fa8426._.js.map