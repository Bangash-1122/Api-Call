const users = [{
        name: "Alex Johnson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAacd782EjgUIyOy4SUAySy7PeMKwC6nhL1hlrPFnwA&s=10",
        bio: "A creative professional who enjoys building ideas, solving problems, and working on meaningful projects."
    },
    {
        name: "Sarah Williams",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSFQTZbzNbN4idodUISPwpW7XgiMGvhXj9xEinQ8s7w&s=10",
        bio: "A motivated professional with an interest in collaboration, communication, and continuous learning."
    },
    {
        name: "Michael Brown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoocMimvJb6JNcXF21SZMnyQ-DJ7dhCVgewtJSp08tww&s=10",
        bio: "A technology-focused individual who enjoys developing solutions and exploring new ideas."
    },
    {
        name: "Emily Davis",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmwFtb7HBEJY0-jlNI64NQJm5bM07guYV8MxDSU6Vdg&s=10",
        bio: "A dedicated team member who values creativity, organization, and professional growth."
    },
    {
        name: "Daniel Wilson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wiprpx1hJUUX_umbq2T_NpRuFOpv-mhSmqRchx52tw&s=10",
        bio: "A problem solver who enjoys turning challenging ideas into practical and useful solutions."
    },
    {
        name: "Olivia Martinez",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC7MIDXDnpL-Cj0J4PD4E01mC6_NA6UwBRooHUTaLrQ&s=10",
        bio: "A passionate professional interested in creativity, teamwork, and developing new skills."
    },
    {
        name: "James Anderson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCb09EYf3dTSxwaDKowW8vw_wyFoJ8Pgssk_LusBEK7Q&s=10",
        bio: "A curious and analytical person who enjoys learning, building projects, and sharing knowledge."
    },
    {
        name: "Sophia Taylor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLFIVYPcQR3foYP5_UW8_G_51nwFeTjQof8OwYS0ZfA&s=10",
        bio: "A collaborative professional who focuses on communication, creativity, and achieving project goals."
    },
    {
        name: "William Thomas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXND4jFjjtrgoOfHDPPLz9l-60MpuqIF545bL9i9s3g&s=10",
        bio: "A motivated learner who enjoys technology, problem-solving, and working with others."
    },
    {
        name: "Emma Jackson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxTDPfcYb6ateYrNMxtisutthUrC7MyD1T8wbANF9WQ&s=10",
        bio: "A creative and enthusiastic professional who enjoys new challenges and continuous improvement."
    }
];

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

function showUsers(arr) {
    cardContainer.innerHTML = "";

    arr.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img
                src="${user.img}"
                alt="${user.name}"
                class="bg-img"
            >

            <div
                class="blurred-layer"
                style="--card-image: url('${user.img}')"
            ></div>

            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}


function filterUsers(arr, query) {
    const searchTerm = query.toLowerCase().trim();
    return arr.filter((user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.bio.toLowerCase().includes(searchTerm)
    );
}

searchInput.addEventListener("input", (event) => {
    const query = event.target.value;
    const filteredUsers = filterUsers(users, query);
    showUsers(filteredUsers);
});


showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function() {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value)
    });
    showUsers(newUsers);
});
