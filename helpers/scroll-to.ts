export const executeScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    //  Will scroll smothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
