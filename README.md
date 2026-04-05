# Finance Dashboard UI

This project is a finance dashboard interface built with React, TypeScript, Redux Toolkit, and Vite.

## Project features

- Dashboard overview with summary cards and chart visualizations
- Transactions section with search, filtering, sorting, CSV export, and admin management
- Insights section with top spending category, month-over-month comparison, and top merchants
- Role switching between `viewer` and `admin` to demonstrate UI changes
- Dark mode support and responsive layout across devices
- Local storage persistence for transactions, role, and theme preferences

## Setup

```bash
npm install
npm run dev
```

Then open the app in your browser at the local Vite address shown in the terminal.

## Usage

- Use the sidebar or bottom navigation to move between Dashboard, Transactions, and Insights
- Switch roles from the top navbar to enable admin actions
- Admins can add, edit, and delete transactions on the Transactions page
- Use filters to search by description, category, transaction type, or date range
- Export the current transaction view to CSV from the Transactions page

## Notes

- This is a frontend demo using mock transaction data and browser storage
- The dashboard dynamically reflects the current transaction dataset and user role
- Simple, clean UI and plain CSS make the app easy to extend if needed

