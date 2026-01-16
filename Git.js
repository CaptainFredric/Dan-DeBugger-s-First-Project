(() => {
  const projects = [
    {
      title: "Project Example (Replace Me)",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "Swap this placeholder with a real project. Update the title, tech stack, description, and links in Git.js.",
      imageSrc: "./assets/project_placeholder.svg",
      imageAlt: "Project preview",
      githubUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
      liveUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
    },
    {
      title: "Project Example (Replace Me)",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "This list is now data-driven. Add/remove objects in the projects array to update the Projects section.",
      imageSrc: "./assets/project_placeholder.svg",
      imageAlt: "Project preview",
      githubUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
      liveUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
    },
    {
      title: "Project Example (Replace Me)",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "Once you have a live demo, replace the liveUrl. If you don’t, set liveUrl to an empty string to hide the link.",
      imageSrc: "./assets/project_placeholder.svg",
      imageAlt: "Project preview",
      githubUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
      liveUrl: "https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project",
    },
  ];

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function buildProjectCard(project) {
    const li = document.createElement("li");
    li.className = "project reveal";

    const wrapper = document.createElement("div");
    wrapper.className = "project_wrapper";

    const img = document.createElement("img");
    img.className = "project_img";
    img.src = project.imageSrc;
    img.alt = project.imageAlt || "Project preview";
    img.loading = "lazy";
    img.decoding = "async";

    const description = document.createElement("div");
    description.className = "project_description";

    const title = document.createElement("h3");
    title.className = "project_description--title";
    title.textContent = project.title;

    const subtitle = document.createElement("h4");
    subtitle.className = "project_description--sub-title";
    subtitle.textContent = project.subtitle;

    const para = document.createElement("p");
    para.className = "project_description--para";
    para.textContent = project.description;

    description.appendChild(title);
    description.appendChild(subtitle);
    description.appendChild(para);

    const links = document.createElement("div");
    links.className = "project_description--links";

    if (project.githubUrl) {
      const gh = document.createElement("a");
      gh.href = project.githubUrl;
      gh.target = "_blank";
      gh.rel = "noopener";
      gh.innerHTML =
        '<i class="fab fa-github" aria-hidden="true"></i><span class="sr-only">GitHub</span>';
      links.appendChild(gh);
    }

    if (project.liveUrl) {
      const live = document.createElement("a");
      live.href = project.liveUrl;
      live.target = "_blank";
      live.rel = "noopener";
      live.innerHTML =
        '<i class="fas fa-link" aria-hidden="true"></i><span class="sr-only">Live Link</span>';
      links.appendChild(live);
    }

    wrapper.appendChild(img);
    wrapper.appendChild(description);
    wrapper.appendChild(links);

    li.appendChild(wrapper);
    return li;
  }

  function renderProjects() {
    const list = document.getElementById("project_list");
    if (!list) return;

    list.textContent = "";

    projects.forEach((project) => {
      list.appendChild(buildProjectCard(project));
    });
  }

  function setupScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function setupBackToTop() {
    const button = document.getElementById("backToTop");
    if (!button) return;

    let ticking = false;

    function update() {
      const shouldShow = window.scrollY > 500;
      button.classList.toggle("is-visible", shouldShow);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    button.addEventListener("click", () => {
      if (prefersReducedMotion) {
        window.scrollTo(0, 0);
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  renderProjects();
  setupScrollReveal();
  setupBackToTop();
})();
