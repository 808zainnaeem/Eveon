import Rstorage from "../../assets/Pshoot/RED/Rstorage.png";
import Rlamp from "../../assets/Pshoot/RED/Rlamp.png";
import Rbrake from "../../assets/Pshoot/RED/Rbrake.png";
import Rtyre from "../../assets/Pshoot/RED/Rtyre.png";
import r1 from "../../assets/Pshoot/RED/r1.png";
import r2 from "../../assets/Pshoot/RED/r2.png";
import r3 from "../../assets/Pshoot/RED/r3.png";
import r4 from "../../assets/Pshoot/RED/r4.png";
import w1 from "../../assets/Pshoot/White/w1.png";
import w2 from "../../assets/Pshoot/White/w2.png";
import w3 from "../../assets/Pshoot/White/w3.png";
import w4 from "../../assets/Pshoot/White/w4.png";
import Gp from "../../assets/Pshoot/Grey/Gp.png";
import Gpstorage from "../../assets/Pshoot/Grey/Gpstorage.png";
import Gpbrake from "../../assets/Pshoot/Grey/Gpbrake.png";
import Gptyre from "../../assets/Pshoot/Grey/Gptyre.png";
import Gplamp from "../../assets/Pshoot/Grey/Gplamp.png";

import g1 from "../../assets/Pshoot/LEOPARD/Gray/g1.png";
import g2 from "../../assets/Pshoot/LEOPARD/Gray/g2.png";
import g3 from "../../assets/Pshoot/LEOPARD/Gray/g3.png";
import g4 from "../../assets/Pshoot/LEOPARD/Gray/g4.png";
import gre1 from "../../assets/Pshoot/LEOPARD/Green/gre1.png";
import gre2 from "../../assets/Pshoot/LEOPARD/Green/gre2.png";
import gre3 from "../../assets/Pshoot/LEOPARD/Green/gre3.png";
import gre4 from "../../assets/Pshoot/LEOPARD/Green/gre4.png";
import Grstorage from "../../assets/Pshoot/LEOPARD/Gray/Grstorage.png";
import Grlamp from "../../assets/Pshoot/LEOPARD/Gray/Grlamp.png";
import Grbrake from "../../assets/Pshoot/LEOPARD/Gray/Grbrake.png";
import Grtyre from "../../assets/Pshoot/LEOPARD/Gray/Grtyre.png";
import Fgrestorage from "../../assets/Pshoot/LEOPARD/Green/Fgrestorage.png";
import Fgretyre from "../../assets/Pshoot/LEOPARD/Green/Fgretyre.png";
import Fgrebrake from "../../assets/Pshoot/LEOPARD/Green/Fgrebrake.png";
import Fgrelamp from "../../assets/Pshoot/LEOPARD/Green/Fgrelamp.png";
import storage from "../../assets/Pshoot/FWhite/storage.png";
import tyre from "../../assets/Pshoot/FWhite/tyre.png";
import diskbrake from "../../assets/Pshoot/FWhite/diskbrake.png";
import daylight from "../../assets/Pshoot/FWhite/daylight.png";
import digitalmeter from "../../assets/Pshoot/FWhite/digitalmeter.png";
import cruidecontrol from "../../assets/Pshoot/FWhite/cruidecontrol.png";
import Rj1 from "../../assets/Pshoot/JOY/Rj1.png";
import Rj2 from "../../assets/Pshoot/JOY/Rj2.png";
import Wj1 from "../../assets/Pshoot/JOY/Wj1.png";
import JG1 from "../../assets/Pshoot/JOY/JG1.png";
import Jtyre from "../../assets/Pshoot/JOY/Jtyre.png";
import Jstorage from "../../assets/Pshoot/JOY/Jstorage.png";
import JGlamp from "../../assets/Pshoot/JOY/JGlamp.png";
import Jbrake from "../../assets/Pshoot/JOY/Jbrake.png";
import LMNew from "../../assets/Pshoot/LEOPARD/Gray/LMNew.png";
import LCnew from "../../assets/Pshoot/LEOPARD/Gray/LCnew.png";
import LW1 from '../../assets/images/leopard (2).png'
import LW2 from "../../assets/images/leopard (3).png";
import LW3 from "../../assets/images/leopard (4).png";



