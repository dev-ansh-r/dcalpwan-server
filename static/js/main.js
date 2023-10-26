// main.js for home page

document.addEventListener("DOMContentLoaded", function () {
    // Function to add rows to the Gateways table
    function addGatewayRow(gatewayData) {
        const gatewayTable = document.querySelector("#gateways table tbody");
        const row = gatewayTable.insertRow();
        row.insertCell(0).textContent = gatewayData.GWID;
        row.insertCell(1).textContent = gatewayData.GWEUI;
        row.insertCell(2).textContent = gatewayData.Description;
        row.insertCell(3).textContent = gatewayData["Last seen"];
    }

    // Function to add rows to the Applications table
    function addApplicationRow(applicationData) {
        const applicationTable = document.querySelector("#applications table tbody");
        const row = applicationTable.insertRow();
        row.insertCell(0).textContent = applicationData.APPID;
        row.insertCell(1).textContent = applicationData.APPEUI;
        row.insertCell(2).textContent = applicationData.Devices;
        row.insertCell(3).textContent = applicationData.Description;
    }

    applicationData.forEach(addApplicationRow);

    //fetch gateway data friom server
    fetch("/gateways")
        .then((response) => response.json())
        .then((data) => {
            const gatewayTableBody = document.getElementById("gatewayTableBody");
            // Clear the existing rows
            gatewayTableBody.innerHTML = '';
            data.forEach(addGatewayRow);
        })
        .catch((error) => {
            console.error("Error fetching gateway data:", error);
        });
});


// main.js for applications page
document.addEventListener("DOMContentLoaded", function () {

    // Function to add a new application row to the Applications table
    function addApplicationRow(applicationData) {
        const applicationTable = document.querySelector("#applications table tbody");
        const row = applicationTable.insertRow();
        row.insertCell(0).textContent = applicationData.APPID;
        row.insertCell(1).textContent = applicationData.APPEUI;
        row.insertCell(2).textContent = applicationData.Devices;
        row.insertCell(3).textContent = applicationData.Description;
        const ctrlCell = row.insertCell(4);

        // Settings button
        const settingsButton = document.createElement("button");
        settingsButton.innerHTML = '<i class="fas fa-cog"> </i>Settings';
        settingsButton.addEventListener("click", function () {
            // Handle settings button click (e.g., open a settings modal)
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>Delete';
        deleteButton.addEventListener("click", function () {
            // Handle delete button click (e.g., delete the application)
            row.remove();
        });

        ctrlCell.appendChild(settingsButton);
        ctrlCell.appendChild(deleteButton);
    }

    // Handle the "Add Application" button click
    const addApplicationButton = document.getElementById("addApplicationButton");
    addApplicationButton.addEventListener("click", function () {
        window.location.href = "applications/add";
    });

    // Add rows to the Applications table
    applicationData.forEach(addApplicationRow);
});



// main.js for gateways page
document.addEventListener("DOMContentLoaded", function () {

    // Function to add a new gateway row to the Gateways table
    function addGatewayRow(gatewayData) {
        const gatewayTable = document.querySelector("#gateways table tbody");
        const row = gatewayTable.insertRow();
        row.insertCell(0).textContent = gatewayData.GWID;
        row.insertCell(1).textContent = gatewayData.GWEUI;
        row.insertCell(2).textContent = gatewayData.Description;
        row.insertCell(3).textContent = gatewayData["Last seen"];
        const ctrlCell = row.insertCell(4);

        // Settings button
        const settingsButton = document.createElement("button");
        settingsButton.innerHTML = '<i class="fas fa-cog"> </i>Settings';
        settingsButton.addEventListener("click", function () {
            // Handle settings button click (e.g., open a settings modal)
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>Delete';
        deleteButton.addEventListener("click", function () {

            row.remove();
        });

        ctrlCell.appendChild(settingsButton);
        ctrlCell.appendChild(deleteButton);
    }


    // Handle the "Add Gateway" button click
    const addGatewayButton = document.getElementById("addGatewayButton");
    addGatewayButton.addEventListener("click", function () {
        window.location.href = "gateways/add";
    });

    // Add rows to the Gateways table
    gatewayData.forEach(addGatewayRow);
});


// main.js for network page

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    const networkForm = document.querySelector("form");
    const networkTableBody = networkForm.querySelector("table tbody");
    const updateButton = networkForm.querySelector("#updateButton");

    // Event listener for the "Update" button click
    updateButton.addEventListener("click", function () {
        // Handle the "Update" button
    });

    // Function to add a row to the "Network Channel Settings" table
    function addNetworkChannelRow(chIdx, centerFrequency) {
        const row = networkTableBody.insertRow();
        row.innerHTML = `
            <td>${chIdx}</td>
            <td>${centerFrequency} MHz</td>
            <td>
                <input type="checkbox" id="ch${chIdx}Disable" name="ch${chIdx}Mode" value="Disable">
                <label for="ch${chIdx}Disable">Disable</label>
                <input type="checkbox" id="ch${chIdx}Active" name="ch${chIdx}Mode" value="Active">
                <label for="ch${chIdx}Active">Active</label>
                <input type="checkbox" id="ch${chIdx}Beacon" name="ch${chIdx}Mode" value="Beacon">
                <label for="ch${chIdx}Beacon">Beacon</label>
            </td>
        `;
    }

    // Example data for network channel settings (you can load this from the server)
    const networkChannelSettings = [
        { chIdx: 0, centerFrequency: 922.1 },
        { chIdx: 1, centerFrequency: 922.3 },
        { chIdx: 2, centerFrequency: 922.5 },
        { chIdx: 3, centerFrequency: 921.9 },
        { chIdx: 4, centerFrequency: 922.7 },
        { chIdx: 5, centerFrequency: 922.9 },
        { chIdx: 6, centerFrequency: 923.1 },
        { chIdx: 7, centerFrequency: 923.3 },
        // Add more data as needed
    ];

    // Add rows to the "Network Channel Settings" table
    networkChannelSettings.forEach((setting) => {
        addNetworkChannelRow(setting.chIdx, setting.centerFrequency);
    });
});
