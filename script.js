const jobs = [
    { title: "Frontend Developer", company: "TechNova Solution", location: "Delhi", salary: "5 LPA" },
    { title: "Backend Developer", company: "XYZ Ltd", location: "Bangalore", salary: "6 LPA" },
    { title: "Full Stack Developer", company: "Tech Corp", location: "Remote", salary: "10 LPA" },
    { title: "UI/UX Designer", company: "Creative Designer", location: "Mumbai", salary: "4 LPA" },
    { title: "Data Analyst Intern", company: "Insight Labs", location: "Noida", salary: "7 LPA" },
    { title: "Java Developer", company: "TechNova Solution", location: "Pune", salary: "5 LPA" },
    { title: "Python Developer", company: "SoftLink Technologies", location: "Gurgaon", salary: "9 LPA" },
    { title: "QA Tester", company: "QualityFirst Tech", location: "Hyderabad", salary: "7 LPA" },
    { title: "DevOps Engineer", company: "SkyNet Cloud", location: "Mumbai", salary: "9 LPA" },
    { title: "HR Intern", company: "TalentHive", location: "Bangalore", salary: "7 LPA" },
    { title: "Devops Engineer", company: "SkyNet Cloud",location: "Mumbai", salary: "9 lpa" }, 
    { title: "Product Engineer", company: "Growth Bridge",location: "Delhi", salary: "9 lpa" }, 
    { title: "Support Engineer", company: "Help Desk Pro",location: "Noida", salary: "7 lpa" },
    { title: "Android Developer", company: "AppWorks", location: "Chennai", salary: "8 LPA" },
    { title: "Cyber Security Intern", company: "SecureTech", location: "Pune", salary: "6 LPA" }
 
];

// Popup functions (GLOBAL)
function openPopup(title) {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitForm() {
    alert("Application Submitted!");
    closePopup();
}

// MAIN CODE
document.addEventListener("DOMContentLoaded", () => {

    const jobList = document.getElementById("job-list");
    const searchInput = document.getElementById("search");
    const themeToggle = document.getElementById("theme-toggle");

    function displayJobs(jobArray) {
        jobList.innerHTML = "";

        jobArray.forEach(job => {
            const div = document.createElement("div");
            div.classList.add("job-card");

            div.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <p>${job.salary}</p>
                <button onclick="openPopup('${job.title}')">Apply</button>
            `;

            jobList.appendChild(div);
        });
    }

    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        const filtered = jobs.filter(job =>
            job.title.toLowerCase().includes(value) ||
            job.company.toLowerCase().includes(value)
        );

        displayJobs(filtered);
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        themeToggle.textContent =
            document.body.classList.contains("dark-mode")
                ? "Light Mode"
                : "Dark Mode";
    });

    // initial load
    displayJobs(jobs);
});
