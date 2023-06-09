import mysql.connector

# Establish a connection to the MySQL database
def create_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="your_username",
        password="your_password",
        database="your_database"
    )
    return connection

# Insert a license number into the table
def insert(license):
    connection = create_connection()
    cursor = connection.cursor()
    
    try:
        # Check if the license number already exists
        if check(license):
            print("License number already exists.")
        else:
            # Insert the license number into the table
            insert_query = "INSERT INTO your_table (license) VALUES (%s)"
            cursor.execute(insert_query, (license,))
            connection.commit()
            print("License number inserted successfully.")
    except mysql.connector.Error as error:
        print("Error inserting license number:", error)
    
    cursor.close()
    connection.close()

# Check if a license number exists in the table
def check(license):
    connection = create_connection()
    cursor = connection.cursor()

    select_query = "SELECT license FROM your_table WHERE license = %s"
    cursor.execute(select_query, (license,))
    result = cursor.fetchone()
    
    cursor.close()
    connection.close()
    
    if result:
        return True
    else:
        return False

# Example usage
license_number = "ABC123"
insert(license_number)
