# 🛡️ Nerovault — Free Budget & Savings Tracker

**Nerovault** is a premium, client-side personal finance vault engineered to help individuals track their income, budget allocations, upcoming bills, and savings goals seamlessly. 

Built with a privacy-first mindset, the application has **zero database footprint**—100% of your financial data is processed and stored locally on your machine's browser memory.

---

## ✨ Features

- **Scheduled Bill Tracking:** System dynamically tracks due dates and manages states between Locked (future funds), Ready to Pay, and Paid.
- **Dynamic Cashflow Analytics:** Powered by Chart.js, featuring an interactive doughnut chart breaking down Spent, Committed, and Free-to-spend funds in real-time.
- **Data Persistence:** Complete browser local storage preservation. Close tabs or refresh safely without data loss.
- **Secure Backup Infrastructure:** Export your ledger state instantly into a portable JSON file to sync across devices or keep local backups[cite: 1].
- **Adaptive Micro-budgeting:** Automatic calculator showing your exact available daily budget based on remaining calendar days in the month[cite: 1].

---

## 🛠️ Tech Stack & Engineering

- **Frontend Core:** Semantic HTML5, Vanilla JavaScript (ES6+)
- **Styling Architecture:** Tailwind CSS (Modern Glassmorphic utility utilities)[cite: 1]
- **Data Visualization:** Chart.js[cite: 1]
- **Storage Layer:** Browser Native Web Storage API (`localStorage`)[cite: 1]
- **Deployment Platform:** Vercel (Edge network network delivery)

---

## 🚀 Local Deployment / Development

Since this project has zero external dependencies or heavy node frameworks, you can spin it up locally in seconds.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/N3RO-O/Nerovault.git](https://github.com/N3RO-O/Nerovault.git)
   cd Nerovault
