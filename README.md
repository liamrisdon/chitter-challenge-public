Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
-----------------------------------------------------------------------------

Planning:

Presentation:
- Should display an array of peeps on the homepage
- Array of peeps should display in reverse chronological order
- Each peep should display name, user handle, time of creation
- Should be displayed nicely, using bootstrap, header and footer
- Provide a sign in/sign up page

Data:
- Should store all peeps in a collection
- Should store all users in a collection
- Should be able to pass array of peeps + user to frontend to display
- Should be able to receive post of new peeps and users
- Each peep and user should have a unique id 


Need to add authentication/verification!
^could be better
Need to add more styling!
Need to test!


Reflection:
The styling could be improved;
There is poor test coverage - ran out of time, will have to revisit.
Should put all API calls into API call file.
Could handle authentication better, only renders a generic error message if sign up is tried with an existing username or email.
