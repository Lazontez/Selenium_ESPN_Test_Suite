# 📌 ESPN.com Automation Test Suite

## 📖 Project Overview
The ESPN.com Automation Test Suite ensures a seamless user experience across key functionalities of ESPN’s website. It automates testing for navigation, live scores, video playback, authentication, and other critical interactions to detect UI, functional, and performance issues.

## 📌 Tech Stack
- **Programming Language:** JavaScript
- **Automation Framework:** Selenium WebDriver
- **Test Runner:** Mocha
- **Reporting Tool:** Allure / Extent Reports

## 📌 Prerequisites
- Install **Node.js** 
- Install Selenium WebDriver
- Install a browser driver

## 📌 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/espn-test-suite.git
   ```
2. Install dependencies:
   - **For JavaScript (Node.js)**
     ```bash
     npm install selenium-webdriver mocha chai
     ```
## 📌 Running the Tests
- **Run all tests:**
  ```bash
  npm test   # JavaScript
  pytest     # Python
  ```

## 📌 Test Cases Covered
| **Test ID** | **Test Case** | **Description** |
|------------|--------------|----------------|
| TC001 | Homepage Load Test | Ensures homepage loads within 3 seconds |
| TC002 | Navigation Bar Test | Checks if all major links work correctly |
| TC003 | Live Scores Update | Verifies real-time score updates without refresh |
| TC004 | Search Functionality | Ensures search results are relevant |
| TC005 | Video Playback | Confirms videos play without lag/errors |
| TC006 | Login Test | Validates user authentication |
| TC007 | Subscription Payment | Ensures smooth ESPN+ subscription flow |
| TC008 | Mobile Responsiveness | Checks UI on mobile devices |
| TC009 | Fantasy Sports Management | Tests team creation and updates |
| TC010 | Logout Test | Ensures users can log out successfully |

## 📌 Reporting
After running tests, generate a test report:
```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## 📌 Future Improvements
- Add API testing for ESPN’s backend services
- Implement CI/CD using GitHub Actions or Jenkins
- Extend test coverage to mobile apps

---

This README provides setup instructions, test execution steps, and reporting details. 🚀
