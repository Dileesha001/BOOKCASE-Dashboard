// BOOKCASE Sanctuary Executive Dataset

export const kpiMetrics = {
  totalRevenue: 4850900, // LKR
  revenueGrowth: "+18.4%",
  totalSells: 1842, // books
  sellsGrowth: "+24.1%",
  activeInventory: 4250, // total items in stock
  lowStockAlerts: 4,
  outOfStockAlerts: 2,
  sanctuaryMembers: 12480,
  memberGrowth: "+12.8%",
  averageOrderValue: 2633 // LKR
};

export const salesTimeline = {
  daily: [
    { label: "Mon", revenue: 145000, orders: 55 },
    { label: "Tue", revenue: 168000, orders: 62 },
    { label: "Wed", revenue: 210000, orders: 81 },
    { label: "Thu", revenue: 195000, orders: 74 },
    { label: "Fri", revenue: 310000, orders: 115 },
    { label: "Sat", revenue: 420000, orders: 158 },
    { label: "Sun", revenue: 380000, orders: 140 }
  ],
  weekly: [
    { label: "Week 1", revenue: 1050000, orders: 390 },
    { label: "Week 2", revenue: 1210000, orders: 460 },
    { label: "Week 3", revenue: 1140000, orders: 435 },
    { label: "Week 4", revenue: 1450900, orders: 557 }
  ],
  monthly: [
    { label: "Jan", revenue: 3200000, orders: 1200 },
    { label: "Feb", revenue: 3550000, orders: 1340 },
    { label: "Mar", revenue: 3900000, orders: 1480 },
    { label: "Apr", revenue: 4100000, orders: 1560 },
    { label: "May", revenue: 4450000, orders: 1690 },
    { label: "Jun", revenue: 4850900, orders: 1842 }
  ]
};

export const genreDistribution = [
  { genre: "Novels & Literature", percentage: 32, sales: 589, color: "#D4A017" },
  { genre: "Education & Exams", percentage: 24, sales: 442, color: "#10B981" },
  { genre: "Translations", percentage: 18, sales: 331, color: "#3B82F6" },
  { genre: "Sci-Fi & Fantasy", percentage: 14, sales: 258, color: "#8B5CF6" },
  { genre: "Poetry & Arts", percentage: 12, sales: 222, color: "#EC4899" }
];

export const initialInventory = [
  {
    id: "BK-1001",
    title: "Mandodari (මන්දෝදරී)",
    author: "Mohan Raj Madawala",
    category: "Novels",
    price: 2450,
    discountPrice: 1960,
    stock: 142,
    status: "in-stock",
    salesCount: 420,
    rating: 4.9,
    featured: true,
    coverBadge: "20% OFF Gold Seal"
  },
  {
    id: "BK-1002",
    title: "Senkottan (සෙන්කොට්ටං)",
    author: "Mahinda Prasad Masimbula",
    category: "Novels",
    price: 1850,
    stock: 88,
    status: "in-stock",
    salesCount: 310,
    rating: 4.8,
    featured: true
  },
  {
    id: "BK-1003",
    title: "Advanced Level Physics Masterguide",
    author: "Prof. K. L. Siripala",
    category: "Education",
    price: 3200,
    stock: 15,
    status: "low-stock",
    salesCount: 295,
    rating: 4.9
  },
  {
    id: "BK-1004",
    title: "The Silent Sanctuary (නිහඬ අරණ)",
    author: "Saman Gunadasa",
    category: "Translations",
    price: 1650,
    stock: 0,
    status: "out-of-stock",
    salesCount: 180,
    rating: 4.6
  },
  {
    id: "BK-1005",
    title: "Cosmic Horizons: Sri Lanka Sci-Fi",
    author: "Anura Jayasekara",
    category: "Sci-Fi",
    price: 2100,
    stock: 64,
    status: "in-stock",
    salesCount: 155,
    rating: 4.7
  },
  {
    id: "BK-1006",
    title: "Whispers of Samanalakanda",
    author: "Kamani Ratnayake",
    category: "Poetry",
    price: 1200,
    stock: 6,
    status: "low-stock",
    salesCount: 142,
    rating: 4.5
  },
  {
    id: "BK-1007",
    title: "Sri Lankan History Anthology Vol. 1",
    author: "Dr. P. E. Fernando",
    category: "Education",
    price: 3800,
    stock: 45,
    status: "in-stock",
    salesCount: 130,
    rating: 4.9
  },
  {
    id: "BK-1008",
    title: "Tales of the Sigiriya Kingdom",
    author: "Ruwan Wijewardene",
    category: "Short Stories",
    price: 1400,
    stock: 0,
    status: "out-of-stock",
    salesCount: 98,
    rating: 4.4
  },
  {
    id: "BK-1009",
    title: "Dune (Sinhala Translation)",
    author: "Frank Herbert (Trans. N. Perera)",
    category: "Translations",
    price: 2900,
    stock: 8,
    status: "low-stock",
    salesCount: 215,
    rating: 4.9
  }
];

