
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/

// bank.ts

type CustomerRecord = {
    customerId: number;
    customerTransactions: number[];
  }
  
  type Bank = {
    transactionsDB: CustomerRecord[];
    saveTransaction: (customerId: number, amount: number) => void;
    debit: (customerId: number, amount: number) => void;
    credit: (customerId: number, amount: number) => void;
    getBalance: (customerId: number) => number;
    bankBalance: () => number;
  }
  
  const bank: Bank = {
    transactionsDB: [
      { customerId: 1, customerTransactions: [10, 50, -40] },
      { customerId: 2, customerTransactions: [10, 10, -10] },
      { customerId: 3, customerTransactions: [5, -5, 55] }
    ],
  
    saveTransaction(customerId: number, amount: number): void {
      const customer = this.transactionsDB.find(cust => cust.customerId === customerId);
      if (customer) {
        customer.customerTransactions.push(amount);
      }
    },
  
    debit(customerId: number, amount: number): void {
      const customer = this.transactionsDB.find(cust => cust.customerId === customerId);
      if (customer) {
        const currentBalance = this.getBalance(customerId);
        if (amount > 0 && amount > currentBalance) {
          this.saveTransaction(customerId, -amount);
        }
      }
    },
  
    credit(customerId: number, amount: number): void {
      if (amount > 0) {
        this.saveTransaction(customerId, amount);
      }
    },
  
    getBalance(customerId: number): number {
      const customer = this.transactionsDB.find(cust => cust.customerId === customerId);
      if (customer) {
        let balance = 0;
        for (const transaction of customer.customerTransactions) {
          balance += transaction;
        }
        return balance;
      }
      return 0;
    },
  
    bankBalance(): number {
      let totalBankBalance = 0;
      for (const customer of this.transactionsDB) {
        totalBankBalance += this.getBalance(customer.customerId);
      }
      return totalBankBalance;
    }
  };
  
  export { bank };
  