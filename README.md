### Module

Database Performance & Monitoring

---

## Objective

Improve database performance by optimizing SQL queries, creating indexes, monitoring database statistics, and validating backups.

---

## Features

- SQL Query Optimization
- Database Index Creation
- Database Monitoring Dashboard
- Backup Validation
- Performance Reports

---

## Technologies

- Node.js
- PostgreSQL
- pg
- dotenv

---

## Project Structure

```
config/
scripts/
reports/
backups/
README.md
package.json
```

---

## Installation

Clone the project

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

---

## Configure Environment

Create a `.env` file:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=1234
DB_NAME=day25
```

---

## Available Scripts

Optimize SQL queries:

```
npm run optimize
```

Create indexes:

```
npm run index
```

Generate monitoring report:

```
npm run monitor
```

Validate backups:

```
npm run backup-check
```

---

## Output Files

Reports generated in the `reports/` folder:

- monitoringReport.json
- backupValidation.json

---

## SQL Commands

Create index:

```sql
CREATE INDEX idx_employee_department
ON employees(department);
```

Check indexes:

```sql
SELECT *
FROM pg_indexes
WHERE tablename='employees';
```

Analyze query:

```sql
EXPLAIN ANALYZE
SELECT *
FROM employees
WHERE department='IT';
```

---
