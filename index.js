let content = document.querySelector('.js-generated.content')

//header
let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

//dog content div
let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);

//dog image
let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.src = "./assets/rizzo.jpg"
dogContent.append(dogImage);

//dog details div
let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);

//description header
let description = document.createElement("h3");
description.append("Description: ");
dogDetails.append(description);

//paragraph
let paragraph = document.createElement("p");
paragraph.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.");
dogDetails.append(paragraph);

//feeding times
let feedingTimes = document.createElement("h3");
feedingTimes.append("Feeding times:");
dogDetails.append(feedingTimes);

//feeding time list
let feedingTimesList = document.createElement("ul");
dogDetails.append(feedingTimesList);

//list items
let firstTime = document.createElement("li");
firstTime.append("9:00 am");
let secondTime = document.createElement("li");
secondTime.append("12:00 pm");
let thirdTime = document.createElement("li");
thirdTime.append("5:00 pm");
feedingTimesList.append(firstTime, secondTime, thirdTime);