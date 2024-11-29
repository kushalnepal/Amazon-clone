# Amazon Clone

This project is a **functional Amazon Clone** built with **React** and **Context API**. It replicates key features of the Amazon shopping experience, including adding products to the cart, managing items in the basket, and calculating the subtotal during checkout.

---

## Features

### **1. Add to Cart**
- Products can be added to the shopping basket from the product listings.
- The `Context API` is used for global state management, ensuring a seamless experience as users navigate the app.

### **2. View and Manage Cart**
- The **Checkout Page** displays all items in the basket, including:
  - Product image
  - Title
  - Price
  - Rating (displayed as stars ⭐)
- Users can:
  - View all selected items.
  - Remove individual items directly from the basket using the "Remove from Basket" button.

### **3. Subtotal Calculation**
- The **Subtotal Component** dynamically calculates and displays the total price of all items in the basket.
- Provides a clear overview of the cart's total value before proceeding to payment (future enhancement).

### **4. User Authentication (Basic)**
- Includes a placeholder login page for user authentication.
- This feature is not yet fully functional but provides a foundation for further development.

---

## How It Works

1. **Adding Items to Cart**:
   - Items are added to the basket using a `dispatch` action, which updates the global state.

2. **Viewing and Editing Cart**:
   - The basket's contents are retrieved via the `Context API` and displayed dynamically on the Checkout Page.
   - Users can remove items, and the application updates the state in real time.

3. **Calculating Subtotal**:
   - The subtotal is computed using the basket's current state, ensuring an accurate total based on the items and their prices.

---

## Future Improvements
- Fully functional user authentication using Firebase or a custom backend.
- Integration with a payment gateway (e.g., Stripe) for secure transactions.
- A dedicated product listing page with filters and search functionality.
- Improved UI/UX for a more polished shopping experience.

---

## Technologies Used
- **React**: Component-based architecture for building the UI.
- **Context API**: For state management and seamless sharing of data across components.
- **CSS**: Custom styles for a visually appealing layout.

---

## How to Run the Project
1. Clone the repository:  
   ```bash
   git clone https://github.com/kushalnepal/Amazon-clone.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd Amazon-clone
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Start the development server:  
   ```bash
   npm start
   ```
