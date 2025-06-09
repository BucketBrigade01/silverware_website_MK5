async function loadShow() {
    try {
        const response = await fetch('scripts/shows.json'); // Updated path to scripts folder
        const data = await response.json();

        const showsContainer = document.getElementById('show-container'); // Changed to match your HTML ID

        showsContainer.innerHTML = '';

        data.shows.forEach(show => {
            const showElement = createShowElement(show);
            showsContainer.appendChild(showElement);
        });
    }   
    catch (error) {
         console.error('Error loading shows:', error);
        document.getElementById('show-container').innerHTML = '<p>Unable to load show information.</p>'; // Updated ID
    }
}

function createShowElement(show) {
    const showDiv = document.createElement('div');
    showDiv.className = 'show-item';
    
    if (show.ticketLink === "") {
        showDiv.innerHTML = `
            <div class="show-content">
                <div>
                    <h4 class="show-title">${show.title}</h3>
                    <p class="show-date">${show.date}</p>
                </div>
                <p class="show-address">${show.address}</p>
                <a  href="${show.ticketLink}" target="_blank" rel="noopener">
                    <button class="no-ticket-button" >
                        Tix Not Available
                    </button>
                </a>
            </div>
            <hr class="ticket-sep">
        `;
    }
    else {
        showDiv.innerHTML = `
            <div class="show-content">
                <div>
                    <h4 class="show-title">${show.title}</h3>
                    <p class="show-date">${show.date}</p>
                </div>
                <p class="show-address">${show.address}</p>
                <a  href="${show.ticketLink}" target="_blank" rel="noopener">
                    <button class="ticket-button" >
                        Get Tickets
                    </button>
                </a>
            </div>
            <hr class="ticket-sep">
        `;
    }
    
    return showDiv;
}

document.addEventListener('DOMContentLoaded', loadShow);

function refreshShows() {
    loadShow();
}