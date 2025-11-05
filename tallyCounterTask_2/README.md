# Task 2 – Tally Counter REST API

## Overview
This project implements a simple **Tally Counter REST API** using **Node.js 18**, **Express 4.18.2**, and **Winston 3.11.0**.  
The application provides three endpoints to manage a counter:  
- `/counter-read` → read the current counter value  
- `/counter-increase` → increase the counter by one  
- `/counter-reset` → reset the counter to zero  

All operations are logged with Winston at different log levels (`info`, `warn`, `error`).  
Logs are stored both in the console and in log files under the `logs/` directory.

---

## Project Structure
```bash
tallyCounterTask_2/
|── src/
│ ├── logger.js
│ └── main.js
│ └── counter.js
│ └── routes.js
│── logs/
│── package.json
│── package.json
│── .gitignore
│── rest.http
```

## Installation
- Clone the repository
- change directory to
```bash
cd tallyCounterTask_2
```
- install npm dependencies
```bash
npm install
```
- run the main.js
```bash
node src/main.js
```
or
```bash
npm run dev
```

## License
This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.
