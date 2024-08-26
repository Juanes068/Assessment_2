/*function Rname() {
    let name = prompt("What's your name?");
    document.getElementById("fullname").textContent = name;
    
}*/

/*let EmailAddress = prompt ("What's your email address?");
document.getElementById("EMAIL1").textContent = EmailAddress;

let Date = prompt ("Today's date?");
document.getElementById("DATE1").textContent = Date; */




window.onload = function() {

    let EmailAddress = prompt ("What's your email address?");
document.getElementById("EMAIL1").textContent = EmailAddress;

let Date = prompt ("Today's date?");
document.getElementById("DATE1").textContent = Date;
};


let http = "80 port / Layer 7";
document.getElementById("HTTP").textContent = http;
let https = "443 port / Layer 7";
document.getElementById("HTTPS").textContent = https;
let ssh = "22 port / Layer 7";
document.getElementById("DNS").textContent = ssh;
let dns = "53 port / Layer 7";
document.getElementById("SSH").textContent = dns;

function Rname() {
    let name;
    do {
        name = prompt("What's your name?");
        if (name !== null && typeof name === 'string' && name.trim() !== '') {
            document.getElementById("fullname").textContent = name;
            break; 
            alert('ERROR');
        }
    } while (true); 
}



function Nitems(){
        let numberOfItems;
        do {
            numberOfItems = parseInt(prompt("How many items would you like in the list?"), 10);
            if (isNaN(numberOfItems) || numberOfItems < 1 || numberOfItems > 10) {
                alert("Please enter a number between 1 and 10.");
            }
        } while (isNaN(numberOfItems) || numberOfItems < 1 || numberOfItems > 10);
    
        const itemList = document.getElementById("itemList");
        itemList.innerHTML = ''; // Clear existing items
    
        for (let i = 1; i <= numberOfItems; i++) {
            itemList.innerHTML += `
                <div class="d-flex mb-4">
                    <div class="text-primary">
                        <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                    </div>
                    <div class="mx-2">
                        <h3 class="h5 fw-bold mb-1">Item #${i}</h3>
                        <p>This is item #${i}.</p>
                    </div>
                </div>
            `;
        }
    }

let ex = "Juan E Triana ";
document.getElementById("").textContent = ex;