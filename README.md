📊 Match Analysis Dashboard
A simple and extendable web application to visualize live and static match data including win probabilities, team formation strength, and injury likelihood.

📁 Project Structure


├── index.html         # Main page displaying basic match info
├── script.js          # Handles data updates for index.html
├── styles.css         # Styles for the main match page
│
├── analysis.html      # Dedicated page for deeper match analysis
├── analysis.js        # JavaScript logic for the analysis page
├── analysis.css       # Styles for the analysis dashboard
│
└── README.md          # Project documentation
🔧 Description
This project is divided into two main parts:

Match Overview Page (index.html)
Displays key metrics like:

Formation Strength

Win Probability

Loss Probability

Team Strength

Injury Likelihood

Detailed Analysis Page (analysis.html)
A more in-depth view for future enhancements like:

Historical comparisons

Player-specific statistics

Strategy insights

💡 Features
Static data for demonstration (currently hardcoded in JS files)

Modular structure — easy to expand or connect with APIs

Responsive and clean layout using plain HTML, CSS, and JS

🚀 How to Run
Clone or download the project folder.

Open index.html in your browser to view the basic stats.

Open analysis.html to see the advanced analysis layout.

Modify script.js and analysis.js to integrate real-time data or connect with an API.

🔄 Future Enhancements
Connect with real sports APIs (e.g., SportRadar, RapidAPI)

Add charts and graphs using libraries like Chart.js or D3.js

Add user input or filters to customize the data shown

