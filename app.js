const projects = [
  {
    title: "Gradient Magic",
    tech: "HTML, CSS e JS",
    img: "/assets/project-gradient.png",
    link: "https://gradient-100.vercel.app/",
  },
  {
    title: "Heart POP",
    tech: "HTML, CSS e JS",
    img: "/assets/project-15.png",
    link: "https://project-15-100.vercel.app/",
  },
  {
    title: "Emojis",
    tech: "HTML, CSS e JS",
    img: "/assets/project-12.png",
    link: "https://project-12-100.vercel.app/",
  },
  {
    title: "Calculator",
    tech: "HTML, CSS e JS",
    img: "/assets/project-14.png",
    link: "https://project-14-100.vercel.app/",
  },
  {
    title: "Mudar Cores(Background)",
    tech: "HTML, CSS e JS",
    img: "/assets/project-11.png",
    link: "https://project-11-100.vercel.app/",
  },
  {
    title: "Image Animation",
    tech: "HTML e CSS",
    img: "/assets/project-7.png",
    link: "https://project-7-100.vercel.app/",
  },
  {
    title: "Animation Loading",
    tech: "HTML e CSS",
    img: "/assets/project-2.webp",
    link: "https://project-2-100.vercel.app/",
  },
  {
    title: "Entrada Landing Page",
    tech: "HTML e CSS",
    img: "/assets/project-1.webp",
    link: "https://project-1-100.vercel.app/",
  },
  {
    title: "Press a Key",
    tech: "HTML, CSS e JS",
    img: "/assets/project-13.png",
    link: "https://project-13-100.vercel.app",
  },
  {
    title: "Creative Cards",
    tech: "HTML e CSS",
    img: "/assets/project-8.png",
    link: "https://projects-8-100.vercel.app",
  },
  {
    title: "Image Hover",
    tech: "HTML e CSS",
    img: "/assets/project-4.webp",
    link: "https://projects-4-100.vercel.app",
  },
  {
    title: "Hover Me",
    tech: "HTML e CSS",
    img: "/assets/project-9.png",
    link: "https://projects-9-100.vercel.app",
  },
  {
    title: "Menus Animation",
    tech: "HTML e CSS",
    img: "/assets/project-6.webp",
    link: "https://project-6-100.vercel.app",
  },
  {
    title: "Buttons Animation",
    tech: "HTML e CSS",
    img: "/assets/project-5.webp",
    link: "https://project-5-100.vercel.app",
  },
  {
    title: "Accordion FAQ",
    tech: "HTML e CSS",
    img: "/assets/project-10.png",
    link: "https://project-10-100.vercel.app",
  },
  {
    title: "Scrollbar",
    tech: "HTML e CSS",
    img: "/assets/project-3.webp",
    link: "https://project-3-100.vercel.app/",
  },
  {
    title: "Scrollbar",
    tech: "HTML e CSS",
    img: "/assets/project-3.webp",
    link: "https://project-3-100.vercel.app/",
  },
];

const wrapper = document.getElementById("projects-wrapper");
const pagination = document.getElementById("pagination");

const itemsPerPage = 8;
let currentPage = 1;

function renderProjects(page) {
wrapper.classList.remove("fade-in");
wrapper.classList.add("fade-out");

setTimeout(() => {
  wrapper.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = projects.slice(start, end);

  currentItems.forEach(project => {
    wrapper.innerHTML += `
      <div class="thumbnails">
        <a href="${project.link}" target="_blank">
          <img src="${project.img}" alt="${project.title}">
        </a>
        <h4>${project.title}</h4>
        <h5><b>Languages</b>: ${project.tech}</h5>
      </div>
    `;
  });

  wrapper.classList.remove("fade-out");
  wrapper.classList.add("fade-in");
}, 200);
}


function renderPagination() {
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  pagination.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "&#8249;";
  prevBtn.classList.add("round");
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjects(currentPage);
      renderPagination();
    }
  });
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      currentPage = i;
      renderProjects(currentPage);
      renderPagination();
    });
    pagination.appendChild(btn);
  }
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "&#8250;";
  nextBtn.classList.add("round");
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProjects(currentPage);
      renderPagination();
    }
  });
  pagination.appendChild(nextBtn);
}

renderProjects(currentPage);
renderPagination();
