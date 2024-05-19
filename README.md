# Budget Tracker

## Overview

The Budget Tracker is a simple web application designed to help users manage their finances by tracking income and expenses. It allows users to add transactions, view their total budget, and reset their budget data when needed. The application provides a user-friendly interface for managing personal finances effectively.

## Features

- **Add Income**: Users can add income transactions with a description and amount.
- **Add Expense**: Users can add expense transactions with a description and amount.
- **Clear Input Fields**: Users can clear the input fields after entering transaction details.
- **Reset Budget**: Users can reset the entire budget, clearing all transactions and totals.
- **Error Handling**: The application displays error messages for invalid inputs.
- ** UI Updates**: The UI is automatically updated to reflect changes in total budget, income, and expenses.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS (Sass)**: For styling the application, using variables and mixins for a consistent design.
- **JavaScript**: For the functionality and interactivity of the application.

## File Structure

- `index.html`: The main HTML file that contains the structure of the application.
- `style.scss`: The Sass file used for styling the application.
- `style.css`: The compiled CSS file generated from the Sass file.
- `script.js`: The JavaScript file that contains the logic for managing the budget.

## Getting Started

### Prerequisites

To run the Budget Tracker application, you need a modern web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/budget-tracker.git
    cd budget-tracker
    ```

2. **Open `index.html`**:
    Open the `index.html` file in your web browser to start using the application.

## Usage

1. **Adding Income**:
    - Enter a description for the income in the "Description" input field.
    - Enter the amount of income in the "Amount" input field.
    - Click the "Add Income" button to add the income transaction.

2. **Adding Expense**:
    - Enter a description for the expense in the "Description" input field.
    - Enter the amount of expense in the "Amount" input field.
    - Click the "Add Expense" button to add the expense transaction.

3. **Clearing Input Fields**:
    - Click the "Clear" button to clear the current input fields.

4. **Resetting the Budget**:
    - Click the "All Clear" button to reset the entire budget, clearing all transactions and totals.

## Error Handling

If the user attempts to add a transaction without providing a valid description and amount, an error message will be displayed below the input section. The error message will automatically disappear after 3 seconds.
