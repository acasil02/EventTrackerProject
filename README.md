# EventTrackerProject

## Overview

This project is about being able to have a list of spendings you have. The Program will display all, retrieve one, create, update, and delete a spending of the users choice.

## Lessons Learned

Some lessons learned was mainly on how to create a new spending of the users choice.

## Postman

<table>
<thead>
<tr>
<th>Return Type</th>
<th>HTTP Method</th>
<th>URI</th>
<th>Request Body</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>List&lt;Spending&gt;</td>
<td>GET</td>
<td>http://localhost:8083/api/spending</td>
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
