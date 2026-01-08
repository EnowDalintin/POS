import BChicken from "../assets/images/POS-Files/butter-chicken-4.jpg";
import palakpaneer from "../assets/images/POS-Files/Saag-Paneer-1.jpg";
import biryani from "../assets/images/POS-Files/hyderabadibiryani.jpg";

export const popularDishes = [
    {
        id:1,
        image: BChicken,
        name: 'Butter Chicken',
        numberOfOrders:250,

    },
    {
        id:2,
        image: palakpaneer,
        name: 'Cake Lemon',
        numberOfOrders:100,

    },
    {
        id:3,
        image: biryani,
        name: 'Bread Banso',
        numberOfOrders:68,

    },
    {
        id:4,
        image: BChicken,
        name: 'Butter Chicken',
        numberOfOrders:250,

    },
       {
        id:5,
        image: BChicken,
        name: 'Butter Chicken',
        numberOfOrders:250,

    },
    {
        id:6,
        image: palakpaneer,
        name: 'Cake Lemon',
        numberOfOrders:100,

    },
    {
        id:7,
        image: biryani,
        name: 'Bread Banso',
        numberOfOrders:68,

    },
    {
        id:8,
        image: BChicken,
        name: 'Butter Chicken',
        numberOfOrders:250,

    },
];
export const tables = [
    
    {id:1,name:"Table 1", status:"Booked", initial:"ED",seats:8},
    {id:2,name:"Table 2", status:"Available", initial:"AM",seats:10},
    {id:3,name:"Table 3", status:"Booked", initial:"RT",seats:2},
    {id:4,name:"Table 4", status:"Available", initial:"AM",seats:6},
    {id:5,name:"Table 5", status:"Booked", initial:"SH",seats:4},
    {id:6,name:"Table 6", status:"Booked", initial:"RU",seats:5},
    {id:7,name:"Table 7", status:"Available", initial:"NK",seats:7},
    {id:8,name:"Table 8", status:"Booked", initial:"VL",seats:3},
    {id:9,name:"Table 9", status:"Available", initial:"CH",seats:5},
    {id:10,name:"Table 10", status:"Available", initial:"SB",seats:8},
    {id:11,name:"Table 11", status:"Booked", initial:"ED",seats:5},
    {id:12,name:"Table 12", status:"Available", initial:"AM",seats:6},
    {id:13,name:"Table 13", status:"Booked", initial:"RT",seats:4},
    {id:14,name:"Table 14", status:"Available", initial:"AM",seats:5},
    {id:15,name:"Table 15", status:"Booked", initial:"SH",seats:9},
    
];
export const startersItem = [
    {
      id: 1,
      name: "Paneer Tikka",
      price: 250,
      category: "Vegetarian"
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: 300,
      category: "Non-Vegetarian"
    },
    {
      id: 3,
      name: "Tandoori Chicken",
      price: 350,
      category: "Non-Vegetarian"
    },
    {
      id: 4,
      name: "Samosa",
      price: 100,
      category: "Vegetarian"
    },
    {
      id: 5,
      name: "Aloo Tikki",
      price: 120,
      category: "Vegetarian"
    },
    {
      id: 6,
      name: "Hara Bhara Kebab",
      price: 220,
      category: "Vegetarian"
    }
  ];
  
export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "Non-Vegetarian"
  }
];


export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot"
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold"
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold"
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold"
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold"
  }
];


export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetarian"
  }
];


export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetarian"
  }
];


export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "Non-Vegetarian"
  }
];


export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic"
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcoholic"
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcoholic"
  },
  {
    id: 4,
    name: "Rum",
    price: 350,
    category: "Alcoholic"
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcoholic"
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcoholic"
  }
];


export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetarian"	
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
  
  }
];

export const menus = [
  { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
  { id: 4, name: "Soups", bgColor: "#735f32" ,icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430" ,icon: "🍕", items: pizzas },
  { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e" ,icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Salads", bgColor: "#5b45b0" ,icon: "🥗", items: salads }
]
export const formatDate=(date)=>{
        const months=[
            'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`;
    };