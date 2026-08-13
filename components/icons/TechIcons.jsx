import React from "react";

// Microsoft Excel (Official Green Doc SVG Icon)
export const ExcelIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#107C41" />
    <path d="M14 2v5.5h5.5L14 2z" fill="#33C481" />
    <path d="M8.5 11l2 3-2 3h1.8l1.1-1.8.1.1 1.1 1.7h1.8l-2.1-3 2-3h-1.7l-1 1.6h-.1L10.2 11H8.5z" fill="#FFFFFF" />
  </svg>
);

// Power BI (Official Gold Bar Chart SVG Icon)
export const PowerBIIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811" />
    <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811" />
  </svg>
);

// Power Query (Official Teal & Cyan Transform Database Icon)
export const PowerQueryIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#00838F" />
    <path d="M6 6h12v3H6z" fill="#E0F7FA" />
    <path d="M6 10.5h12v3H6z" fill="#80DEEA" />
    <path d="M6 15h7v3H6z" fill="#4DD0E1" />
    <path d="M15.5 14.5l3.5 3.5M19 14.5l-3.5 3.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Python (Official Blue & Gold Snake SVG Icon)
export const PythonIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M11.9 2c-5.1 0-4.8 2.2-4.8 2.2v2.3h4.9v.7H5.2S2 6.8 2 12c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.4c0-2.7 2.4-2.6 2.4-2.6h4.8s2.3.1 2.3-2.3V4.8S17 2 11.9 2zm-2.6 1.5a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB" />
    <path d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2v-2.3h-4.9v-.7h6.8s3.2.4 3.2-4.8c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.4c0 2.7-2.4 2.6-2.4 2.6h-4.8s-2.3-.1-2.3 2.3v4.8s-.9 2.8 4.2 2.8zm2.6-1.5a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B" />
  </svg>
);

// Google Sheets (Official Google Sheets Green Doc Icon)
export const GoogleSheetsIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#0F9D58" />
    <path d="M14 2v5.5h5.5L14 2z" fill="#87CEAC" />
    <rect x="7" y="11" width="10" height="8" rx="1" fill="#FFFFFF" />
    <path d="M7 13.5h10M7 16h10M12 11v8" stroke="#0F9D58" strokeWidth="1.2" />
  </svg>
);

// Canva (Official Canva Logo)
export const CanvaIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 100 100" className={className} {...props}>
    <defs>
      <linearGradient id="canva-c-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c4cc" />
        <stop offset="60%" stopColor="#7d2ae7" />
        <stop offset="100%" stopColor="#6420ff" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#canva-c-grad)" />
    <path
      fill="#ffffff"
      d="M71.586 60.256c-.412 0-.775.349-1.153 1.11-4.268 8.653-11.638 14.776-20.168 14.776-9.862 0-15.969-8.903-15.969-21.202 0-20.833 11.608-32.879 21.803-32.879 4.765 0 7.674 2.994 7.674 7.759 0 5.654-3.213 8.648-3.213 10.643 0 .895.557 1.437 1.661 1.437 4.437 0 9.644-5.098 9.644-12.3 0-6.982-6.078-12.114-16.273-12.114-16.85 0-31.824 15.621-31.824 37.235 0 16.73 9.553 27.786 24.294 27.786 15.646 0 24.693-15.566 24.693-20.619 0-1.119-.572-1.632-1.169-1.632"
    />
  </svg>
);

// Microsoft Word (Official Blue Doc SVG Icon)
export const WordIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#185ABD" />
    <path d="M14 2v5.5h5.5L14 2z" fill="#4796F2" />
    <path d="M7 11h1.5l1 3.5 1-3.5h1.2l1 3.5 1-3.5H17l-1.6 6h-1.3l-1.1-3.6-1.1 3.6H10.6L7 11z" fill="#FFFFFF" />
  </svg>
);

// Microsoft PowerPoint (Official Orange Doc SVG Icon)
export const PowerPointIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#C43E1C" />
    <path d="M14 2v5.5h5.5L14 2z" fill="#E86C4F" />
    <path d="M8.5 11h3.5a2 2 0 010 4H10v2H8.5V11zm1.5 1.4v1.2h2a.6.6 0 100-1.2h-2z" fill="#FFFFFF" />
  </svg>
);

// Google Forms (Official Purple Form Doc Icon)
export const GoogleFormsIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#7248B9" />
    <path d="M14 2v5.5h5.5L14 2z" fill="#B39DDB" />
    <circle cx="8" cy="11.5" r="1" fill="#FFFFFF" />
    <rect x="10.5" y="11" width="5.5" height="1" rx="0.5" fill="#FFFFFF" />
    <circle cx="8" cy="14.5" r="1" fill="#FFFFFF" />
    <rect x="10.5" y="14" width="5.5" height="1" rx="0.5" fill="#FFFFFF" />
    <circle cx="8" cy="17.5" r="1" fill="#FFFFFF" />
    <rect x="10.5" y="17" width="5.5" height="1" rx="0.5" fill="#FFFFFF" />
  </svg>
);

// Google Workspace (Official Multi-color App Grid Badge Icon)
export const GoogleWorkspaceIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#1A73E8" />
    <path d="M6 7h3.5v3.5H6z" fill="#EA4335" />
    <path d="M10.25 7h3.5v3.5h-3.5z" fill="#FBBC04" />
    <path d="M14.5 7H18v3.5h-3.5z" fill="#34A853" />
    <path d="M6 13.5h3.5V17H6z" fill="#4285F4" />
    <path d="M10.25 13.5h3.5V17h-3.5z" fill="#FFFFFF" />
    <path d="M14.5 13.5H18V17h-3.5z" fill="#A142F4" />
  </svg>
);
