function sosa() {
  setTimeout(function() {
    sosa();
  }, 1000);
};

sosa()