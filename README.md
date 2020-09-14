# Hamburger Handlebars

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#usage">Usage</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#license">License</a>
6. <a href="#test">Tests</a>
7. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
Hamburger handlebars is a website quickly designed and templated, using Express Handlebars fo HTML templating. The website itself can be seen at https://hamburger-handlebars.herokuapp.com/. Check it out to enter your own burgers into the database! Each "burger" is an object stored in a Structured Query Library (SQL) database, which in turn is stored persistently on a server. Burgers can be updated by devouring them, or they can be deleted from the database. Users will be able to see burgers entered by any other user, given the persistent nature of the database. Handlebars templating is used to quickly generate HTML pages on-the-fly, to show the lists of burgers. The Sequelize Object-Relational Mapper (ORM) library is used to easily manage the SQL database. The page was also styled to keep as closely as possible to "hamburgers as a concept". Why? Because hamburgers are delicious.

![image](https://user-images.githubusercontent.com/64618290/93033128-c173d380-f5e9-11ea-8535-4cd48f6b27d1.png)

<h3 id='installation'>Installation</h3>
The website can easily be viewed at the link above. The source code can also be run using Node.js and Node Package Manager on a local machine. The database must also be initialized by using MySQL workbench. Clone this repository and navigate to the program in a terminal. Run "npm install" to install the appropriate dependencies. A file entitled '.env' will have to be created to hold local environment variables, consisting of the following code: 
```
DB_USERNAME=&lt;YOUR-SQL-USERNAME&gt;<br>
DB_PASSWORD=&lt;YOUR-SQL-PASSWORD&gt;<br>
DB_HOST=localhost<br>
DB_DATABASE=burgers_db<br>
```
Finally, type "node server.js" into the terminal to get the local server running. Visit localhost:8080 in your web browser to see the website.

<h3 id='usage'>Usage</h3>
Simply go to the website, fill in the form, and click the buttons. Enter the burger you want to eat, then go out and eat a burger!

<h3 id='contributions'>Contributions</h3>
Contact the auther through GitHub or email with suggestions or comments.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='test'>Tests</h3>
Go to the website and enter burgers into the database! Testing on a local macchine can be performed by following the above installation instructions.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>