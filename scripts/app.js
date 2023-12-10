const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenu = document.querySelector(".navigation_link")

const elementProjectComplete = document.querySelector(
  "#value-project-complete"
);
const elementProjectExperience = document.querySelector(
  "#value-project-experience"
);

/*
 * vaue project complete dan year
 */
const containerValue = {
  ProjectComplete: 420,
  yearExperience: "30+",
};
console.log(containerValue);

/*
 * vaue menus
 */
const navigatinMenus = [
  {
    title: "Work",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Servis",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
];


/**
 * Untuk menampilkan sidebar ketika diklik
 *
 * Cara baca:
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 *
 * Cara baca:
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

/*
 * inject value dari jaascript dengan id
 * */
elementProjectComplete.append(containerValue.ProjectComplete);
elementProjectExperience.append(containerValue.yearExperience);
