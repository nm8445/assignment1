/*
Header Comments:
Name: Jaden Parris, Nathaniel Mais
Student ID: 100774161 and <Nathaniel's ID>
Date of completion: January 27th, 2024
*/

"use strict";

(function () {
    // Array of initial project images with titles and descriptions
    const initialProjects = [
        {
            image: './pictures/tic.png',
            title: 'Project 1: Tic-Tac-Toe',
            description: 'Engage in the classic Tic Tac Toe game. Simple, fun, and perfect for quick strategic plays.'
        },
        {
            image: './pictures/board.jpg',
            title: 'Project 2: Chess ',
            description: 'Experience the grandeur of Chess in a digital format, complete with smart AI opponents.'
        },
        {
            image: './pictures/Minecraft.jpg',
            title: 'Project 3 : Minecraft',
            description: 'Explore and build in a Minecraft-like blocky landscape, where creativity meets adventure.'
        }
    ];

    // Array of additional project images with titles and descriptions
    const additionalProjects = [
        {
            image: './pictures/cod.jpg',
            title: 'Project 4: Call Of Duty',
            description: 'A fast-paced first-person shooter game inspired by Call of Duty, focusing on quick reflexes and strategic gameplay.'
        },
        {
            image: './pictures/Dead-by-Daylight.jpg',
            title: 'Project 5: Dead By Daylight',
            description: 'Navigate a thrilling survival horror scenario inspired by Dead by Daylight, balancing stealth and boldness.'
        },
        {
            image: './pictures/card.png',
            title: 'Project 6: Black Jack',
            description: 'Engage in the timeless card game of Blackjack, featuring a sleek design and intuitive gameplay for all skill levels.'
        }
    ];

    /**
     * Creates and displays project cards in the specified container.
     *
     * @param {Array} projects - Array of project objects containing image, title, and description.
     * @param {HTMLElement} projectsContainer - The HTML element where project cards will be appended.
     */
    function createProjectCards(projects, projectsContainer) {
        projects.forEach(project => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4 mb-4';

            const projectCard = document.createElement('div');
            projectCard.className = 'card';
            projectCard.innerHTML = `
                <img class="card-img-top" src="${project.image}" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            `;
            colDiv.appendChild(projectCard);
            projectsContainer.appendChild(colDiv);
        });
    }

    /**
     * Sets up the 'Load More' button to display additional projects when clicked.
     *
     * Adds an event listener to the 'Load More' button. When clicked, additional projects
     * are loaded and the button is hidden.
     */
    function setupLoadMoreButton() {
        const loadMoreButton = document.getElementById('load-more');
        const projectsContainer = document.getElementById('projects-container');

        loadMoreButton.addEventListener('click', function () {
            createProjectCards(additionalProjects, projectsContainer);
            loadMoreButton.style.display = 'none'; // Hide the button after loading additional projects
        });
    }

    /**
     * Initial function to set up the web page.
     *
     * Calls the createProjectCards function to load initial projects and sets up
     * the 'Load More' button.
     */
    function Start() {
        const projectsContainer = document.getElementById('projects-container');
        createProjectCards(initialProjects, projectsContainer);
        setupLoadMoreButton();

        // Add any additional initialization or event listeners here
    }

    window.addEventListener("load", Start);
})();
