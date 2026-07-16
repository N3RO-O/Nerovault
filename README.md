# Savings Tracker Implementation Plan

## Changes Made:

1. **Data Schema**: Added `savings` array to the data model
2. **Updated `totals()`**: Deducts savings from Available Free to Spend
3. **New "Savings" tab** in the activity panel (alongside Bills, Goals, History)
4. **New "Savings" field tab** in the Add modal
5. **Savings Ledger UI**: Shows monthly contributions + cumulative running balance
6. **Backup/Restore/CSV**: Updated to include savings data