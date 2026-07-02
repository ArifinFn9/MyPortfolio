export const projects = [
  {
    id: 'financial_dashboard',
    tech: ['Microsoft Excel', 'Power BI'],
    githubUrl: 'https://github.com/arifinfn9',
    liveUrl: '',
    image: '/assets/project1.png',
    hasDetails: true,
    // KPI metrics displayed as highlight cards
    metrics: [
      { label: 'Revenue', value: 'Rp 12.8 M', change: '+18.4%', up: true },
      { label: 'Net Profit', value: 'Rp 2.1 M', change: '+24.6%', up: true },
      { label: 'Current Ratio', value: '1.85', change: '+0.32', up: true },
      { label: 'Debt-to-Equity', value: '0.47', change: '-0.15', up: true },
    ],
    // Financial ratios table data
    ratios: [
      { name: 'Gross Profit Margin', y2023: '32.1%', y2024: '35.8%', status: 'up' },
      { name: 'Net Profit Margin', y2023: '12.4%', y2024: '16.7%', status: 'up' },
      { name: 'Return on Assets (ROA)', y2023: '8.2%', y2024: '10.5%', status: 'up' },
      { name: 'Return on Equity (ROE)', y2023: '14.6%', y2024: '18.3%', status: 'up' },
      { name: 'Current Ratio', y2023: '1.53', y2024: '1.85', status: 'up' },
      { name: 'Debt-to-Equity Ratio', y2023: '0.62', y2024: '0.47', status: 'down' },
    ],
    // Revenue breakdown by quarter
    quarterData: [
      { q: 'Q1 2024', revenue: 'Rp 2.8 M', profit: 'Rp 420 Jt' },
      { q: 'Q2 2024', revenue: 'Rp 3.1 M', profit: 'Rp 510 Jt' },
      { q: 'Q3 2024', revenue: 'Rp 3.4 M', profit: 'Rp 580 Jt' },
      { q: 'Q4 2024', revenue: 'Rp 3.5 M', profit: 'Rp 630 Jt' },
    ],
  },

  {
    id: 'data_cleaning',
    tech: ['Microsoft Excel', 'Power Query'],
    githubUrl: 'https://github.com/arifinfn9',
    liveUrl: '',
    image: '/assets/project2.png',
    hasDetails: false,
  },
  /*
  {
    id: 'budgeting_tool',
    tech: ['Google Sheets', 'Excel VBA'],
    githubUrl: 'https://github.com/arifinfn9',
    liveUrl: '',
    image: '/assets/project3.png',
    hasDetails: false,
  },
  {
    id: 'financial_analysis_simulation',
    tech: ['Microsoft Excel', 'Power Query', 'Power BI'],
    githubUrl: 'https://github.com/arifinfn9',
    liveUrl: '',
    image: '/assets/project_dummy.png',
    hasDetails: true,
    metrics: [
      { label: 'Revenue (Pendapatan)', value: 'Rp XX.X M', change: '+XX.X%', up: true },
      { label: 'Net Profit (Laba)', value: 'Rp X.X M', change: '+XX.X%', up: true },
      { label: 'Current Ratio', value: 'X.XX', change: '+X.XX', up: true },
      { label: 'Debt-to-Equity', value: 'X.XX', change: '-X.XX', up: true },
    ],
    ratios: [
      { name: 'Gross Profit Margin', y2023: 'XX.X%', y2024: 'XX.X%', status: 'up' },
      { name: 'Net Profit Margin', y2023: 'XX.X%', y2024: 'XX.X%', status: 'up' },
      { name: 'Return on Equity (ROE)', y2023: 'XX.X%', y2024: 'XX.X%', status: 'up' },
      { name: 'Debt-to-Equity Ratio', y2023: 'X.XX', y2024: 'X.XX', status: 'down' },
    ],
    quarterData: [
      { q: 'Kuartal 1', revenue: 'Rp X.X M', profit: 'Rp XXX Jt' },
      { q: 'Kuartal 2', revenue: 'Rp X.X M', profit: 'Rp XXX Jt' },
      { q: 'Kuartal 3', revenue: 'Rp X.X M', profit: 'Rp XXX Jt' },
      { q: 'Kuartal 4', revenue: 'Rp X.X M', profit: 'Rp XXX Jt' },
    ],
  },
  */
];
