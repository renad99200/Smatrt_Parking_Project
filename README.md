﻿# VALET - Smart Parking Management System
 
![image](https://github.com/user-attachments/assets/3473ac90-812a-4769-b323-0907c320a632)

## Description

VALET is an intelligent parking management system that leverages computer vision and machine learning technologies to detect and monitor parking spaces in real-time. The system analyzes video footage of parking lots to identify available and occupied parking spots, helping drivers find parking spaces efficiently while providing parking lot operators with valuable occupancy data and cost calculation features.

## Features

- **Real-time Parking Space Detection**: Automatically identifies and monitors parking spaces using advanced computer vision algorithms
- **Occupancy Tracking**: Accurately counts and displays the number of available and occupied parking spots
- **Cost Calculation**: Precisely tracks parking duration and calculates costs based on time spent
- **User-friendly Web Interface**: Clean, intuitive dashboard for monitoring parking status
- **Video Upload Capability**: Seamlessly upload and analyze parking lot videos
- **Responsive Design**: Optimized for various devices and screen sizes
- **Help & Support System**: Integrated contact form for user assistance
- **Visual Indicators**: Color-coded parking spots (green for available, red for occupied)

## Project Structure

```
my_parking_try/
├── My-Valet-main/                # Main project directory
│   ├── app.py                    # Flask application entry point
│   ├── util.py                   # Utility functions for parking detection
│   ├── New WinRAR ZIP archive/   # Additional source files
│   │   ├── cost.py               # Cost calculation functionality
│   │   ├── main.py               # Core detection algorithm
│   │   └── model.p.py            # Machine learning model
│   ├── static/                   # Static web assets
│   │   ├── css/                  # Stylesheets
│   │   ├── js/                   # JavaScript files
│   │   │   └── script.js         # Client-side functionality
│   │   ├── mask_1920_1080.png    # Parking space mask image
│   │   └── normalize.css         # CSS normalization
│   └── templates/                # HTML templates
│       ├── detect.html           # Detection page
│       ├── help.html             # Help and support page
│       └── index.html            # Main landing page
├── app/                          # Secondary app structure
│   ├── routes.py                 # API route definitions
│   ├── static/                   # Static assets for secondary app
│   └── templates/                # Templates for secondary app
├── models/                       # Trained machine learning models
│   └── model.pkl                 # Serialized model file
├── uploads/                      # Directory for uploaded videos
└── venv/                         # Python virtual environment
```

## Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git (optional)

### Steps

1. Clone the repository or download the source code:

```bash
git clone https://github.com/yourusername/my_parking_try.git
cd my_parking_try
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
.\venv\Scripts\activate
```

3. Install the required dependencies:

```bash
pip install flask opencv-python scikit-image numpy matplotlib werkzeug
```

4. Set up the project:

```bash
python -m pip install -e .
```

## Usage

1. Start the Flask application:

```bash
python My-Valet-main\app.py
```

2. Open your web browser and navigate to:

```
http://localhost:5000
```

3. Upload a parking lot video using the interface

4. View the results showing available and occupied parking spaces

5. Check the cost calculation based on parking duration

### Example

The system will analyze the uploaded video and display:
- Number of available parking spaces
- Number of occupied parking spaces
- Cost calculation based on parking duration

## Technologies Used

- **Python**: Core programming language
- **Flask**: Web framework for the application
- **OpenCV**: Computer vision library for image and video processing
- **scikit-image**: Image processing library
- **NumPy**: Numerical computing library
- **Matplotlib**: Visualization library
- **HTML/CSS/JavaScript**: Frontend web technologies
- **Machine Learning**: For parking space classification

## Screenshots

![Dashboard](https://placeholder.com/dashboard.png)
*Main dashboard showing parking availability*

![Detection](https://placeholder.com/detection.png)
*Parking space detection in action*

![Cost Calculation](https://placeholder.com/cost.png)
*Cost calculation based on parking duration*

## Future Improvements / TODO

- Implement real-time video streaming from IP cameras
- Add user authentication and management system
- Develop mobile applications for iOS and Android
- Integrate with payment gateways for automated billing
- Add historical data analysis and reporting features
- Implement notifications for parking availability
- Enhance the machine learning model for better accuracy in various lighting conditions
