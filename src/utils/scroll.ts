export const scrollToSection = (section: number) => {
  const pageHeight = window.innerHeight;
  const sectionHeight = pageHeight * 0.93;
  const navHeight = pageHeight * 0.07;
  window.scrollTo({
    left: 0,
    top: pageHeight + (section-1) * sectionHeight - navHeight,
    behavior: "smooth",
  });
};