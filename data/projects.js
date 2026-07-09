export const projects = [
  {
    id: 'financial_dashboard',
    tech: ['Microsoft Excel', 'Power BI'],
    githubUrl: 'https://github.com/arifinfn9/financial-statement-analysis',
    liveUrl: '',
    image: '/assets/project1.png',
    hasDetails: true,
    period: '2023 - 2025',
    imageFit: 'cover',
    aspectRatio: 'aspect-[16/11]',
    // KPI metrics displayed as highlight cards
    metrics: [
      { label: 'Revenue', value: 'Rp 74.85 M', change: '+3.10%', up: true },
      { label: 'Net Profit', value: 'Rp 9.22 M', change: '+30.30%', up: true },
      { label: 'Current Ratio', value: '4.15x', change: '+0.06', up: true },
      { label: 'Debt-to-Equity', value: '0.84x', change: '-0.04', up: true },
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
  /*
 
{
  id: 'data_cleaning',
  tech: ['Microsoft Excel', 'Power Query'],
  githubUrl: 'https://github.com/arifinfn9',
  liveUrl: '',
  image: '/assets/project2.png',
  hasDetails: true,
  period: '2026',
  // KPI metrics for Project 2
  metrics: [
    { label: 'Total Records', value: '124,500+', change: '+15.2%', up: true },
    { label: 'Time Saved', value: '95%', change: '-3.8h', up: true },
    { label: 'Accuracy Rate', value: '100.00%', change: '+1.2%', up: true },
    { label: 'Anomalies Isolated', value: '1,842', change: '-420', up: true },
  ],
  // Validation & Cleansing Rules mapping
  cleansingRules: [
    { field: 'Transaction Date', issue: 'Mixed US/UK formats (DD-MM-YYYY vs MM/DD/YYYY)', transformation: 'DateTime.FromText with locale settings' },
    { field: 'Vendor Name', issue: 'Trailing spaces, duplicates, inconsistent capitalization', transformation: 'Text.Trim & Text.Proper casing standardization' },
    { field: 'Account Code', issue: 'Missing codes for operational ledger transactions', transformation: 'Table.NestedJoin lookup with Chart of Accounts' },
    { field: 'Amount', issue: 'Text format containing currency symbols (Rp, $, commas)', transformation: 'Text.Select to isolate numbers and cast to Decimal' },
  ],
  // Monthly volume stats
  cleansingStats: [
    { month: 'Jan 2025', rawRows: '32,450', duplicates: '412', errors: '280', cleanedRows: '31,758' },
    { month: 'Feb 2025', rawRows: '28,900', duplicates: '350', errors: '210', cleanedRows: '28,340' },
    { month: 'Mar 2025', rawRows: '35,120', duplicates: '580', errors: '340', cleanedRows: '34,200' },
    { month: 'Apr 2025', rawRows: '31,800', duplicates: '498', errors: '198', cleanedRows: '31,104' },
  ],
},

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
