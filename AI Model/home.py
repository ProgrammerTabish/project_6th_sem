import cv2
import os
import tkinter as tk
from tkinter import messagebox
from datetime import datetime

# Set up directories for saving images
check_dir = "check"
add_dir = "add"
os.makedirs(check_dir, exist_ok=True)
os.makedirs(add_dir, exist_ok=True)

# Function to capture image and save it with timestamped name
def capture_image(directory):
    # Open camera
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    
    if ret:
        # Generate timestamped name for the image
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        image_name = f"{timestamp}.png"
        
        # Save the image in the specified directory
        image_path = os.path.join(directory, image_name)
        cv2.imwrite(image_path, frame)
        messagebox.showinfo("Success", "Image captured and saved successfully!")
    else:
        messagebox.showerror("Error", "Failed to capture image!")
    
    # Release the camera and destroy the window
    cap.release()
    cv2.destroyAllWindows()

# Function to handle "Check" button click
def check_button_click():
    capture_image(check_dir)

# Function to handle "Add" button click
def add_button_click():
    capture_image(add_dir)

# Create the GUI window
window = tk.Tk()
window.title("Image Capture")
window.geometry("200x100")

# Create "Check" button
check_button = tk.Button(window, text="Check", command=check_button_click)
check_button.pack(pady=10)

# Create "Add" button
add_button = tk.Button(window, text="Add", command=add_button_click)
add_button.pack(pady=10)

# Start the GUI event loop
window.mainloop()