import LP1 from "../../assets/Pshoot/LEOPARD_PRO/LP1.png";
import LP2 from "../../assets/Pshoot/LEOPARD_PRO/LP2.png";
import LP3 from "../../assets/Pshoot/LEOPARD_PRO/LP3.png";
import LP4 from "../../assets/Pshoot/LEOPARD_PRO/LPW4.png";
import LP5 from "../../assets/Pshoot/LEOPARD_PRO/LP5.png";
import LPW_Main from '../../assets/images/LPW_Main.png';



import ZB1 from "../../assets/Pshoot/ZIPPY/ZB1.png";
import ZB2 from "../../assets/Pshoot/ZIPPY/ZB2.png";
import Z3 from "../../assets/Pshoot/ZIPPY/Z3.png";
import Z4 from "../../assets/Pshoot/ZIPPY/Z4.png";
import Z5 from "../../assets/Pshoot/ZIPPY/Z5.png";
import Z6 from "../../assets/Pshoot/ZIPPY/Z6.png";
import Z7 from "../../assets/Pshoot/ZIPPY/Z7.png";
import Z8 from "../../assets/Pshoot/ZIPPY/Z8.png";

export const products = [
  {
    id: 1,
    name: "PRONTO",
    images: {
      Red: [r1, r3, r2, r4],
      White: [w1, w2, w3, w4],
      Grey: [Gp, Gpstorage, Gpbrake, Gptyre],
    },
    featureImages: {
      Red: [
        { image: Rstorage, title: "Storage Space" },
        { image: Rtyre, title: "10 Inch Alloy Rim Tyre" },
        { image: Rbrake, title: "Front Disk Rear Drum Brake" },
        { image: Rlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      White: [
        { image: storage, title: "Storage Space" },
        { image: tyre, title: "10 Inch Alloy Rim Tyre" },
        { image: diskbrake, title: "Front Disk Rear Drum Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      Grey: [
        { image: Gpstorage, title: "Storage Space" },
        { image: Gptyre, title: "10 Inch Alloy Rim Tyre" },
        { image: Gpbrake, title: "Front Disk Rear Drum Brake" },
        { image: Gplamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "199000",
    colors: ["White", "Red", "Grey"],
    specifications: {
      Motor: "1200 W BLDC QS",
      Speed: "50-55 KM/H",
      Range: "80-90 KM",
      Battery: "72V 32 AH GRAPHENE",
      TyreSize: "10 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DRUM BRAKE",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The PRONTO electric bike is a reliable and efficient choice for everyday commuting. It’s equipped with a powerful 1200 W BLDC QS motor, allowing you to reach speeds of 50-55 km/h, making it perfect for city rides. The bike features a 72V 32 AH graphene battery, providing a solid range of 80-90 km, ensuring you can cover significant distances on a single charge. With 10-inch alloy rims, the PRONTO offers stability and a smooth ride on various road surfaces.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "50-55 Km/h",
      },
      {
        title: "Range",
        value: "80-90 KM",
      },
      {
        title: "Battery Type",
        value: "72V 32 AH GRAPHENE",
      },
      {
        title: "Electric Motor Power",
        value: "1200 Watts",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 18 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },

  {
    id: 2,
    name: "LEOPARD",
    images: {
      Silver: [g1, g2, g3, g4],
      Green: [gre1, gre2, gre3, gre4],
      White: [LW1, LW2, LW3],
    },
    featureImages: {
      Silver: [
        { image: Grstorage, title: "Storage Space" },
        { image: Grtyre, title: "12 Inch Alloy Rim Tyre" },
        { image: Grbrake, title: "Front & Rear Bigger Disk Brake" },
        { image: Grlamp, title: "Daylight Running Lamp" },
        { image: LMNew, title: "Digital Meter" },
        { image: LCnew, title: "Cruise Control" },
      ],
      Green: [
        { image: Fgrestorage, title: "Storage Space" },
        { image: Fgretyre, title: "12 Inch Alloy Rim Tyre" },
        { image: Fgrebrake, title: "Front & Rear Bigger Disk Brake" },
        { image: Fgrelamp, title: "Daylight Running Lamp" },
        { image: LMNew, title: "Digital Meter" },
        { image: LCnew, title: "Cruise Control" },
      ],
      White: [
        { image: LW2, title: "Storage Space" },
        { image: LW3, title: "12 Inch Alloy Rim Tyre" },
        { image: LW1, title: "Rear View" },
        // { image: Fgrelamp, title: "Daylight Running Lamp" },
        // { image: LMNew, title: "Digital Meter" },
        // { image: LCnew, title: "Cruise Control" },
      ],
    },
    price: "260000",
    colors: ["Silver", "Green", "White"],
    specifications: {
      Motor: "1200 W BLDC QS",
      Speed: "50-55 KM/H",
      Range: "120 KM (ECO MODE)",
      Battery: "72V 38 AH GRAPHENE",
      TyreSize: "12 INCH ALLOY RIM",
      Brake: "FRONT & REAR BIGGER DISK",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The LEOPARD electric bike is our main luxury product, offering a blend of style and power. It comes with a 1200 W motor, enabling speeds of 50-55 km/h. The bike features a 72V 38 AH graphene battery, providing a range of up to 120 km in eco mode. With 12-inch alloy rims, it ensures durability and stability. The front and rear bigger disk brakes offer enhanced safety. Available in grey, white and green, the bike’s sleek and modern design makes it perfect for city rides.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "50-55 Km/h",
      },
      {
        title: "Range",
        value: "120 KM (ECO MODE)",
      },
      {
        title: "Battery Type",
        value: "72V 38 Ah Graphene",
      },
      {
        title: "Electric Motor Power",
        value: "1200 Watts",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 18 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },

  {
    id: 3,
    name: "JOY",
    images: {
      Red: [Rj1, Rj2],
      White: [Wj1],
      Grey: [JG1],
    },
    featureImages: {
      Red: [
        // { image: Rstorage, title: "Storage Space" },
        { image: Jtyre, title: "Tyre" },
        { image: Rbrake, title: "Disk Brake" },
        { image: Rlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      White: [
        { image: Jstorage, title: "Storage Space" },
        { image: Jbrake, title: "Tyre" },
        { image: diskbrake, title: "Disk Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      Grey: [
        { image: Jstorage, title: "Storage Space" },
        { image: tyre, title: "Tyre" },
        { image: diskbrake, title: "Disk Brake" },
        { image: JGlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "175000",
    colors: ["White", "Red", "Grey"],
    specifications: {
      Motor: "1000 W BLDC QS",
      Speed: "40-45 KM/H",
      Range: "55-60 KM",
      Battery: "60V 26 AH GRAPHENE",
      TyreSize: "10 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DRUM BRAKE",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The JOY electric bike is a versatile and affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 1000 W BLDC QS motor, enabling speeds of 40-45 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 60V 26 AH graphene battery, providing a range of 55-60 km, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "40-45 Km/h",
      },
      {
        title: "Range",
        value: "55-60 KM",
      },
      {
        title: "Battery Type",
        value: "60V 26 AH GRAPHENE",
      },
      {
        title: "Electric Motor Power",
        value: "1000 Watts",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 18 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },
  {
    id: 4,
    name: "LEOPARD PRO",
    images: {
      Green: [LP1, LP2],
      Silver: [LP4],
      White: [LPW_Main],
    },
    featureImages: {
      Silver: [
        { image: LP4, title: "Back view" },
        { image: diskbrake, title: "Disk Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      Green: [
        { image: Jstorage, title: "Storage Space" },
        { image: tyre, title: "Tyre" },
        { image: diskbrake, title: "Disk Brake" },
        { image: LP3, title: "Tyre and disk brake" },
        { image: LP5, title: "Handle and meter view" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      White: [
        { image: LPW_Main, title: "Front view" },

        { image: LP4, title: "Back view" },
        { image: diskbrake, title: "Disk Brake" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "280000",
    colors: ["Green", "Silver", "White"],
    specifications: {
      Motor: "2000 W QS World Top Class",
      Speed: "70 KM/H",
      Battery: "72V 38 AH Chilwee Brand GOLD GRAPHENE",
      TyreSize: "12 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DISK BRAKE",

      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The Leopard Pro electric bike is a versatile and affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 2000 W BLDC QS motor, enabling speeds of 70 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 72V 38 AH graphene battery, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "70 Km/h",
      },
      {
        title: "Battery Type",
        value: "72V 38 AH GOLD GRAPHENE",
      },
      {
        title: "Battery Management System",
        value: "Available",
      },
      {
        title: "EBS Regenration System",
        value: "Available",
      },
      {
        title: "Anti-theft System",
        value: "Available",
      },
      {
        title: "Electric Motor Power",
        value: "2000 Watts",
      },
      {
        title: "Ground Clearence",
        value: "172 mm",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 18 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },
  {
    id: 5,
    name: "ZIPPY",
    images: {
      Blue: [Z4, Z3, Z5, Z6, Z7, Z8],
      Black: [ZB1, ZB2],
    },
    featureImages: {
      Blue: [
        // { image: Jstorage, title: "Storage Space" },
        // { image: tyre, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        { image: Z3, title: "Handle and meter view" },
        { image: Z4, title: "Full Side view" },
        { image: Z5, title: "Front Side view" },

        { image: Z6, title: "Top view" },
        { image: Z7, title: "Head-light and front storage" },
        { image: Z8, title: "Tyre and Bottom view" },

        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      Black: [
        { image: ZB1, title: "Front view" },
        { image: ZB2, title: "Tyre and Storage view" },
        // { image: diskbrake, title: "Disk Brake" },
        // { image: daylight, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "97000",
    colors: ["Blue", "Black"],
    specifications: {
      Motor: "350 W Pure Copper Mottor",
      Speed: "30 - 35 KM/H",
      Battery: "48V 12AH Top brand Chilwee",
      Loading: "80 KG",
      Range: "35 - 40 KM",
      Brake: "DRUM",
    },
    description: `The Zippy electric bike is a versatile and very affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 350 W motor, enabling speeds of 35 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 48V 12AH Chilwee Brand battery, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "30 - 35 Km/h",
      },
      {
        title: "Range",
        value: "35 - 40 Km",
      },
      {
        title: "Battery Type",
        value: "48V 12AH top brand Chilwee",
      },
      {
        title: "Cost",
        value: "0.5 Unit / Charging",
      },
      {
        title: "Anti-theft System",
        value: "Available",
      },
      {
        title: "Electric Motor Power",
        value: "350 Watts",
      },
      {
        title: "Loading",
        value: "80 kg",
      },
      {
        title: "Warranty Period",
        value: "12 Months Motor & 06 Months Batteries and Controller warranty",
      },
      {
        title: "Speed Ride",
        value: "3 Modes available",
      },
    ],
  },
  {
    id: 6,
    name: "Sample",
    images: {
      Blue: [Z4, Z3, Z5, Z6, Z7, Z8],
      Black: [ZB1, ZB2],
    },
    featureImages: {
      Blue: [
        // { image: Jstorage, title: "Storage Space" },
        // { image: tyre, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        { image: Z3, title: "Handle and meter view" },
        { image: Z4, title: "Full Side view" },
        { image: Z5, title: "Front Side view" },

        { image: Z6, title: "Top view" },
        { image: Z7, title: "Head-light and front storage" },
        { image: Z8, title: "Tyre and Bottom view" },

        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      Black: [
        { image: ZB1, title: "Front view" },
        { image: ZB2, title: "Tyre and Storage view" },
        // { image: diskbrake, title: "Disk Brake" },
        // { image: daylight, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "97000",
    colors: ["Blue", "Black"],
    specifications: {
      Motor: "350 W Pure Copper Mottor",
      Speed: "30 - 35 KM/H",
      Battery: "48V 12AH Top brand Chilwee",
      Loading: "80 KG",
      Range: "35 - 40 KM",
      Brake: "DRUM",
    },
    description: `The Zippy electric bike is a versatile and very affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 350 W motor, enabling speeds of 35 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 48V 12AH Chilwee Brand battery, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "30 - 35 Km/h",
      },
      {
        title: "Range",
        value: "35 - 40 Km",
      },
      {
        title: "Battery Type",
        value: "48V 12AH top brand Chilwee",
      },
      {
        title: "Cost",
        value: "0.5 Unit / Charging",
      },
      {
        title: "Anti-theft System",
        value: "Available",
      },
      {
        title: "Electric Motor Power",
        value: "350 Watts",
      },
      {
        title: "Loading",
        value: "80 kg",
      },
      {
        title: "Warranty Period",
        value: "12 Months Motor & 06 Months Batteries and Controller warranty",
      },
      {
        title: "Speed Ride",
        value: "3 Modes available",
      },
    ],
  },
];
