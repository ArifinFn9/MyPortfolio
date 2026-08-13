export const projects = [
  {
    id: 'financial_dashboard',
    tech: ['Microsoft Excel', 'Power BI', 'Financial Statement Analysis', 'DAX & Data Modeling', 'Financial Ratios'],
    githubUrl: 'https://github.com/arifinfn9/financial-statement-analysis',
    liveUrl: '',
    image: '/assets/project_1.webp',
    hasDetails: true,
    period: '2023 - 2025',
    imageFit: 'cover',
    aspectRatio: 'aspect-[16/11]',
    // KPI metrics displayed as highlight cards
    metrics: [
      { key: 'revenue', up: true, isYoY: true },
      { key: 'netProfit', up: true, isYoY: true },
      { key: 'currentRatio', up: true, isYoY: true },
      { key: 'debtToEquity', up: true, isYoY: true },
    ],
    // Financial ratios table data covering 3 years
    ratios: [
      { name: 'Gross Profit Margin', y2023: '37.00%', y2024: '37.04%', y2025: '35.22%', status: 'down' },
      { name: 'Net Profit Margin', y2023: '10.29%', y2024: '9.75%', y2025: '12.32%', status: 'up' },
      { name: 'Return on Equity (ROE)', y2023: '11.26%', y2024: '10.56%', y2025: '12.52%', status: 'up' },
      { name: 'Current Ratio', y2023: '3.51', y2024: '4.09', y2025: '4.15', status: 'up' },
      { name: 'Debt-to-Equity Ratio', y2023: '0.92', y2024: '0.88', y2025: '0.84', status: 'down' },
    ],
    // Detailed financial statement items
    financialStatement: [
      { year: '2025', revenue: 'Rp74,850,923', netProfit: 'Rp9,224,927', grossProfit: 'Rp26,360,420', totalAssets: 'Rp135,544,351', totalEquity: 'Rp73,683,004', der: '0.84', npm: '12.3%' },
      { year: '2024', revenue: 'Rp72,597,188', netProfit: 'Rp7,079,369', grossProfit: 'Rp26,893,089', totalAssets: 'Rp126,040,905', totalEquity: 'Rp67,043,885', der: '0.88', npm: '9.8%' },
      { year: '2023', revenue: 'Rp67,909,901', netProfit: 'Rp6,990,572', grossProfit: 'Rp25,126,260', totalAssets: 'Rp119,267,076', totalEquity: 'Rp62,104,033', der: '0.92', npm: '10.3%' },
    ],
  },

  {
    id: 'budget_vs_actual',
    tech: ['Microsoft Excel', 'Power Query', 'Power BI', 'DAX & Data Modeling', 'Budgeting & Control'],
    githubUrl: 'https://github.com/arifinfn9/dashboard-budget-vs-actual',
    liveUrl: '',
    image: '/assets/project_2.webp',
    hasDetails: true,
    isWip: false,
    period: '2026',
    imageFit: 'cover',
    aspectRatio: 'aspect-[16/11]',
    // KPI metric summary cards based on Power BI 2026 Dashboard
    metrics: [
      { key: 'totalBudget', up: true, isYoY: false },
      { key: 'totalActual', up: true, isYoY: false },
      { key: 'budgetUtilization', up: true, isYoY: false },
      { key: 'remainingBudget', up: true, isYoY: false },
    ],
    // Departmental budget vs actual breakdown from Master Excel Dataset 2026 (Sorted A-Z)
    budgetTable: [
      { dept: 'Administrasi', budget: 'Rp 212,000,000', actual: 'Rp 150,920,000', variance: 'Rp 61,080,000', pct: '71.19%', status: 'normal' },
      { dept: 'IT & Sistem', budget: 'Rp 601,000,000', actual: 'Rp 545,100,000', variance: 'Rp 55,900,000', pct: '90.70%', status: 'warning' },
      { dept: 'Marketing', budget: 'Rp 662,000,000', actual: 'Rp 567,240,000', variance: 'Rp 94,760,000', pct: '85.69%', status: 'warning' },
      { dept: 'Operasional', budget: 'Rp 429,000,000', actual: 'Rp 326,880,000', variance: 'Rp 102,120,000', pct: '76.20%', status: 'normal' },
      { dept: 'SDM & HRD', budget: 'Rp 249,000,000', actual: 'Rp 163,560,000', variance: 'Rp 85,440,000', pct: '65.69%', status: 'normal' },
    ],
  },
];
