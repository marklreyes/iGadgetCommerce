$('./body') {
  insert_top("header", class: "mw-header") {
    # Move logo and search elements to mw-header
    move_here("//*[@id='Logo']")
    move_here("//*[@id='SearchForm']")
  }
}
