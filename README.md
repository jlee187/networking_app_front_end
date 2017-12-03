Purpose of the app: Doctors add notes to your patient history; apparel companies
send you birthday discounts, all to create a stronger relationship in a shorter
period of time. This app labeled "JMAIL" or gmail for a better Job aims to help
you create a stronger network in a shorter period of time by allowing you to
remember pertitent information about people you meet wherever you have internet access!

How it works: Simply sign up/ sign in/ change a password and sign out when you're done.
While logged in compose a new note, edit a previous note, delete a previous note, get
the full list of your notes, and hide the list when you're done with it.

To generate this app, two repositories had to be created: 1) front end 2) back end/ API.
The front end would leverage Javascript, CSS, HTML, and Jquery to register actions and send them
to the API. Once the action is received by the API, Ruby on Rails interprets the action and passes
the information to the database and routes it back to the client front end. The API leverages
Ruby on Rails to perform these actions.

Planning/ Development Process : First, I outlined the purpose of my app. While I spent
more time outlining and planning my app, a stronger structure and necessary builds would expedite
build time and increase clarity of code. From the purpose, wireframes and enterprise relationship
diagrams were made soon after which outlined areas which may be more difficult to tackle and would
garner additional working and testing time. Naturally, based on importance to achieve base goals and
assumed time to completion, a planning schedule was created and tracked again.

Problem-Solving Strategy: When issues were hit, my typical strategy was to first review the code for
any clear typos or syntax errors. After this, I would reference google or previous notes I had taken on the
issue at hand. If that failed, I would usually consult a classmate or professional for additional guidance.

Wireframe: https://imgur.com/o2U6oZV
ERD: https://imgur.com/TusWEgG

Github Front End: https://github.com/jlee187/networking_app_front_end
Github API: https://github.com/jlee187/networking_app

Deployed Front End: https://jlee187.github.io/networking_app_front_end/
Deployed Back End: https://networkingapp.herokuapp.com/

Technologies Used: Javascript, Ruby, Ruby on Rails, JQuery, and HTML

Unsolved Problems to Finish/ Add-ons: Would like to add a new many-to-many table
that captures people's companies that they work at with another screen that shows
any person that works at a certain company.
