<strong>Brief Project Description:</strong>

This project was created by Veronica43, sschmidt0, LadyNazlia, and MinervLong as part of the International FemHack 2022 group challenge. Together, we created a Kahoot-inspired web application centered around important women in tech and fun facts about women in tech.

<strong>What is International FemHack 2022?</strong>

The international FemHack 2022 is an online conference and hackathon in one, created by Nuwe.io with the goal of bringing together women in tech from all over the world to help bridge the gender gap that existed in the tech field in many countries. The conference lasted for three days and consisted of an individual coding challenge and a team coding challenge, both of which revolved around influential women in tech to help inspire everyone who participates.

<strong>Project Requirements:<strong>

Now, imagine you've gathered here because the world needs an easier and funnier way to know and learn about women and their history within the tech world.

In a group of 3 to 4 develop an app or web that allows users to sign up with (name) and play a Kahoot-alike game to:

    1. Randomly know fun facts about women in tech (generated by a button)
    2. Answer random questions about women in tech or facts and get 10 points per correct answer
    3. See a profile that displays the name and the total score accumulated by the user
  
<strong>Technologies Used:</strong>
  - HTML5
  - JavaScript
  - SCSS
  - React
  - API:
      - Fun Fact API from https://ffa.aakhilv.me/
      - Robot Image API for user profile images from https://robohash.org/

<strong>Detailed Project Description:</strong>
 
The application, lovingly named Femhoot & Fun Facts, consists of four majors parts: User Login, an Initial Options Page, a Kahoot-like Q&A game with User Profile, and a random fun facts generator.

  - User Login Page -
When users first open the application, they are asked to login. This allows them to create a username. This feature is accomplished by using HTML and CSS for the visuals and React for receiving and storing the selected username so that it can be used later in the program. JavaScripted is used to validate the username.
  
  - Initial Options Page - 
Once users have logged in, they are presented with two options in the form of buttons. The options are "Fun Facts" or "Question Game". This is accomplished by using links within the HTML that link to other pages. 
  
  - Question Game/User Profile -
The Question Game page consists of multiple componnets included a user profiles with an API generated profile picture, a points tracker powered by JavaScipt and randomly generated questions that are individual objects stored in an array in a JavaScript file.

As users answer questions correctly by selecting a button and the value of the selected button is assessed using React combined with the array and options within the questions JavaScript file. If the answer is correct then the user will receive 10 points. Once the user has reached 100 points, the game is over.
  
    -Random Fun Facts Generator -
  
<strong>Additional Features</strong>
- Custom FemHoot and Fun Facts Logo
- The whole site is responsive using media queries for ease of use on all devices
    
<strong>Sources:</strong>
These website were used to create the questions for the Question game:
    
https://medium.com/the-shadow/10-somewhat-interesting-and-sometimes-fascinating-facts-about-women-in-tech-caab5614db8e
https://techjury.net/blog/women-in-technology-statistics/
  
  

