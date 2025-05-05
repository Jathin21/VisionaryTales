# VisionaryTales

https://www.youtube.com/watch?v=BCHFMVSCYm0

Skip to content
Navigation Menu

    

Code
Issues
Pull requests
Actions
Projects
Wiki
Security

    Insights

Home

Project Proposal: Visionary Tales Using Google Vision API

Group 10
Jathin Kalyanam (ql7229)
Navdeep Singh (eh8100)
Sree Vardhan Reddy Aerva (ie3497)
Table of Contents

    Intro
    Description
    Code
    Demonstration
    Google Database Setup
    YouTube Video
    Analytics Report
    Presentation

1. Purpose of the Application

Visionary Tales is an interactive web application that transforms Pinterest API images into personalized digital narratives. By analyzing objects, scenes, and emotions in the images using the Google Vision API, the app creates captivating stories, enabling users to relive their experiences through visually-driven storytelling.
2. Overview of the Interface
User Input

    Functionality: Users can login, which will be analyzed to generate unique stories.
    Interface: The user-friendly interface includes a login portal for their Pinterest, which will fetch images, using Pinterest API,

Mockup Example:

    Collecting Images Using Pinterest API. image

Screenshot 2024-12-02 at 11 31 26 PM Screenshot 2024-12-02 at 11 30 09 PM

image
Image Analysis and Data Generation

    Process: Once an image is fetched, the Google Vision API analyzes the content, identifying objects, emotions, and scenes.
    Data Flow: The API’s results (labels and metadata) are stored in the backend database and linked to narrative elements.
    Database Interaction: The analysis results (labels, metadata) are saved and associated with the user's profile for easy future retrieval.

Story Generation (Generated Output)

    Functionality: Based on the API analysis, the system creates personalized stories that incorporate the fetched image.
    Interface: Users can view the generated stories along with the corresponding images and have options to edit, save, or share the story.

3. Storage and Retrieval of Data
Data Storage

    The image labels and generated stories are stored in a relational database, linked to the user’s profile for future access.

Retrieval and Interaction

    Users can revisit their profiles to view or manage previously generated stories and images. The dashboard provides options to interact with saved stories. image image image

4. Output of the Application
Screenshot 2024-12-02 at 11 31 45 PM
Primary Output

    A personalized narrative based on the image content analyzed by the Google Vision API.

Additional Features

    "Save for Later" option to revisit the story.
    "View/Edit Story" button to modify the generated narrative.
    User dashboard to easily access past stories and images.

5. Database Structure (Backend)
Key Tables:

    Users:
        Stores user details like user ID and name.

    Image Analysis Results:
        Stores the labels returned by the Google Vision API for each uploaded image.

    Generated Stories:
        Stores the created narratives and associated metadata.

    Saved Stories:
        Stores user-selected stories for future reference.

Data Flow:

    Image is fetched from Pinterest → Image sent to Google Vision API for analysis.
    Image labels are stored in the Image Analysis Results table.
    Generated stories are created and stored in the Generated Stories table.
    Users save stories, and they are stored in the Saved Stories table linked to their profiles.

Conclusion

Visionary Tales offers a unique storytelling experience by integrating advanced image analysis with creative narrative generation. The intuitive design and seamless interaction with Google's Vision API allow users to explore their memories in a novel, engaging way, while also providing the option to edit, save, and share their stories.
Add a custom footer
Pages 9

Home

    Project Proposal: Visionary Tales Using Google Vision API
    Table of Contents
    1. Purpose of the Application
    2. Overview of the Interface
    User Input
    Image Analysis and Data Generation
    Story Generation (Generated Output)
    3. Storage and Retrieval of Data
    Data Storage
    Retrieval and Interaction
    4. Output of the Application
    Primary Output
    Additional Features
    5. Database Structure (Backend)
    Key Tables:
    Data Flow:
    Conclusion

Analytics Report
Code
Demonstration
Description
Google Database Setup
Intro
Presentation

    Youtube Video

Add a custom sidebar
Clone this wiki locally
Footer
© 2025 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact

Home · nvdpsingh23/Project-2 Wiki
