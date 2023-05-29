from PIL import Image
import cv2
import numpy as np
import pytesseract

pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'

cascade = cv2.CascadeClassifier("haarcascade_russian_plate_number.xml")

def extract_num(img_filename):
    img = cv2.imread(img_filename)
    # Convert image to gray
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    nplate = cascade.detectMultiScale(gray, 1.1, 4)
    # Crop portion and extract text
    for (x, y, w, h) in nplate:
        wT, hT, cT = img.shape
        a, b = (int(0.02 * wT), int(0.02 * hT))
        plate = img[y + a:y + h - a, x + b:x + w - b, :]
        # Make the image darker to improve text recognition
        kernel = np.ones((1, 1), np.uint8)
        plate = cv2.dilate(plate, kernel, iterations=1)
        plate = cv2.erode(plate, kernel, iterations=1)
        plate_gray = cv2.cvtColor(plate, cv2.COLOR_BGR2GRAY)
        (thresh, plate) = cv2.threshold(plate_gray, 127, 255, cv2.THRESH_BINARY)
        # Read the text on the plate
        lnum = pytesseract.image_to_string(Image.fromarray(plate))
        lnum = ''.join(e for e in lnum if e.isalnum())
        stat = lnum[0:2]
        cv2.rectangle(img, (x, y), (x + w, y + h), (51, 51, 255), 2)
        cv2.rectangle(img, (x - 1, y - 40), (x + w + 1, y), (51, 51, 255), -1)
        cv2.putText(img, lnum, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 255), 2)
        
        cv2.imshow("plate", plate)

    cv2.imwrite("Result.png", img)
    cv2.imshow("Result", img)
    # print(lnum)
    return lnum
    # if cv2.waitKey(0) == 113:
    exit()
    cv2.destroyAllWindows()
    
   
p = extract_num("c2.png")
print(p)