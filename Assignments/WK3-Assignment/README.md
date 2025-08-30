Instructions

User Stories

🐿️ As a developer, I want to retrieve upgrade information from an API so that all the developers working on the game can access a single, consistent source of up-to-date information.

🐿️As a user, I want to be able to purchase upgrades from the shop so that I can enhance my gameplay experience.

🐿️ As a developer, I want to use functions effectively to keep my code organised and reusable.

🐿️ As a user, I’d like the website to respond dynamically so that my interactions with the website are responsive and smooth.

🐿️ As a user, I want my cookie count and relevant game information to be stored in local storage so that my progress is saved and I can continue playing from where I left off later.

🐿️ As a user, I want the cookie count to increment automatically and the game state to update each second so that the game progresses even when I’m not actively clicking.

🐿️ As a user, I want the game state to be managed every second using setInterval to ensure my progress is saved and the game remains updated.

Requirements

🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.

🎯 Ensure that functions are used effectively to keep code organised and reusable.

🎯 Implement event listeners to handle user interactions.

🎯 Use local storage to save and restore the cookie count and relevant game information.

🎯 Use setInterval to increment the cookie count and manage the game state each second.

Managing the game state includes saving progress and updating the DOM.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

THOUGHTS THROUGHOUT
Followed through the demo, and created a template structure to follow and wrote out the pseudo code.
Had a look through pixabay and found a cartoon cookie image that I like and added to my html file.
Changed the image to a hungry octopus as I thought it more fun.
Created a folder to put my image in and linked the file path to make the image more easily accessible.
Have created sections and divs to divide my webiste into the sections i want and given them ids and classes to help with styling later.
Found a youtube tutorial to help me put the steps together the steps, as I understand which concepts I need to use but I am getting overwhelmed with how they work together.
Rubber ducked with Manny to understand the logic of the event handler, kept getting caught up and confused with the syntax. Managed to get there, now moving on to creating the elements for shop upgrades.
Went back through the class demos on DOM manipulation to figure out the code for making the new elements required for the elements.
Got stuck with the syntax, Manny pointed me towards the class demos for pulling the data from APIs. My code isnt showing any errors but the upgrades arent showing in my browser.
Asked chapgpt to, without giving me any code or telling me the answer, why the upgrade information from the API wasn't appearing in my browser. The response indicated a spelling error, and confirmed my own thought that I needed a return value to make the API information reusable.
Jumped on discord with Flavia, Will and Sam, they helped me work out why my buttons weren't appearing on the browser - we managed to get the buttons appearing but had to brainstorm and consult chatGPT on why it wouldnt append the child getUpgrades - we eventually worked out it was because the div 'shop container' that we were trying to append to I had labelled as a class not an Id.
