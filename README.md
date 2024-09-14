# Parking System using AI with ANPR

## Project Overview
This project implements an intelligent parking system utilizing Artificial Intelligence (AI) for Automatic Number Plate Recognition (ANPR). The goal is to streamline vehicle access to parking lots by automatically identifying and authorizing vehicles, providing a seamless and secure parking experience.

### Features:
- **Automatic Number Plate Recognition (ANPR)**: Uses OpenCV and Pytesseract to capture and process vehicle number plates.
- **Real-time Vehicle Authorization**: Detects unauthorized vehicles before entry, reducing manual labor and ensuring high security.
- **Web Interface**: Developed using the MERN stack, the web interface allows real-time monitoring and management of parking lot entries and exits.
- **AI Model for Recognition**: Integrates machine learning models for improved accuracy in number plate detection.

## Technologies Used
- **AI & Machine Learning**: Python, OpenCV, Pytesseract
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hardware**: Camera for capturing images, connected to an Ubuntu Single Board Computer (SBC)

## System Architecture
1. **ANPR System**: Installed at the parking lot entrance, the camera captures images of vehicle number plates.
2. **AI Processing**: The captured images are processed by the ANPR model using OpenCV and Pytesseract to extract the license plate number.
3. **Authorization**: The extracted number is checked against a database of authorized vehicles. Unauthorized vehicles are flagged, and entry is denied.
4. **Web Portal**: Administrators can manage vehicle entries and exits, monitor the parking lot in real time, and update the list of authorized vehicles through the MERN-based dashboard.

## Installation & Setup
To set up this project locally, follow these steps:

### Prerequisites:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/)
- Python 3.x with `OpenCV` and `Pytesseract` libraries installed

### Steps:
1. **Clone the repository:**
    ```bash
    git clone https://github.com/ProgrammerTabish/project_6th_sem
    cd project_6th_sem
    ```

2. **Backend Setup:**
    - Navigate to the backend folder and install the dependencies:
      ```bash
      cd backend
      npm install
      ```
    - Start the backend server:
      ```bash
      npm start
      ```

3. **Frontend Setup:**
    - Navigate to the frontend folder and install dependencies:
      ```bash
      cd frontend
      npm install
      ```
    - Run the frontend server:
      ```bash
      npm start
      ```

4. **AI Model Setup**:
    - Ensure you have Python installed with the required libraries:
      ```bash
      pip install opencv-python pytesseract
      ```

5. **MongoDB**:
    - Make sure MongoDB is running locally or provide the MongoDB URI in the environment variables.

6. **Environment Variables**:
    Create a `.env` file in the backend folder with the following:
    ```env
    MONGO_URI=your_mongo_db_uri
    PORT=5000
    ```

### Running the Project:
Once the servers are running and the camera is connected, the system will automatically capture and process vehicle number plates, authorizing or denying access based on the registered data.

## Future Enhancements
- Integrating a mobile app for parking lot monitoring.
- Implementing real-time SMS/Email notifications for parking status.
- Enhancing the AI model for multilingual number plate recognition.

## License
This project is licensed under the MIT License -  see the [LICENSE](./LICENSE) file for details.
## Contact
For any questions or feedback, feel free to reach out:
- **Name**: Shaikh Zaka Tabish
- **Email**: programmertabish@gmail.com
- **GitHub**: https://github.com/ProgrammerTabish