export const recentTransactions = [
  {
    id: "ORD-9481",
    customer: "Kasun Jayasinghe",
    bookTitle: "Mandodari (මන්දෝදරී)",
    qty: 2,
    total: 3920,
    paymentMethod: "Credit Card (Visa)",
    status: "Completed",
    date: "2026-07-25 21:42"
  },
  {
    id: "ORD-9480",
    customer: "Dilini Fernando",
    bookTitle: "Advanced Level Physics Masterguide",
    qty: 1,
    total: 3200,
    paymentMethod: "Online Banking",
    status: "Completed",
    date: "2026-07-25 20:15"
  },
  {
    id: "ORD-9479",
    customer: "Nuwan Abeysekara",
    bookTitle: "Senkottan (සෙන්කොට්ටං)",
    qty: 1,
    total: 1850,
    paymentMethod: "Cash on Delivery",
    status: "Processing",
    date: "2026-07-25 19:30"
  },
  {
    id: "ORD-9478",
    customer: "Thilini Perera",
    bookTitle: "Dune (Sinhala Translation)",
    qty: 1,
    total: 2900,
    paymentMethod: "Koko Pay",
    status: "Completed",
    date: "2026-07-25 18:05"
  },
  {
    id: "ORD-9477",
    customer: "Mahesh Gunaratne",
    bookTitle: "Cosmic Horizons: Sri Lanka Sci-Fi",
    qty: 3,
    total: 6300,
    paymentMethod: "Credit Card (MasterCard)",
    status: "Completed",
    date: "2026-07-25 17:22"
  }
];

export const businessGoals = [
  {
    id: 1,
    title: "Q3 Revenue Target (LKR 6.0M)",
    category: "Sales & Financials",
    current: 4.85,
    target: 6.0,
    unit: "M LKR",
    percentage: 80.8,
    status: "On Track",
    dueDate: "2026-09-30"
  },
  {
    id: 2,
    title: "Sanctuary Reader Memberships (15,000 Users)",
    category: "Audience Growth",
    current: 12480,
    target: 15000,
    unit: "Members",
    percentage: 83.2,
    status: "On Track",
    dueDate: "2026-08-31"
  },
  {
    id: 3,
    title: "BOOKCASE Mobile App Active Installs",
    category: "Digital Expansion",
    current: 8200,
    target: 10000,
    unit: "Downloads",
    percentage: 82.0,
    status: "On Track",
    dueDate: "2026-08-15"
  },
  {
    id: 4,
    title: "Inventory Turn Rate (<30 Days Stockout)",
    category: "Supply Chain",
    current: 92,
    target: 98,
    unit: "% In-Stock Rate",
    percentage: 93.8,
    status: "Needs Attention",
    dueDate: "2026-07-31"
  }
];
