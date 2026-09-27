"use strict";

function init() {

    const eventCards = document.querySelectorAll(".event-card");

    for (let index = 0; index < eventCards.length; index++) {

        const card = eventCards[index];

        const button = document.createElement("button");

        button.textContent = "Save Event";

        button.classList.add("save-event-button");

        button.addEventListener("click", function(event) {
            saveEvent(event, card, index);
        });

        card.appendChild(button);
    }

    createSavedEventsSection();
}


function createSavedEventsSection() {

    const main = document.querySelector("main");

    const section = document.createElement("section");
    section.id = "saved-events";

    const heading = document.createElement("h2");
    heading.textContent = "Saved Events";

    const message = document.createElement("p");
    message.id = "saved-message";
    message.textContent = "No events have been saved yet.";

    const list = document.createElement("ul");
    list.id = "saved-events-list";

    section.appendChild(heading);
    section.appendChild(message);
    section.appendChild(list);

    main.appendChild(section);
}


function saveEvent(event, card, index) {

    const button = event.currentTarget;

    if (button.textContent === "Save Event") {

        addEvent(card, button, index);

    } else {

        removeEvent(card, button, index);

    }
}


function addEvent(card, button, index) {

    card.classList.add("saved-event");

    button.textContent = "Remove Event";

    const eventName = card.querySelector("h3");

    const eventTime = card.querySelector("time");

    const paragraphs = card.querySelectorAll("p");

    const eventLocation = paragraphs[1];

    const listItem = document.createElement("li");

    listItem.id = "saved-event-" + index;

    listItem.textContent =
        eventName.textContent + " - "
        + eventTime.textContent + " - "
        + eventLocation.textContent;

    const savedList =
        document.querySelector("#saved-events-list");

    savedList.appendChild(listItem);

    updateMessage();
}


function removeEvent(card, button, index) {

    card.classList.remove("saved-event");

    button.textContent = "Save Event";

    const listItem =
        document.querySelector("#saved-event-" + index);

    listItem.remove();

    updateMessage();
}


function updateMessage() {

    const savedEvents =
        document.querySelectorAll("#saved-events-list li");

    const message =
        document.querySelector("#saved-message");

    if (savedEvents.length === 0) {

        message.textContent = "No events have been saved yet.";

    } else {

        message.textContent = "";

    }
}


document.addEventListener("DOMContentLoaded", init);