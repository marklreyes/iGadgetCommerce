$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
    # Move footer p tags to mw-footer
    move_here("//*[@id='Footer']/p")

    # Remove desktop footer container
    remove("//*[@id='Footer']")
  }
}
