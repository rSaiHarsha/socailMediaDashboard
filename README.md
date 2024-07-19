# Social Media Analytics Dashboard

This project is a Social Media Analytics Dashboard developed using React for the front end and Java (Spring Boot) for the back end. The dashboard displays social media posts from different platforms and provides basic analytics.

## Features

- Display list of users with basic details:
  - Number of followers
  - Number of following
  - Number of posts
  - User details: Name, Category, Bio, Contact options, Links
- Detailed analytics for each user:
  - Account reached
  - Account engaged
  - Content shared
  - Ads run
  - Active promotions
  - Total stories
  - Total follows
  - Total posts
  - Total saves
  - Total comments
  - Total shares

## Technologies Used

- Front End: React
- Back End: Spring Boot
- In-memory Database: H2

## Getting Started

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- Maven

### Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/your-repo/social-media-analytics-dashboard.git
```
2. Navigate to the project directory for the front end:
```bash
 cd social-media-analytics-dashboard/frontend
```
3. Install the dependencies:
```bash
npm install
```
4. Navigate to the project directory for the back end:
```bash
cd ../dashboardBackend
```
5. Install the dependencies and build the project:

```bash
mvn clean install
```
##Running the Application
###Back End
1. Navigate to the back end directory:
```bash
cd backend
```
2. Run the Spring Boot application:

```bash
mvn spring-boot:run
```
### Front End
1. Navigate to the front-end directory:

```bash
cd frontend
```
2. Start the React development server:
```bash
npm start
```
Open your browser and navigate to http://localhost:3000 to view the application.


##API Endpoints
###User Endpoints
1. GET /api/users - Get all users
2. GET /api/users/{id} - Get user by ID
3. POST /api/users - Create a new user
4. PUT /api/users/{id} - Update user by ID
5. DELETE /api/users/{id} - Delete user by ID

## Contact
For any inquiries or feedback, please contact me via [LinkedIn](https://www.linkedin.com/in/sai-harsha-rayapati/).
