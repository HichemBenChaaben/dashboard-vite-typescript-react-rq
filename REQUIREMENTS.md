# Context

You are a front-end developer at a food/beverage retail company, responsible for creating the front-end application that summarizes the company's revenues. The back-end application is a RESTful API provided to you, so you will focus solely on the front-end.

## Objective

The objective of this exercise is to evaluate your front-end development abilities. You are asked to create a visually appealing, fully responsive, and interactive dashboard with tables and charts.

## Requirements

There are a few technologies we require you to use:

- TypeScript
- React

You are free to use any additional dependencies needed to complete this assignment.

# What we ask you to do

We want you to create a single page with content and filters. The filters will include inputs and selectors to interact with the data displayed on the page.

### Mandatory requirements

All the points listed below are mandatory for this assignment.

- Responsiveness:
  - The page must display nicely on mobile, tablet, and desktop devices.
- Filters:
  - **Period selector**: Weekly or monthly. This filter applies to the cumulative revenue line chart and the average revenue bar chart. Selecting a different value changes the data presentation in the charts.
  - **Value Type Selector**: Revenues or margin. This filter applies to any component displaying revenue values. When the user switches to margin, the components must display margin values instead.
- Tables:
  - List of the **15 latest invoices by date**, with id, date, customer name, region, and invoice total (or total margin, depending on the selected value).
  - List of our **best customers**, with their name, region, number of invoices, and total revenue (or total margin, depending on the selected value).
- Charts:
  - Bar chart presenting the **total revenues per product category** (or total margin, depending on the selected value).
  - Line chart presenting the sum of **monthly cumulative invoice revenues** (or total margin, depending on the selected value). We are **not** asking for the revenues for a specific period, but for the **cumulative sum** (i.e., on a month-by-month basis: the value for February is the sum of the revenues from January to February, and so on until December).
- Tests:
  - Create a few tests (just a couple, to prove you can write them) for the new components you designed.

## Bonus

Feel free to add and implement anything you think would improve the dashboard. Fancy visuals? New filters or features like additional tables or charts? It’s all up to you!

# Submission

## Format

Submit your assignment as a zip file containing all the source code of the project (excluding `node_modules`) and a `.git` folder (your archive should contain git project with a commit history).

## What we will evaluate

During the review of your submission, we will evaluate several aspects:

- Your front-end app **compiles and runs**. If there are any specific steps to install your project, please mention them in a documentation file.
- Your dashboard contains **all the required components**, showing data retrieved from the provided REST API.
- Your creation should be visually appealing, with consistent colors and user-friendly design. We will evaluate **your ability to make the dashboard look as nice as possible**.
- Your dashboard is **responsive**.
- The **quality of your code**: Ensure it is readable and maintainable by others.
- Your **Git history**, we expect to see the meaningful commits.
