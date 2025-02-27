window.onload = function () {
      alert("Welcome to your professional profile! You can update your bio by clicking 'Update Bio'.");
    };
function updateBio() {
    
    let name = prompt("Please enter your name:");
    if (!name) {
        alert("Name cannot be empty!");
        return;
    }

    let phone = prompt("Please enter your phone number:");
    if (!phone) {
        alert("Phone number cannot be empty!");
        return;
    }

    let email = prompt("Please enter your email:");
    if (!email) {
        alert("Email cannot be empty!");
        return;
    }

    let address = prompt("Please enter your address:");
    if (!address) {
        alert("Address cannot be empty!");
        return;
    }

    let college = prompt("Please enter your college name:");
    if (!college) {
        alert("College name cannot be empty!");
        return;
    }

    let branch = prompt("Please enter your branch:");
    if (!branch) {
        alert("Branch cannot be empty!");
        return;
    }

    let profilePic = prompt("Please provide the URL for your profile picture:");
    if (!profilePic) {
        alert("Profile picture URL cannot be empty!");
        return;
    }

    
    alert(`Updated Bio:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nCollege: ${college}\nBranch: ${branch}`);

    
    console.log("User Bio Information:");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("College:", college);
    console.log("Branch:", branch);
    
    
    document.getElementById("profile-picture").src = profilePic;
    document.getElementById("name").innerHTML = "Name: " + name;
    document.getElementById("info-name").innerHTML = name;
    document.getElementById("info-phone").innerHTML = phone;
    document.getElementById("info-email").innerHTML = email;
    document.getElementById("info-address").innerHTML = address;
    document.getElementById("info-college").innerHTML = college;
    document.getElementById("info-branch").innerHTML = branch;
}



