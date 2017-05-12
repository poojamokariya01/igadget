// # match($path) {
// #   # Match the Ajax path
// #   with(/foo/) {
// #     # import a file or modify directly in here
// #     # you can consider using the html_fragment() {} scope
// #   }
// # }
match($path) {
  with(/category/) {
    // # Tritium I want to run on Ajax content with "category" in the URL.
  }
  with(/product/) {
    // # Tritium I want to run on Ajax content with "product" in the URL.
  }
  else() {
    log("This Ajax content is unrecognized.")
  }
}