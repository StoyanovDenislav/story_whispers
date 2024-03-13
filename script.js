function scrollToScene(sceneId) {
    const targetSection = document.getElementById(sceneId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }