export const openLinkedin = () => {
    const url = "https://www.linkedin.com/in/eliabe-rodrigues-8909a320b/";
    window.open(url, "_blank");
};
export const openGitHub = () => {
    const url = "https://github.com/eliaberr";
    window.open(url, "_blank");
};
export const openWhatsApp = () => {
    const phone = "5511951285687";
    const mensage = "Olá, vim pelo seu portfólio.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensage)}`;
    window.open(url, "_blank");
    console.log(url);
};
export const openEmial = () => {
    const email = "eliabe859@gmail.com";
    window.open(`mailto:${email}`, "_blank");
};
