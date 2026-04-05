import { Transaction } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockTransactions: Transaction[] = [
  // Salaries (monthly, around 60k)
  {
    id: uuidv4(),
    date: '2024-10-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income',
    note: 'Monthly salary'
  },
  {
    id: uuidv4(),
    date: '2024-11-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2024-12-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-01-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-02-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-03-01T00:00:00.000Z',
    description: 'HDFC Salary',
    amount: 60000,
    category: 'Salary',
    type: 'income'
  },
  // Freelance
  {
    id: uuidv4(),
    date: '2024-10-15T00:00:00.000Z',
    description: 'Freelance Project',
    amount: 25000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2024-11-20T00:00:00.000Z',
    description: 'Upwork Payment',
    amount: 15000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2024-12-10T00:00:00.000Z',
    description: 'Client Payment',
    amount: 30000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-01-25T00:00:00.000Z',
    description: 'Freelance Work',
    amount: 20000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-02-18T00:00:00.000Z',
    description: 'Project Completion',
    amount: 35000,
    category: 'Freelance',
    type: 'income'
  },
  // Expenses - Food
  {
    id: uuidv4(),
    date: '2024-10-02T00:00:00.000Z',
    description: 'Swiggy Order',
    amount: -450,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-05T00:00:00.000Z',
    description: 'Zomato Delivery',
    amount: -320,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-08T00:00:00.000Z',
    description: 'Restaurant Dinner',
    amount: -1200,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-12T00:00:00.000Z',
    description: 'Grocery Shopping',
    amount: -2500,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-15T00:00:00.000Z',
    description: 'Swiggy Lunch',
    amount: -280,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-20T00:00:00.000Z',
    description: 'Cafe Coffee',
    amount: -150,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-25T00:00:00.000Z',
    description: 'Pizza Hut',
    amount: -800,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-03T00:00:00.000Z',
    description: 'Dominos Pizza',
    amount: -650,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-07T00:00:00.000Z',
    description: 'Swiggy Dinner',
    amount: -380,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-10T00:00:00.000Z',
    description: 'Big Bazaar Grocery',
    amount: -1800,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-14T00:00:00.000Z',
    description: 'McDonalds',
    amount: -500,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-18T00:00:00.000Z',
    description: 'Starbucks Coffee',
    amount: -250,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-22T00:00:00.000Z',
    description: 'Zomato Order',
    amount: -420,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-28T00:00:00.000Z',
    description: 'Restaurant Lunch',
    amount: -950,
    category: 'Food',
    type: 'expense'
  },
  // Transport
  {
    id: uuidv4(),
    date: '2024-10-03T00:00:00.000Z',
    description: 'Uber Ride',
    amount: -180,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-06T00:00:00.000Z',
    description: 'Ola Cab',
    amount: -220,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-10T00:00:00.000Z',
    description: 'Metro Pass',
    amount: -150,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-14T00:00:00.000Z',
    description: 'Fuel Station',
    amount: -2000,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-18T00:00:00.000Z',
    description: 'Uber to Airport',
    amount: -350,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-22T00:00:00.000Z',
    description: 'Bus Ticket',
    amount: -50,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-05T00:00:00.000Z',
    description: 'Rapido Bike',
    amount: -120,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-09T00:00:00.000Z',
    description: 'Parking Fee',
    amount: -100,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-13T00:00:00.000Z',
    description: 'Ola Auto',
    amount: -80,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-17T00:00:00.000Z',
    description: 'Fuel',
    amount: -1800,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-21T00:00:00.000Z',
    description: 'Uber Ride',
    amount: -250,
    category: 'Transport',
    type: 'expense'
  },
  // Shopping
  {
    id: uuidv4(),
    date: '2024-10-04T00:00:00.000Z',
    description: 'Amazon Purchase',
    amount: -2500,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-09T00:00:00.000Z',
    description: 'Flipkart Order',
    amount: -1800,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-16T00:00:00.000Z',
    description: 'Myntra Shopping',
    amount: -3200,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-23T00:00:00.000Z',
    description: 'BigBasket',
    amount: -1200,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-02T00:00:00.000Z',
    description: 'Amazon Electronics',
    amount: -4500,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-08T00:00:00.000Z',
    description: 'Nykaa Cosmetics',
    amount: -1500,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-15T00:00:00.000Z',
    description: 'Croma Store',
    amount: -2800,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-25T00:00:00.000Z',
    description: 'Decathlon Sports',
    amount: -2200,
    category: 'Shopping',
    type: 'expense'
  },
  // Health
  {
    id: uuidv4(),
    date: '2024-10-11T00:00:00.000Z',
    description: 'Pharmacy Medicine',
    amount: -300,
    category: 'Health',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-19T00:00:00.000Z',
    description: 'Doctor Consultation',
    amount: -500,
    category: 'Health',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-06T00:00:00.000Z',
    description: 'Health Checkup',
    amount: -1500,
    category: 'Health',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-19T00:00:00.000Z',
    description: 'Dental Clinic',
    amount: -800,
    category: 'Health',
    type: 'expense'
  },
  // Entertainment
  {
    id: uuidv4(),
    date: '2024-10-07T00:00:00.000Z',
    description: 'Netflix Subscription',
    amount: -499,
    category: 'Entertainment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-13T00:00:00.000Z',
    description: 'Movie Tickets',
    amount: -600,
    category: 'Entertainment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-21T00:00:00.000Z',
    description: 'Spotify Premium',
    amount: -119,
    category: 'Entertainment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-04T00:00:00.000Z',
    description: 'Concert Tickets',
    amount: -2500,
    category: 'Entertainment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-12T00:00:00.000Z',
    description: 'OTT Subscription',
    amount: -399,
    category: 'Entertainment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-24T00:00:00.000Z',
    description: 'Gaming Purchase',
    amount: -1200,
    category: 'Entertainment',
    type: 'expense'
  },
  // Utilities
  {
    id: uuidv4(),
    date: '2024-10-01T00:00:00.000Z',
    description: 'Electricity Bill',
    amount: -2500,
    category: 'Utilities',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-01T00:00:00.000Z',
    description: 'Water Bill',
    amount: -800,
    category: 'Utilities',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-10-01T00:00:00.000Z',
    description: 'Internet Bill',
    amount: -1200,
    category: 'Utilities',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-01T00:00:00.000Z',
    description: 'Electricity Bill',
    amount: -2600,
    category: 'Utilities',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-01T00:00:00.000Z',
    description: 'Gas Bill',
    amount: -600,
    category: 'Utilities',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-01T00:00:00.000Z',
    description: 'Mobile Recharge',
    amount: -299,
    category: 'Utilities',
    type: 'expense'
  },
  // Investment
  {
    id: uuidv4(),
    date: '2024-10-05T00:00:00.000Z',
    description: 'Mutual Fund SIP',
    amount: -5000,
    category: 'Investment',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-05T00:00:00.000Z',
    description: 'Mutual Fund SIP',
    amount: -5000,
    category: 'Investment',
    type: 'expense'
  },
  // Other
  {
    id: uuidv4(),
    date: '2024-10-17T00:00:00.000Z',
    description: 'ATM Withdrawal',
    amount: -5000,
    category: 'Other',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-11-16T00:00:00.000Z',
    description: 'Bank Charges',
    amount: -50,
    category: 'Other',
    type: 'expense'
  },
  // More for December, January, February, March
  // I'll add a few more to reach 50+
  {
    id: uuidv4(),
    date: '2024-12-02T00:00:00.000Z',
    description: 'Swiggy Order',
    amount: -350,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-12-05T00:00:00.000Z',
    description: 'Amazon Shopping',
    amount: -2100,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2024-12-15T00:00:00.000Z',
    description: 'Freelance Payment',
    amount: 28000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-01-03T00:00:00.000Z',
    description: 'Uber Ride',
    amount: -200,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-01-10T00:00:00.000Z',
    description: 'Zomato Delivery',
    amount: -400,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-01-20T00:00:00.000Z',
    description: 'Client Payment',
    amount: 22000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-02-05T00:00:00.000Z',
    description: 'Grocery',
    amount: -2300,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-02-12T00:00:00.000Z',
    description: 'Fuel',
    amount: -1900,
    category: 'Transport',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-02-25T00:00:00.000Z',
    description: 'Project Payment',
    amount: 32000,
    category: 'Freelance',
    type: 'income'
  },
  {
    id: uuidv4(),
    date: '2025-03-08T00:00:00.000Z',
    description: 'Restaurant',
    amount: -1100,
    category: 'Food',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-03-15T00:00:00.000Z',
    description: 'Shopping',
    amount: -1600,
    category: 'Shopping',
    type: 'expense'
  },
  {
    id: uuidv4(),
    date: '2025-03-22T00:00:00.000Z',
    description: 'Freelance',
    amount: 18000,
    category: 'Freelance',
    type: 'income'
  },
];