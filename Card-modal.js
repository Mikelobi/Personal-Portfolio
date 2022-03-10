// array of project objects

const project1 = {
  title: 'Tonic',
  id: 1,
  imageSrc: 'image/Snapshoot-Portfolio.png',
  image: 'image/bar.png',
  language: ['CANOPY', 'Back End Dev', '2015'],
  technologies: ['html', 'css', 'javascript'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://mikelobi.github.io/Personal-Portfolio/',
  githubLink: 'https://github.com/Mikelobi/Personal-Portfolio',
};
const project2 = {
  title: 'Tonic',
  id: 2,
  imageSrc: 'image/Snapshoot-Portfolio.png',
  image: 'image/bar.png',
  language: ['CANOPY', 'Back End Dev', '2015'],
  technologies: ['html', 'css', 'javascript'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://mikelobi.github.io/Personal-Portfolio/',
  githubLink: 'https://github.com/Mikelobi/Personal-Portfolio',
};
const project3 = {
  title: 'Tonic',
  id: 3,
  imageSrc: 'image/Snapshoot-Portfolio.png',
  image: 'image/bar.png',
  language: ['CANOPY', 'Back End Dev', '2015'],
  technologies: ['html', 'css', 'javascript'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://mikelobi.github.io/Personal-Portfolio/',
  githubLink: 'https://github.com/Mikelobi/Personal-Portfolio',
};
const project4 = {
  title: 'Tonic',
  id: 4,
  imageSrc: 'image/Snapshoot-Portfolio.png',
  image: 'image/bar.png',
  language: ['CANOPY', 'Back End Dev', '2015'],
  technologies: ['html', 'css', 'javascript'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://mikelobi.github.io/Personal-Portfolio/',
  githubLink: 'https://github.com/Mikelobi/Personal-Portfolio',
};
const projects = [project1, project2, project3, project4];

// Target open and close triggers in html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const openElems = Array.from(openEls);
const closeElems = Array.from(closeEls);
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

// Create main page work section html elements

// Create work detail modal html elements
function modal(number) {
  // Create article modal
  const article = document.createElement('article');
  article.id = `project${projects[number].id}`;
  article.className = 'modal';
  // Create div inside article modal
  const insideDiv = document.createElement('div');
  insideDiv.className = 'modal-dialogg';
  article.appendChild(insideDiv);
  // Create boottom bar div
  const barDiv = document.createElement('div');
  barDiv.className = 'image-footer';
  const barImg = document.createElement('img');
  barImg.src = `${projects[number].image}`;
  barDiv.appendChild(barImg);
  article.appendChild(barDiv);
  // Create Title modal div
  // Create title header
  const imageDiv = document.createElement('div');
  imageDiv.className = 'modal-title';
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = `${projects[number].title}`;
  insideDiv.appendChild(imageDiv);
  imageDiv.appendChild(projectTitle);
  // Create x to close modal
  const closeModalBtn = document.createElement('span');
  closeModalBtn.innerHTML = 'X';
  imageDiv.appendChild(closeModalBtn);

  // Create Language div to hold tags
  const languageTags = document.createElement('div');
  languageTags.className = 'modal-tool';
  insideDiv.appendChild(languageTags);
  // Create ul for tags inside div
  const languageList = document.createElement('ul');
  languageTags.appendChild(languageList);
  // Creat list items that go inside ul
  projects[number].language.forEach((listItem) => {
    const liDiv = document.createElement('li');
    liDiv.className = 'social';
    const link = document.createTextNode(`${listItem}`);
    liDiv.appendChild(link);
    languageList.appendChild(liDiv);
  });

  // Create image
  const picDiv = document.createElement('div');
  picDiv.className = 'modal-body';
  const projectImg = document.createElement('img');
  projectImg.src = `${projects[number].imageSrc}`;
  picDiv.appendChild(projectImg);
  insideDiv.appendChild(picDiv);

  // Create web modal div
  // Create paragraph
  const webModalDiv = document.createElement('div');
  webModalDiv.className = 'web-modal';
  const projectTextDiv = document.createElement('p');
  const projectText = document.createTextNode(
    `${projects[number].description}`,
  );
  projectTextDiv.appendChild(projectText);
  webModalDiv.appendChild(projectTextDiv);
  insideDiv.appendChild(webModalDiv);

  // Create div to hold tags
  const technologyTags = document.createElement('div');
  technologyTags.className = 'links-modal';
  webModalDiv.appendChild(technologyTags);
  // Create ul for tags inside div
  const technologyList = document.createElement('ul');
  technologyList.className = 'mode-language';
  technologyTags.appendChild(technologyList);
  // Creat list items that go inside ul
  projects[number].technologies.forEach((listItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const link = document.createTextNode(`${listItem}`);
    a.appendChild(link);
    a.href = '#';
    li.appendChild(a);
    technologyList.appendChild(li);
  });
  // Create Link and Source
  // Create div for buttons
  const projectButtons = document.createElement('ul');
  projectButtons.className = 'modal-live modal-live-web';
  // Create live and source buttons
  const liveButton = document.createElement('li');
  const sourceButton = document.createElement('li');
  // Create a tag inside buttons
  const liveLink = document.createElement('a');
  const sourceLink = document.createElement('a');
  liveLink.className = 'modal-button button';
  sourceLink.className = 'modal-button button';
  const linkText = document.createTextNode('See Live');
  const sourceText = document.createTextNode('See Source');
  liveLink.appendChild(linkText);
  sourceLink.appendChild(sourceText);
  liveLink.href = `${projects[number].liveLink}`;
  sourceLink.href = `${projects[number].githubLink}`;
  liveLink.setAttribute('target', '_blank');
  sourceLink.setAttribute('target', '_blank');
  liveButton.append(liveLink);
  sourceButton.append(sourceLink);
  // Create font-awesome icon inside button
  const liveIcon = document.createElement('div');
  liveIcon.className = 'modal-icon';
  const gitIcon = document.createElement('div');
  gitIcon.className = 'modal-icon-github';
  liveLink.append(liveIcon);
  sourceLink.append(gitIcon);
  projectButtons.appendChild(liveButton);
  projectButtons.appendChild(sourceButton);
  technologyTags.appendChild(projectButtons);
  // Add article to body
  document.body.appendChild(article);
  // Add close trigger to x button on project detail
  closeModalBtn.addEventListener('click', () => {
    if (document.querySelector('.modal.is-visible')) {
      document
        .querySelector('.modal.is-visible')
        .classList.remove('is-visible');
      document.body.style.overflow = 'auto';
    }
  });
}

openElems.forEach((el) => {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
});
// Close modal
closeElems.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// add event listener on click outside modal to close modal and enable scroll
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on esc key to close modal and enable scroll
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});
modal();
