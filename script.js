// ==========================
// Part 1: Date Display
// ==========================

// Create a new Date object for the current date
const today = new Date();

// Extract month, day, and year from the Date object
// Note: getMonth() returns 0-based months (0 = January), so we add 1
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

// Add a leading zero to month and day if they are single digits
// String() converts the number to a string so .padStart() can be used
const formattedMonth = String(month).padStart(2, "0");
const formattedDay = String(day).padStart(2, "0");

// Build the final date string in MM/DD/YYYY format
const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// Display the result on the page
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// Define four test values as strings
const strA = "50";        // numeric string → integer
const strB = "11.75";     // numeric string → decimal
const strC = "hi";     // non-numeric string → NaN
const strD = "10000";       // another numeric string → integer

// --- Convert each value using Number() ---
const numA = Number(strA);
const numB = Number(strB);
const numC = Number(strC);
const numD = Number(strD);

// --- Check isNaN and isInteger for each converted value ---
const isNanA = Number.isNaN(numA);
const isNanB = Number.isNaN(numB);
const isNanC = Number.isNaN(numC);
const isNanD = Number.isNaN(numD);

const isIntA = Number.isInteger(numA);
const isIntB = Number.isInteger(numB);
const isIntC = Number.isInteger(numC);
const isIntD = Number.isInteger(numD);

// --- Part 4 (Conditionals) woven into Part 2 ---
// Build a descriptive message for each value using if/else

// Condition 1: check if the converted value is NaN
let messageC;
if (isNanC) {
  messageC = " This value is not a valid number.";
} else {
  messageC = "This value converted successfully.";
}

// Condition 2: check if a converted value is an integer
let messageA;
if (isIntA) {
  messageA = " This value is an integer.";
} else {
  messageA = "This value is not an integer.";
}

// Build one combined HTML string for all four results
const conversionHTML =
  "<p><strong>Original:</strong> '" + strA + "' → " +
    "<strong>Converted:</strong> " + numA + " → " +
    "<strong>isNaN:</strong> " + isNanA + " → " +
    "<strong>isInteger:</strong> " + isIntA + "<br>" +
    "<em>" + messageA + "</em></p>" +

  "<p><strong>Original:</strong> '" + strB + "' → " +
    "<strong>Converted:</strong> " + numB + " → " +
    "<strong>isNaN:</strong> " + isNanB + " → " +
    "<strong>isInteger:</strong> " + isIntB + "</p>" +

  "<p><strong>Original:</strong> '" + strC + "' → " +
    "<strong>Converted:</strong> " + numC + " → " +
    "<strong>isNaN:</strong> " + isNanC + " → " +
    "<strong>isInteger:</strong> " + isIntC + "<br>" +
    "<em>" + messageC + "</em></p>" +

  "<p><strong>Original:</strong> '" + strD + "' → " +
    "<strong>Converted:</strong> " + numD + " → " +
    "<strong>isNaN:</strong> " + isNanD + " → " +
    "<strong>isInteger:</strong> " + isIntD + "</p>";

// Display the combined results on the page
document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Define price-related values for a simple shopping calculation
const itemPrice = 49.99;     // base price of the item
const taxRate = 0.0875;      // 8.75% sales tax
const shippingCost = 5.99;   // flat shipping fee

// Calculate subtotal, tax amount, and total cost
const subtotal = itemPrice + shippingCost;               // addition
const taxAmount = itemPrice * taxRate;                   // multiplication
const totalCost = subtotal + taxAmount;                  // addition

// Format currency values to two decimal places using toFixed()
const formattedSubtotal = subtotal.toFixed(2);
const formattedTax = taxAmount.toFixed(2);
const formattedTotal = totalCost.toFixed(2);

// Display the total with toLocaleString for a nicely formatted dollar amount
const localTotal = totalCost.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});

// Part 4 (Conditional 3): check if total is over a threshold
let shippingNote;
if (totalCost > 50) {
  shippingNote = "🎉 Your order qualifies for a loyalty reward!";
} else {
  shippingNote = "Add more items to qualify for a loyalty reward.";
}

// Build the output HTML string
const mathHTML =
  "<p><strong>Item Price:</strong> $" + itemPrice.toFixed(2) + "</p>" +
  "<p><strong>Shipping:</strong> $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Subtotal:</strong> $" + formattedSubtotal + "</p>" +
  "<p><strong>Tax (8.75%):</strong> $" + formattedTax + "</p>" +
  "<p><strong>Total:</strong> " + localTotal + "</p>" +
  "<p><em>" + shippingNote + "</em></p>";

// Display the math results on the page
document.getElementById("mathOutput").innerHTML = mathHTML;
