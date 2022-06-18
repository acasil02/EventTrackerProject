# EventTrackerProject

## Overview

This project is about being able to have a list of spendings you have. The Program will display all, retrieve one, create, update, and delete a spending of the users choice. This project also included JavaScript to load all current list for the program, create, delete, and update all within the same webpage. The third week was about getting all the visual studio front end to have fully functional crud to give the user access to it using a website.

## Lessons Learned

Some lessons learned was mainly on how to create a new spending of the users choice. Other lessons i have also learned was to properly place and correctly the javascript methods to work and display all information. The lessons learned was about how to properly link functions from different sides of files and being able to access and display them on a front end site for the user to interact with.

## REST API Reference

<table>
<thead>
<tr>
<th>Return Type</th>
<th>HTTP Method</th>
<th>URL</th>
<th>Request Body</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>List&lt;Spending&gt;</td>
<td>GET</td>
<td>http://localhost:8083/api/spendings</td>
<td></td>
<td>List</td>
</tr>
<tr>
<td>Spending By ID</td>
<td>GET</td>
<td>http://localhost:8083/api/spending/{id}</td>
<td></td>
<td>Retrieve</td>
</tr>
<tr>
<td>Spending</td>
<td>POST</td>
<td>http://localhost:8083/api/spending</td>
<td>User JSON</td>
<td>Create</td>
</tr>
<tr>
<td>Spending</td>
<td>PUT</td>
<td> http://localhost:8083/api/spending/{id}</td>
<td>User JSON</td>
<td>Update</td>
</tr>
<tr>
<td>Spending</td>
<td>DEL</td>
<td>http://localhost:8083/api/spending/{id}</td>
<td></td>
<td>Delete</td>
</tr>
</tbody>
</table>

<!-- * View Spendings list: GET http://localhost:8083/api/spending
* View Spendings by ID: GET http://localhost:8083/api/spending/{id}
* View Create Spendings: POST http://localhost:8083/api/spending
* View Update Spendings: PUT http://localhost:8083/api/spending/{id}
* View Delete Spendings: DEL http://localhost:8083/api/spending/{id} -->

## Technologies/Skills Used

-   Java
-   JavaScript
-   Visual Studio Code
-   Git
-   Terminal
-   Java
-   Spring Tool Suite
-   Github
-   MySQL Workbench
-   Gradle
-   Postman
-   JSON
-   TOMCAT
